// src/adapters/NNSAdapter.ts

import { Actor, HttpAgent, type ActorSubclass, Identity } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import { type Wallet, Adapter } from "../types/index.d";
import { Principal } from "@dfinity/principal";
import dfinityLogo from "../../assets/dfinity.webp";
import { AccountIdentifier } from "@dfinity/ledger-icp";

export class NNSAdapter implements Adapter.Interface {
  static readonly logo: string = dfinityLogo;
  // Required property from Adapter.Interface
  name: string = "Internet Identity";
  logo: string = NNSAdapter.logo;
  url: string;
  config: Wallet.PNPConfig;

  // Internal properties
  private authClient: AuthClient | null = null;
  private agent: HttpAgent | null = null;
  private state: Adapter.Status = Adapter.Status.INIT;

  constructor(config?: Partial<Wallet.PNPConfig>) {
    this.url = "https://identity.ic0.app";
    this.config = {
      verifyQuerySignatures: config?.verifyQuerySignatures,
      fetchRootKeys: config?.fetchRootKeys,
      identityProviderUrl: config?.isDev
        ? "https://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943/#authorize"
        : "https://identity.ic0.app/authenticate",
      derivationOrigin: config?.derivationOrigin || "https://localhost:5173",
      ...config,
    };

    // Initialize AuthClient asynchronously but don't block constructor
    this.initAuthClient();
    this.setState(Adapter.Status.READY);
  }

  // New private method to initialize AuthClient
  private async initAuthClient(): Promise<void> {
    try {
      this.authClient = await AuthClient.create({
        idleOptions: {
          idleTimeout: Number(1000 * 60 * 60 * 24),
          disableDefaultIdleCallback: true,
        },
      });
      this.authClient.idleManager?.registerCallback?.(() =>
        this.refreshLogin(),
      );
    } catch (error) {
      console.error("Failed to initialize AuthClient:", error);
    }
  }

  private setState(newState: Adapter.Status) {
    this.state = newState;
  }

  getState(): Adapter.Status {
    return this.state;
  }

  // Helper method to initialize the HttpAgent
  private async initAgent(identity: Identity, host: string): Promise<void> {
    this.agent = HttpAgent.createSync({
      identity,
      host,
      verifyQuerySignatures: this.config.verifyQuerySignatures,
    });
    if (this.config.fetchRootKeys) {
      try {
        await this.agent.fetchRootKey();
      } catch (e) {
        console.warn(
          "Unable to fetch root key. Check to ensure that your local replica is running",
        );
        console.error(e);
      }
    }
  }

  // Checks if the wallet is available
  async isAvailable(): Promise<boolean> {
    // NNS is always available since it's a web-based identity provider
    return true;
  }

  getIdentityProvider(isDev: boolean): string {
    return isDev ? this.config.identityProvider : "https://identity.ic0.app";
  }

  // Connects to the wallet using the provided configuration
  async connect(config: Wallet.PNPConfig): Promise<Wallet.Account> {
    try {
      this.setState(Adapter.Status.CONNECTING);
      this.config = config;

      // Wait for AuthClient to be ready
      while (!this.authClient) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      const isAuthenticated = await this.authClient.isAuthenticated();

      if (!isAuthenticated) {
        return new Promise<Wallet.Account>((resolve, reject) => {
          // Call login directly within the click handler context
          this.authClient!.login({
            derivationOrigin: this.config.derivationOrigin,
            identityProvider: this.getIdentityProvider(config.isDev || true),
            maxTimeToLive: BigInt(
              Number(
                config.delegationTimeout || 24 * 60 * 60 * 1000 * 1000 * 1000,
              ),
            ),
            onSuccess: () => {
              // Properly handle void return type for onSuccess
              this._continueLogin(config.hostUrl || this.url)
                .then((account) => {
                  this.setState(Adapter.Status.READY);
                  resolve(account);
                })
                .catch(reject);
            },
            onError: (error) => {
              this.disconnect();
              reject(new Error("Authentication failed: " + error));
            },
          });
        });
      }

      // User is already authenticated, proceed with login
      const account = await this._continueLogin(config.hostUrl || this.url);
      this.setState(Adapter.Status.READY);
      return account;
    } catch (error) {
      this.disconnect();
      throw error;
    }
  }

  private async _continueLogin(host: string): Promise<Wallet.Account> {
    try {
      const identity = this.authClient!.getIdentity();
      const principal = identity.getPrincipal();

      await this.initAgent(identity, host);
      return {
        owner: principal,
        subaccount: AccountIdentifier.fromPrincipal({
          principal,
          subAccount: undefined, // This will use the default subaccount
        }).toUint8Array(),
      };
    } catch (error) {
      console.error("Error during _continueLogin:", error);
      throw error;
    }
  }

  // Check if the wallet is connected
  async isConnected(): Promise<boolean> {
    return this.authClient ? this.authClient.isAuthenticated() : false;
  }

  // Create an actor for interacting with a canister
  createActor<T>(canisterId: string, idl: any): ActorSubclass<T> {
    if (!this.agent) {
      throw new Error(
        "Agent is not initialized. Ensure the wallet is connected.",
      );
    }
    return Actor.createActor(idl, {
      agent: this.agent,
      canisterId,
    });
  }

  // Get the principal associated with the wallet
  async getPrincipal(): Promise<Principal> {
    if (!this.authClient) {
      throw new Error(
        "AuthClient is not initialized. Ensure the wallet is connected.",
      );
    }
    return this.authClient.getIdentity().getPrincipal();
  }

  // Get the subaccount associated with the wallet
  async getAccountId(): Promise<string> {
    if (!this.authClient) {
      throw new Error(
        "AuthClient is not initialized. Ensure the wallet is connected.",
      );
    }
    const principal = this.authClient.getIdentity().getPrincipal();
    const subAccount = AccountIdentifier.fromPrincipal({
      principal,
      subAccount: undefined, // This will use the default subaccount
    }).toHex();
    if (subAccount) {
      return subAccount.toString() || "";
    }
  }

  // Refresh login when session is about to expire
  private async refreshLogin(): Promise<void> {
    try {
      await this.connect(this.config);
    } catch (error) {
      console.error("Failed to refresh login:", error);
      await this.disconnect();
    }
  }

  undelegatedActor<T>(canisterId: string, idlFactory: any): ActorSubclass<T> {
    return this.createActor(canisterId, idlFactory);
  }

  // Disconnects from the wallet
  async disconnect(): Promise<void> {
    try {
      this.setState(Adapter.Status.DISCONNECTING);
      if (this.authClient) {
        await this.authClient.logout();
        this.authClient = null;
      }
      if (this.agent) {
        this.agent = null;
      }
      this.setState(Adapter.Status.DISCONNECTED);
    } catch (error) {
      this.setState(Adapter.Status.ERROR);
      throw error;
    }
  }
}

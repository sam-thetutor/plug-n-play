// src/adapters/NNSAdapter.ts

import { Actor, HttpAgent, type ActorSubclass, Identity } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import type { Wallet, Adapter } from "../types/index.d";
import { Principal } from "@dfinity/principal";
import { hexStringToUint8Array } from "@dfinity/utils";
import dfinityLogo from "../../assets/dfinity.webp";
import { AdapterState } from "../types/index.d";
import { getAccountIdentifier } from "../utils/identifierUtils";
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
  private state: AdapterState = AdapterState.READY;

  constructor(config?: Partial<Wallet.PNPConfig>) {
    this.url = "https://identity.ic0.app";
    this.config = {
      verifyQuerySignatures: config?.verifyQuerySignatures,
      fetchRootKeys: config?.fetchRootKeys,
      identityProviderUrl: config?.isDev ? "https://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943/#authorize" : "https://identity.ic0.app/authenticate",
      derivationOrigin: config?.derivationOrigin || "https://localhost:5173",
      ...config
    };
    // Initialize AuthClient immediately
    AuthClient.create({
      idleOptions: {
        idleTimeout: Number(1000 * 60 * 60 * 24),
        disableDefaultIdleCallback: true,
      },
    }).then(client => {
      this.authClient = client;
      this.authClient.idleManager?.registerCallback?.(() => this.refreshLogin());
    });
  }

  private setState(newState: AdapterState) {
    this.state = newState;
  }

  getState(): AdapterState {
    return this.state;
  }

  // Helper method to initialize the HttpAgent
  private async initAgent(identity: Identity, host: string): Promise<void> {
    this.agent = new HttpAgent({
      identity,
      host,
      verifyQuerySignatures: this.config.verifyQuerySignatures
    });
    if (this.config.fetchRootKeys) {
      try {
        await this.agent.fetchRootKey();
      } catch (e) {
        console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
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
      this.setState(AdapterState.LOADING);
      this.config = config;

      // Wait for AuthClient to be ready
      while (!this.authClient) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      const isAuthenticated = await this.authClient.isAuthenticated();

      if (!isAuthenticated) {
        return new Promise<Wallet.Account>((resolve, reject) => {
          // Call login directly within the click handler context
          this.authClient!.login({
            derivationOrigin: this.config.derivationOrigin,
            identityProvider: this.getIdentityProvider(config.isDev || true),
            maxTimeToLive: BigInt(Number(config.delegationTimeout || 24 * 60 * 60 * 1000 * 1000 * 1000)),
            onSuccess: () => {
              // Properly handle void return type for onSuccess
              this._continueLogin(config.hostUrl || this.url)
                .then(account => {
                  this.setState(AdapterState.READY);
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
      this.setState(AdapterState.READY);
      return account;
    } catch (error) {
      this.setState(AdapterState.READY);
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
        subaccount: hexStringToUint8Array(getAccountIdentifier(principal.toText()) || ""),
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
      throw new Error("Agent is not initialized. Ensure the wallet is connected.");
    }
    return Actor.createActor(idl, {
      agent: this.agent,
      canisterId,
    });
  }

  createAnonymousActor<T>(canisterId: string, idl: any): ActorSubclass<T> {
    return Actor.createActor<T>(idl, {
      agent: HttpAgent.createSync({
        host: this.config?.hostUrl || "https://icp0.io",
        verifyQuerySignatures: this.config?.verifyQuerySignatures,
      }),
      canisterId,
    });
  }

  // Get the principal associated with the wallet
  async getPrincipal(): Promise<Principal> {
    if (!this.authClient) {
      throw new Error("AuthClient is not initialized. Ensure the wallet is connected.");
    }
    return this.authClient.getIdentity().getPrincipal();
  }

  // Get the subaccount associated with the wallet
  async getAccountId(): Promise<string> {
    if (!this.authClient) {
      throw new Error("AuthClient is not initialized. Ensure the wallet is connected.");
    }
    const principal = this.authClient.getIdentity().getPrincipal()
    const subAccount = getAccountIdentifier(principal.toText());
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
      this.setState(AdapterState.LOADING);
      if (this.authClient) {
        await this.authClient.logout();
        this.authClient = null;
      }
      if (this.agent) {
        this.agent = null;
      }
      localStorage.removeItem(this.config.localStorageKey);
      this.setState(AdapterState.READY);
    } catch (error) {
      this.setState(AdapterState.READY);
      throw error;
    }
  }
}
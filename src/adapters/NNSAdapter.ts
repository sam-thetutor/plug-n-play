// src/adapters/NNSAdapter.ts

import { Actor, HttpAgent, type ActorSubclass, Identity } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import type { Wallet, Adapter } from "../types/index";
import { Principal } from "@dfinity/principal";
import { principalToSubAccount } from "@dfinity/utils";
import dfinityLogo from "../../assets/dfinity.webp";
import { getAccountIdentifier } from "../utils/identifierUtils";
import { AdapterState } from "./NFIDAdapter";

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

  constructor() {
    this.url = "https://identity.ic0.app";
  }

  private setState(newState: AdapterState) {
    this.state = newState;
  }

  getState(): AdapterState {
    return this.state;
  }

  // Helper method to initialize the AuthClient
  private async initAuthClient(): Promise<void> {
    if (!this.authClient) {
      this.authClient = await AuthClient.create({
        idleOptions: {
          idleTimeout: Number(1000 * 60 * 60 * 24), // 1 day in milliseconds
          disableDefaultIdleCallback: true, // Disable default reload behavior
        },
      });
      this.authClient.idleManager?.registerCallback?.(() => this.refreshLogin());
    }
  }

  // Helper method to initialize the HttpAgent
  private async initAgent(identity: Identity, host: string): Promise<void> {
    this.agent = HttpAgent.createSync({
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
      await this.initAuthClient();

      const isAuthenticated = await this.authClient!.isAuthenticated();

      if (!isAuthenticated) {
        return new Promise<Wallet.Account>((resolve, reject) => {
          this.authClient!.login({
            identityProvider: this.getIdentityProvider(config.isDev || true),
            maxTimeToLive: BigInt(Number(config.delegationTimeout || 24 * 60 * 60 * 1000 * 1000 * 1000)), // 24 hours in nanoseconds
            onSuccess: async () => {
              try {
                const account = await this._continueLogin(config.hostUrl || this.url);
                this.setState(AdapterState.READY);
                resolve(account);
              } catch (error) {
                this.setState(AdapterState.READY);
                reject(error);
              }
            },
            onError: (error) => {
              this.setState(AdapterState.READY);
              reject(new Error("Authentication failed: " + error));
            },
          });
        });
      } else {
        // User is already authenticated, proceed with login
        const account = await this._continueLogin(config.hostUrl || this.url);
        this.setState(AdapterState.READY);
        return account;
      }
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
        subaccount: principalToSubAccount(principal),
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
  async createActor<T>(canisterId: string, idl: any): Promise<ActorSubclass<T>> {
    if (!this.agent) {
      throw new Error("Agent is not initialized. Ensure the wallet is connected.");
    }
    return Actor.createActor(idl, {
      agent: this.agent,
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
    const subAccount = principalToSubAccount(principal);
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

  async undelegatedActor<T>(canisterId: string, idlFactory: any): Promise<ActorSubclass<T>> {
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
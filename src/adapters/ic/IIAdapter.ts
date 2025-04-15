// src/adapters/IIAdapter.ts

import { Actor, HttpAgent, type ActorSubclass, Identity } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import { type Wallet, Adapter } from "../../types/index.d";
import { Principal } from "@dfinity/principal";
import { hexStringToUint8Array } from "@dfinity/utils";
import dfinityLogo from "../../../assets/dfinity.webp";
import { ICRCAdapter } from "./ICRCAdapter";

// Extend ICRCAdapter
export class IIAdapter extends ICRCAdapter implements Adapter.Interface {
  static readonly logo: string = dfinityLogo;
  static readonly walletName: string = "Internet Identity";
  walletName: string = IIAdapter.walletName;
  logo: string = IIAdapter.logo;
  
  // II specific properties
  private authClient: AuthClient | null = null;
  private agent: HttpAgent | null = null;

  // Constructor calls super and does II specific initialization
  constructor(config: Wallet.PNPConfig) {
    super(config); // Call base constructor
    
    // Initialize AuthClient immediately, using this.config
    AuthClient.create({
      idleOptions: {
        idleTimeout: Number(this.config.adapters?.ii?.config?.timeout || this.config.timeout || 1000 * 60 * 60 * 24),
        disableDefaultIdleCallback: true,
      },
    }).then(client => {
      this.authClient = client;
      this.authClient.idleManager?.registerCallback?.(() => this.refreshLogin());
    }).catch(err => {
        console.error("[II] Failed to create AuthClient:", err);
        this.setState(Adapter.Status.ERROR); // Use inherited setState
    });
  }

  // Use the resolved config for agent initialization
  private async initAgent(identity: Identity): Promise<void> {
    this.agent = new HttpAgent({
      identity,
      host: this.config.hostUrl, 
      verifyQuerySignatures: this.config.verifyQuerySignatures
    });
    if (this.config.fetchRootKeys) { 
      try {
        await this.agent.fetchRootKey();
      } catch (e) {
        console.warn("[II] Unable to fetch root key. Check replica status.", e);
      }
    }
  }

  // Implement abstract methods
  async isAvailable(): Promise<boolean> {
    return true; // Always available
  }

  async connect(): Promise<Wallet.Account> {
    try {
      this.setState(Adapter.Status.CONNECTING);
      
      if (!this.authClient) {
         await new Promise(resolve => setTimeout(resolve, 500)); 
         if (!this.authClient) throw new Error("AuthClient failed to initialize.");
      }

      const isAuthenticated = await this.authClient.isAuthenticated();

      if (!isAuthenticated) {
        return new Promise<Wallet.Account>((resolve, reject) => {
          this.authClient!.login({
            derivationOrigin: this.config.derivationOrigin,
            identityProvider: this.config.adapters?.ii?.config?.identityProvider || this.config.identityProvider, 
            maxTimeToLive: this.config.delegationTimeout, 
            onSuccess: () => {
              this._continueLogin(this.config.hostUrl)
                .then(account => {
                  this.setState(Adapter.Status.READY);
                  resolve(account);
                })
                .catch(reject);
            },
            onError: (error) => {
              console.error("[II] Login error:", error);
              this.disconnect().catch(() => {}); // Use inherited disconnect
              this.setState(Adapter.Status.ERROR); 
              reject(new Error("II Authentication failed: " + error));
            },
          });
        });
      }

      const account = await this._continueLogin(this.config.hostUrl); 
      this.setState(Adapter.Status.READY);
      return account;
    } catch (error) {
        console.error("[II] Connect error:", error);
        this.setState(Adapter.Status.ERROR);
        await this.disconnect().catch(() => {}); // Use inherited disconnect
        throw error;
    }
  }

  private async _continueLogin(host: string): Promise<Wallet.Account> {
    if (!this.authClient) throw new Error("AuthClient not available in _continueLogin");
    try {
      const identity = this.authClient.getIdentity();
      const principal = identity.getPrincipal();
      if (principal.isAnonymous()) {
        throw new Error("Login resulted in anonymous principal");
      }
      
      await this.initAgent(identity); 
      return {
        owner: principal,
        // Derive subaccount using the method from ICRCAdapter via getAccountId (implicitly)
        // Or calculate directly if preferred, but using getAccountId promotes reuse
        subaccount: hexStringToUint8Array(await this.getAccountId() || ""),
      };
    } catch (error) {
      console.error("[II] Error during _continueLogin:", error);
      this.setState(Adapter.Status.ERROR);
      await this.disconnect().catch(() => {});
      throw error;
    }
  }

  async isConnected(): Promise<boolean> {
    return this.authClient ? await this.authClient.isAuthenticated() : false;
  }

  // Implementation for ICRCAdapter actor caching
  protected createActorInternal<T>(
    canisterId: string, 
    idl: any, 
  ): ActorSubclass<T> {
    if (!this.agent) {
      throw new Error("Agent not initialized. Connect first.");
    }
    return Actor.createActor(idl, {
      agent: this.agent,
      canisterId,
    });
  }

  async getPrincipal(): Promise<Principal> {
    if (!this.authClient) throw new Error("Not connected");
    const identity = this.authClient.getIdentity();
    if (!identity) throw new Error("Identity not available");
    return identity.getPrincipal();
  }

  private async refreshLogin(): Promise<void> {
    console.debug("[II] Refreshing login due to idle timeout.");
    try {
      await this.connect(); 
    } catch (error) {
      console.error("[II] Failed to refresh login:", error);
      await this.disconnect().catch(() => {}); 
    }
  }

  // Disconnect logic specific to II
  protected async disconnectInternal(): Promise<void> {
    if (this.authClient) { 
        await this.authClient.logout();
    } 
  }

  // Cleanup logic specific to II
  protected cleanupInternal(): void {
      this.authClient = null;
      this.agent = null;
  }
}
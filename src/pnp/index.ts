import type { Adapter, Wallet } from "../types/index.d";
import { Actor, HttpAgent, type ActorSubclass } from "@dfinity/agent";
import { walletList } from "../adapters";

class PNP {
  account: Wallet.Account | null = null;
  activeWallet: Adapter.Info | null = null;
  provider: Adapter.Interface | null = null;
  config: Wallet.PNPConfig;
  actorCache: Map<string, ActorSubclass<any>> = new Map();
  dfxNetwork: string = "local";
  isDev: boolean = true;
  isConnecting: boolean = false;

  constructor(config: Wallet.PNPConfig = {}) {
    this.config = {
      hostUrl: config.hostUrl || "http://localhost:4943",
      identityProvider: config.identityProvider || "https://identity.ic0.app",
      localStorageKey: config.localStorageKey || "pnpConnectedWallet",
      timeout: config.timeout || 1000 * 60 * 60 * 24, // 1 day in milliseconds
      delegationTimeout:
        config.delegationTimeout || BigInt(24 * 60 * 60 * 1000 * 1000 * 1000),
      delegationTargets: config.delegationTargets || [],
      dfxNetwork: config.dfxNetwork || "local",
      isDev: config.dfxNetwork === "local",
      derivationOrigin: config.derivationOrigin || "https://identity.ic0.app",
      ...config,
    };
  }

  async connect(walletId?: string): Promise<Wallet.Account | null> {
    if (this.isConnecting) return null;
    this.isConnecting = true;

    try {
      // Get wallet ID from parameter or storage and save it
      const targetWalletId = walletId || localStorage.getItem(this.config.localStorageKey);
      if (!targetWalletId) return null;
      
      localStorage.setItem(this.config.localStorageKey, targetWalletId);

      // Find and create adapter
      const adapter = walletList.find((w) => w.id === targetWalletId);
      if (!adapter) throw new Error(`Wallet ${targetWalletId} not found`);
      
      // Connect and update state
      const instance = new adapter.adapter(this.config);
      const account = await instance.connect(this.config);
      
      this.account = account;
      this.activeWallet = adapter;
      this.provider = instance;
      return account;
    } catch (error) {
      console.warn("[PNP] Connection failed:", error);
      return null;
    } finally {
      this.isConnecting = false;
    }
  }

  getAdapter(walletId: string): Adapter.Interface {
    const wallet = walletList.find((w) => w.id === walletId);
    if (!wallet) throw new Error(`Wallet ${walletId} not found`);
    return new wallet.adapter();
  }

  async disconnect(): Promise<void> {
    try {
      if (this.provider) await this.provider.disconnect();
      
      // Reset state
      this.account = null;
      this.provider = null;
      this.activeWallet = null;
      this.actorCache.clear();
      localStorage.removeItem(this.config.localStorageKey);
    } catch (error) {
      console.warn("[PNP] Disconnect error:", error);
    }
  }

  getActor<T>(
    canisterId: string,
    idl: any,
    options?: {
      anon?: boolean;
      requiresSigning?: boolean;
    }
  ): ActorSubclass<T> {
    const { anon = false, requiresSigning = true } = options || {};
    
    // Return anonymous actor or provider actor based on options
    return anon 
      ? this.createAnonymousActor<T>(canisterId, idl)
      : this.provider.createActor<T>(canisterId, idl, { requiresSigning });
  }

  createAnonymousActor<T>(canisterId: string, idl: any): ActorSubclass<T> {
    const cacheKey = `anon-${canisterId}`;
    
    // Return cached actor if available
    const cachedActor = this.actorCache.get(cacheKey);
    if (cachedActor) return cachedActor;
    
    // Create and cache a new actor
    const actor = Actor.createActor<T>(idl, {
      agent: HttpAgent.createSync({
        host: this.config?.hostUrl || "https://icp0.io",
        verifyQuerySignatures: this.config?.dfxNetwork != "local",
      }),
      canisterId,
    });
    
    this.actorCache.set(cacheKey, actor);
    return actor;
  }
  isWalletConnected(): boolean {
    return this.activeWallet !== null;
  }
}

// Export class-based implementation
export const walletsList = walletList;
export const createPNP = (config: Wallet.PNPConfig = {}) => new PNP(config);

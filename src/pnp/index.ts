import type { Adapter, Wallet } from "../types/index.d";
import { Actor, HttpAgent, type ActorSubclass } from "@dfinity/agent";
import { walletList } from "../adapters";

class PNP {
  account: Wallet.Account | null = null;
  activeWallet: Adapter.Info | null = null;
  provider: Adapter.Interface | null = null;
  config: Wallet.PNPConfig;
  actorCache: Map<string, ActorSubclass<any>> = new Map();
  isDev: boolean = true;
  fetchRootKeys: boolean = false;
  isConnecting: boolean = false;

  constructor(config: Wallet.PNPConfig = {}) {
    this.config = {
      hostUrl: config.hostUrl || "http://localhost:4943",
      identityProvider: config.identityProvider || "https://identity.ic0.app",
      localStorageKey: config.localStorageKey || "pnpConnectedWallet",
      timeout: config.timeout || 1000 * 60 * 60 * 24, // 1 day in milliseconds
      verifyQuerySignatures: config.verifyQuerySignatures ?? false,
      delegationTimeout:
        config.delegationTimeout || BigInt(24 * 60 * 60 * 1000 * 1000 * 1000),
      delegationTargets: config.delegationTargets || [],
      isDev: config.isDev ?? true,
      derivationOrigin: config.derivationOrigin || "https://identity.ic0.app",
      ...config,
    };
  }

  async canReconnect(walletId: string): Promise<boolean> {
    try {
      const adapter = walletList.find((w) => w.id === walletId);
      if (!adapter) return false;
      if(adapter.id === "oisy") return false;

      // Check if the adapter has a stored session
      const storedData = localStorage.getItem(this.config.localStorageKey);
      if (!storedData || storedData !== walletId) return false;

      // Special handling for NNS Login
      if (walletId === "nns") {
        const instance = new adapter.adapter(this.config);
        return await instance.isConnected();
      }

      // For other wallets, check their delegation storage
      const delegationKey = `${walletId}_session`;
      const delegationData = localStorage.getItem(delegationKey);
      if (!delegationData) return false;

      return true;
    } catch (error) {
      console.warn("[PNP] Error checking reconnect status:", error);
      return false;
    }
  }

  async connect(walletId?: string): Promise<Wallet.Account | null> {
    if (this.isConnecting) return null;
    this.isConnecting = true;

    try {
      // If no walletId provided, try to get it from storage
      const targetWalletId = walletId || localStorage.getItem(this.config.localStorageKey);
      localStorage.setItem(this.config.localStorageKey, targetWalletId);
      if (!targetWalletId) return null;

      const adapter = walletList.find((w) => w.id === targetWalletId);
      if (!adapter) {
        throw new Error(`Wallet ${targetWalletId} not found`);
      }

      const instance = new adapter.adapter();
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
    if (!wallet) {
      throw new Error(`Wallet ${walletId} not found`);
    }
    return new wallet.adapter();
  }

  async disconnect(): Promise<void> {
    if (this.provider) {
      await this.provider.disconnect();
    }
    this.account = null;
    this.provider = null;
    this.activeWallet = null;
    this.actorCache.clear();
    localStorage.removeItem(this.config.localStorageKey);
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
    // Create the actor
    let actor: ActorSubclass<T>;

    if (anon) {
      actor = this.createAnonymousActor<T>(canisterId, idl);
    } else {
      actor = this.provider.createActor<T>(canisterId, idl, {
        requiresSigning,
      });
    }
    return actor;
  }

  createAnonymousActor<T>(canisterId: string, idl: any): ActorSubclass<T> {
    const cacheKey = `anon-${canisterId}`;
    const cachedActor = this.actorCache.get(cacheKey);
    if (cachedActor) {
      return cachedActor;
    }
    const actor = Actor.createActor<T>(idl, {
      agent: HttpAgent.createSync({
        host: this.config?.hostUrl || "https://icp0.io",
        verifyQuerySignatures: this.config?.verifyQuerySignatures,
      }),
      canisterId,
    });
    this.actorCache.set(cacheKey, actor);
    return actor;
  }
  isWalletConnected(): boolean {
    return !!this.activeWallet;
  }
}

// Export class-based implementation
export const walletsList = walletList;
export const createPNP = (config: Wallet.PNPConfig = {}) => new PNP(config);

import type { Adapter, Wallet } from "../types/index.d";
import {
  Actor,
  HttpAgent,
  type ActorSubclass,
} from "@dfinity/agent";
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

  async connect(walletId: string): Promise<Wallet.Account> {
    this.isConnecting = true;
    const adapter = walletList.find((w) => w.id === walletId);
    if (!adapter) {
      throw new Error(`Wallet ${walletId} not found`);
    }

    const instance = new adapter.adapter();

    try {
      const prepared = await instance.connect(this.config).then((account) => {
        this.account = account;
        this.activeWallet = adapter;
        this.provider = instance;
        console.log("account", account);
        localStorage.setItem(this.config.localStorageKey, walletId);
        return account;
      });
      return prepared;
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
      console.log("Creating actor with provider");
      actor = this.provider.createActor<T>(canisterId, idl, {
        requiresSigning,
      });
    }
    return actor;
  }

  public createAnonymousActor<T>(
    canisterId: string,
    idl: any,
    options?: { requiresSigning?: boolean }
  ): ActorSubclass<T> {
    return this.provider.createAnonymousActor<T>(canisterId, idl, options);
  }

  isWalletConnected(): boolean {
    return !!this.activeWallet;
  }
}

// Export class-based implementation
export const walletsList = walletList;
export const createPNP = (config: Wallet.PNPConfig = {}) => new PNP(config);

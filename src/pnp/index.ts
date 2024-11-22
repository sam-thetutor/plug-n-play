import type { Adapter, Wallet } from "../types/index";
import {
  Actor,
  HttpAgent,
  type ActorSubclass,
  AnonymousIdentity,
} from "@dfinity/agent";
import { walletList } from "../adapters";
import { Principal } from "@dfinity/principal";
import { getAccountIdentifier } from "../utils/identifierUtils";

class PNP implements PNP {
  account: Wallet.Account | null = null;
  activeWallet: Adapter.Info | null = null;
  provider: Adapter.Interface | null = null;
  config: Wallet.PNPConfig;
  actorCache: Map<string, ActorSubclass<any>> = new Map();
  isDev: boolean = true;
  fetchRootKeys: boolean = false;

  constructor(config: Wallet.PNPConfig = {}) {
    this.config = {
      hostUrl: config.hostUrl || "http://localhost:4943",
      identityProvider: config.identityProvider || "https://identity.ic0.app",
      localStorageKey: config.localStorageKey || "pnpConnectedWallet",
      timeout: config.timeout || 1000 * 60 * 60 * 24, // 1 day in milliseconds
      verifyQuerySignatures: config.verifyQuerySignatures ?? false,
      delegationTimeout: config.delegationTimeout || BigInt(24 * 60 * 60 * 1000 * 1000 * 1000),
      isDev: config.isDev ?? true,
      ...config,
    };
  }

  async connect(walletId: string): Promise<Wallet.Account> {
    const adapter = walletList.find((w) => w.id === walletId);
    if (!adapter) {
      throw new Error(`Wallet ${walletId} not found`);
    }

    const instance = new adapter.adapter();
    if (!(await instance.isAvailable())) {
      throw new Error(`Wallet ${walletId} is not available`);
    }

    const account = await instance.connect(this.config);
    this.account = account;
    this.activeWallet = walletList.find((w) => w.id === walletId);
    this.provider = instance;

    localStorage.setItem(this.config.localStorageKey, walletId);

    return account;
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

  async getActor<T>(
    canisterId: string,
    idl: any,
    options?: {
      anon?: boolean;
      requiresSigning?: boolean;
    }
  ): Promise<ActorSubclass<T>> {
    const { anon = false, requiresSigning = false } = options || {};

    // Generate a cache key based on the parameters
    const cacheKey = `${this.account?.owner.toString() || 'anonymous'}-${canisterId}-${JSON.stringify(options)}}`;

    // Check if the actor is already cached
    if (this.actorCache.has(cacheKey)) {
      return this.actorCache.get(cacheKey) as ActorSubclass<T>;
    }

    // Create the actor
    let actor: ActorSubclass<T>;

    if (anon || !this.provider) {
      actor = await  this.createAnonymousActor<T>(canisterId, idl);
    } else {
      console.log('Creating actor with provider');
      actor = await this.provider.createActor<T>(canisterId, idl, {
        requiresSigning,
      });
    
    }

    // Cache the actor
    this.actorCache.set(cacheKey, actor);
    return actor;
  }

  private async createAnonymousActor<T>(
    canisterId: string,
    idl: any
  ): Promise<ActorSubclass<T>> {
    const agent = HttpAgent.createSync({
      host: this.config.hostUrl,
      verifyQuerySignatures: this.config.verifyQuerySignatures
    });
    if (this.fetchRootKeys) {
      await agent.fetchRootKey();
    }
    // Extract the interface factory from the IDL
    const interfaceFactory = typeof idl === 'function' ? idl : idl._idlFactory || idl.idlFactory;
    return Actor.createActor<T>(interfaceFactory, { agent, canisterId });
  }

  isWalletConnected(): boolean {
    return !!this.activeWallet;
  }
}

// Export class-based implementation
export const walletsList = walletList;
export const createPNP = (config: Wallet.PNPConfig = {}) => new PNP(config);

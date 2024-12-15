import type { Adapter, Wallet } from "../types/index.d";
import {
  Actor,
  HttpAgent,
  type ActorSubclass,
  AnonymousIdentity,
} from "@dfinity/agent";
import { walletList } from "../adapters";
import { Principal } from "@dfinity/principal";
import { getAccountIdentifier } from "../utils/identifierUtils";

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
      delegationTimeout: config.delegationTimeout || BigInt(24 * 60 * 60 * 1000 * 1000 * 1000),
      delegationTargets: config.delegationTargets || [],
      isDev: config.isDev ?? true,
      derivationOrigin: config.derivationOrigin || "https://identity.ic0.app",
      ...config,
    };
  }

  async prepareConnection(walletId: string): Promise<{ 
    connect: () => Promise<Wallet.Account>
  }> {
    const adapter = walletList.find((w) => w.id === walletId);
    if (!adapter) {
      throw new Error(`Wallet ${walletId} not found`);
    }

    const instance = new adapter.adapter();
    const isAvailable = await instance.isAvailable();
    if (!isAvailable) {
      throw new Error(`Wallet ${walletId} is not available`);
    }

    // Return a connect function that establishes channel and connects in click handler context
    return {
      connect: () => {
        // Execute in click handler context
        return new Promise<Wallet.Account>((resolve, reject) => {
          // Check if adapter needs channel establishment
          if ('establishChannel' in instance) {
            instance.establishChannel()
              .then(() => {
                this.provider = instance;
                return instance.connect(this.config);
              })
              .then(account => {
                this.account = account;
                this.activeWallet = adapter;
                this.provider = instance;
                localStorage.setItem(this.config.localStorageKey, walletId);
                resolve(account);
              })
              .catch(reject);
          } else {
            instance.connect(this.config)
              .then(account => {
                this.account = account;
                this.activeWallet = adapter;
                this.provider = instance;
                localStorage.setItem(this.config.localStorageKey, walletId);
                resolve(account);
              })
              .catch(reject);
          }
        });
      }
    };
  }

  async connect(walletId: string): Promise<Wallet.Account> {
    if (this.isConnecting) {
      throw new Error("Connection in progress");
    }

    this.isConnecting = true;
    try {
      const prepared = await this.prepareConnection(walletId);
      return await prepared.connect();
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

  async getActor<T>(
    canisterId: string,
    idl: any,
    options?: {
      anon?: boolean;
      requiresSigning?: boolean;
    }
  ): Promise<ActorSubclass<T>> {
    const { anon = false, requiresSigning = true } = options || {};
    // Create the actor
    let actor: ActorSubclass<T>;

    if (anon) {
      actor = await this.createAnonymousActor<T>(canisterId, idl);
    } else {
      console.log('Creating actor with provider');
      actor = await this.provider.createActor<T>(canisterId, idl, {
        requiresSigning,
      });
    }
    return actor;
  }

  public async createAnonymousActor<T>(
    canisterId: string,
    idl: any,
    options?: { requiresSigning?: boolean }
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

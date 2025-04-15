// Adapters
import { InternetIdentity } from "./src/adapters/InternetIdentity";
import { PlugAdapter } from "./src/adapters/PlugAdapter";
import { BitfinityAdapter } from "./src/adapters/BitfinityAdapter";
import { BatchTransact } from "./src/utils/batchTransact";
import { AnonymousIdentity, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { ActorSubclass } from "@dfinity/agent";

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

export namespace Wallet {
  export interface PNPConfig {
    hostUrl?: string;
    localStorageKey?: string;
    defaultCanisterId?: string;
    delegationTargets?: Principal[] | string[];
    delegationTimeout?: bigint;
    derivationOrigin?: string;
    dfxNetwork?: string;
    fetchRootKeys?: boolean;
    verifyQuerySignatures?: boolean;
    adapters?: Record<string, Adapter.Info>;
    identityProvider?: string;
    timeout?: number;
  }

  export interface PNPWindow {
    BatchTransact: typeof BatchTransact;
    ii: {
      AnonymousIdentity: typeof AnonymousIdentity;
      Principal: typeof Principal;
    };
  }

  export interface Account {
    subaccount: Uint8Array | null;
    owner: Principal | null;
    hasDelegation?: boolean;
  }

  export type ConnectionResult = Account;

  export interface WalletState {
    account: Account | null;
    activeWallet: string | null;
  }

  type WalletEventCallback = (state: WalletState) => void;

  export type AdapterConstructor = new (config: Wallet.PNPConfig) => Adapter.Interface;

  export type Adapters = {
    ii: Adapter.Interface;
    plug: Adapter.Interface;
    bitfinity: Adapter.Interface;
  };

  export namespace Transaction {
    export interface Item {
      stepIndex?: number;
      state?: string;
      updateNextStep?: (data: any, nextStep: Item) => Promise<void>;
      onSuccess?: (data: any) => Promise<void>;
      onFail?: (error: any) => Promise<void>;
      onSuccessMain?: (data: any, _this: Item) => Promise<boolean | undefined>;
      onFailMain?: (error: any, _this: Item) => Promise<boolean>;
    }
  }
}

export namespace Adapter {
  // deprecated
  export interface Info {
    id: string;
    logo: string;
    walletName: string;
    adapter: AdapterConstructor;
    config: {
      identityProvider?: string;
      signerUrl?: string;
      rpcUrl?: string;
      timeout?: number;
      enabled?: boolean;
    };
    rpcUrl?: string;
    timeout?: number;
    enabled?: boolean;
  }

  // replaces Info
  export interface Wallet {
    id: string;
    logo: string;
    walletName: string;
    adapter: AdapterConstructor;
  }

  export enum Status {
    INIT = "INIT",
    READY = "READY",
    CONNECTING = "CONNECTING",
    CONNECTED = "CONNECTED",
    DISCONNECTING = "DISCONNECTING",
    DISCONNECTED = "DISCONNECTED",
    ERROR = "ERROR",
  }

  export interface Interface {
    // Core wallet functionality
    isAvailable(): Promise<boolean>;
    isConnected(): Promise<boolean>;
    connect(config: Wallet.PNPConfig): Promise<Wallet.Account>;
    disconnect(): Promise<void>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string>;

    // Actor creation
    createActor<T>(
      canisterId: string,
      idl: any,
      options?: { requiresSigning?: boolean },
    ): ActorSubclass<T>;
    undelegatedActor?<T>(
      canisterId: string,
      idlFactory: any,
      options?: { requiresSigning?: boolean },
    ): ActorSubclass<T>;
  }
}

export class PNP {
  account: Wallet.Account | null;
  provider: Adapter.Interface | null;
  config: Wallet.PNPConfig;
  actorCache: Map<string, ActorSubclass<any>>;
  fetchRootKeys: boolean;

  constructor(config?: Wallet.PNPConfig);

  connect(walletId: string): Promise<Wallet.Account>;
  disconnect(): Promise<void>;
  isWalletConnected(): boolean;
  getActor<T>(canisterId: string, idl: any, isAnon?: boolean): ActorSubclass<T>;
  createAnonymousActor<T>(
    canisterId: string,
    idl: any,
    options?: { requiresSigning?: boolean },
  ): ActorSubclass<T>;
}

declare global {
  interface Window {
    ic?: {
      plug?: {
        requestConnect: (options?: {
          whitelist?: string[];
          host?: string;
          timeout?: number;
          onConnectionUpdate?: () => void;
        }) => Promise<boolean>;
        isConnected: () => Promise<boolean>;
        createActor: <T>(options: {
          canisterId: string;
          interfaceFactory: any;
        }) => Promise<ActorSubclass<T>>;
        disconnect: () => Promise<void>;
        onExternalDisconnect: (callback: () => void) => void;
        principalId?: string;
        accountId?: string;
      };
    };
  }
}

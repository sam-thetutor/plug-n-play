// Adapters
import { NNSAdapter } from "./src/adapters/NNSAdapter";
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
    identityProvider?: string;
    delegationTargets?: Principal[];
    delegationTimeout?: bigint;
    [key: string]: any;
  }

  export interface PNPWindow {
    BatchTransact: typeof BatchTransact;
    nns: {
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

  export interface AdapterInfo {
    id: string;
    icon: string;
    name: string;
    adapter: AdapterConstructor;
  }

  export interface WalletState {
    account: Account | null;
    activeWallet: string | null;
  }

  type WalletEventCallback = (state: WalletState) => void;

  export interface AdapterConfig {
    whitelist?: string[];
    host?: string;
    identityProvider?: string;
    timeout?: number;
    [key: string]: any;
  }

  export type AdapterConstructor = new () => AdapterInterface;

  export type Adapters = {
    nns: Adapter.Interface;
    plug: Adapter.Interface;
    bitfinity: Adapter.Interface;
  };
}

export namespace Adapter {
  export interface Interface {
    // Required properties
    name: string;
    logo: string;
    url: string;

    // Core wallet functionality
    isAvailable(): Promise<boolean>;
    isConnected(): Promise<boolean>;
    connect(config: Wallet.PNPConfig): Promise<Wallet.Account>;
    disconnect(): Promise<void>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string>;
    
    // Actor creation
    createActor<T>(canisterId: string, idl: any): Promise<ActorSubclass<T>>;
  }
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
        principalId?: string;
        accountId?: string;
      };
    };
  }
}
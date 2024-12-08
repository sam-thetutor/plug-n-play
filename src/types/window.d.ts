import { Principal } from "@dfinity/principal";
import { Identity } from "@dfinity/agent";

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
        }) => Promise<T>;
        disconnect: () => Promise<void>;
        principalId?: string;
        accountId?: string;
      };
      astrox?: {
        isAuthenticated: () => Promise<boolean>;
        connect: (options: any) => Promise<void>;
        disconnect: () => Promise<void>;
        createActor: (interfaceFactory: any, canisterId: string) => Promise<any>;
        principal: Principal;
        identity: Identity;
        accountId: string;
        connectOptions: any;
      };
    };
    icx?: {
      _isReady: boolean;
      init: () => Promise<void>;
      connect: (options: any) => Promise<void>;
      disconnect: () => Promise<void>;
      isConnected: () => Promise<boolean>;
      createActor: (canisterId: string, idlFactory: any) => Promise<any>;
      identity: Identity;
      wallet: {
        principal: string;
        accountId: string;
      };
    };
  }
}

export {};

import { Adapter, Wallet } from '../types/index';
import { ActorSubclass } from '../@dfinity/agent';
declare class PNP {
    account: Wallet.Account | null;
    activeWallet: Adapter.Info | null;
    provider: Adapter.Interface | null;
    config: Wallet.PNPConfig;
    actorCache: Map<string, ActorSubclass<any>>;
    isDev: boolean;
    fetchRootKeys: boolean;
    constructor(config?: Wallet.PNPConfig);
    prepareConnection(walletId: string): Promise<{
        connect: () => Promise<Wallet.Account>;
    }>;
    connect(walletId: string): Promise<Wallet.Account>;
    disconnect(): Promise<void>;
    getActor<T>(canisterId: string, idl: any, options?: {
        anon?: boolean;
        requiresSigning?: boolean;
    }): Promise<ActorSubclass<T>>;
    createAnonymousActor<T>(canisterId: string, idl: any, options?: {
        requiresSigning?: boolean;
    }): Promise<ActorSubclass<T>>;
    isWalletConnected(): boolean;
}
export declare const walletsList: Adapter.Info[];
export declare const createPNP: (config?: Wallet.PNPConfig) => PNP;
export {};

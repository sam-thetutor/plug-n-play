import { Adapter, Wallet } from '../types/index';
import { ActorSubclass } from '../@dfinity/agent';
declare class PNP implements PNP {
    account: Wallet.Account | null;
    activeWallet: Adapter.Info | null;
    provider: Adapter.Interface | null;
    config: Wallet.PNPConfig;
    actorCache: Map<string, ActorSubclass<any>>;
    isDev: boolean;
    fetchRootKeys: boolean;
    constructor(config?: Wallet.PNPConfig);
    connect(walletId: string): Promise<Wallet.Account>;
    disconnect(): Promise<void>;
    getActor<T>(canisterId: string, idl: any, options?: {
        anon?: boolean;
        requiresSigning?: boolean;
    }): Promise<ActorSubclass<T>>;
    private createAnonymousActor;
    isWalletConnected(): boolean;
}
export declare const walletsList: Adapter.Info[];
export declare const createPNP: (config?: Wallet.PNPConfig) => PNP;
export {};

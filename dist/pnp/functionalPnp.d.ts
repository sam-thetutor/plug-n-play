import { Adapter, Wallet } from '../types/index';
import { ActorSubclass } from '../@dfinity/agent';
import { Principal } from '../@dfinity/principal';
export type PnPState = {
    readonly account: Wallet.Account | null;
    readonly activeWallet: string | null;
    readonly provider: Adapter.Interface | null;
    readonly config: Wallet.PNPConfig;
    readonly actorCache: ReadonlyMap<string, ActorSubclass<any>>;
};
export declare const createInitialState: (config?: Wallet.PNPConfig) => PnPState;
export declare const getAccountId: (state: PnPState) => string | null;
export declare const getPrincipalId: (state: PnPState) => Principal | null;
export declare const connect: (state: PnPState, walletId: string) => Promise<[PnPState, Wallet.Account]>;
export declare const disconnect: (state: PnPState) => Promise<PnPState>;
export declare const callCanister: <T>(state: PnPState, canisterId: string, methodName: string, args?: any[], idl?: any, options?: {
    isAnon?: boolean;
    isSigned?: boolean;
}) => Promise<[PnPState, T]>;
export declare const getActor: <T>(state: PnPState, canisterId: string, idl: any, options?: {
    isAnon?: boolean;
    isForced?: boolean;
    isSigned?: boolean;
}) => Promise<[PnPState, ActorSubclass<T>]>;
export declare const isWalletConnected: (state: PnPState) => boolean;

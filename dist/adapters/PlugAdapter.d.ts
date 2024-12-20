import { Principal } from '@dfinity/principal';
import { ActorSubclass } from '@dfinity/agent';
import { Wallet, Adapter } from '../types/index.d';
export declare enum AccountType {
    GLOBAL = "GLOBAL",
    SESSION = "SESSION"
}
export interface PlugAccount {
    id: string;
    displayName: string;
    principal: string;
    subaccount: Uint8Array;
    type: AccountType;
}
export declare enum AdapterState {
    READY = "READY",
    LOADING = "LOADING",
    PROCESSING = "PROCESSING",
    ERROR = "ERROR"
}
export declare class PlugAdapter implements Adapter.Interface {
    private static readonly STORAGE_KEY;
    private static readonly TRANSPORT_CONFIG;
    private agent;
    private identity;
    private delegationStorage;
    private state;
    private accounts;
    private actorCache;
    private sessionKey;
    private signerAgent;
    private signer;
    static readonly logo: string;
    name: string;
    logo: string;
    identityProviderUrl: string;
    url: string;
    config: Wallet.PNPConfig;
    constructor();
    private setState;
    private setDelegationChain;
    isAvailable(): Promise<boolean>;
    isConnected(): Promise<boolean>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string>;
    unwrapResponse: <T extends unknown>(response: any) => T;
    connect(config: Wallet.PNPConfig): Promise<Wallet.Account>;
    createAnonymousActor<T>(canisterId: string, idl: any): ActorSubclass<T>;
    createActor<T>(canisterId: string, idlFactory: any, options?: {
        requiresSigning?: boolean;
        anon: boolean;
    }): ActorSubclass<T>;
    undelegatedActor<T>(canisterId: string, idlFactory: any): ActorSubclass<T>;
    disconnect(): Promise<void>;
    getState(): AdapterState;
    getAccounts(): PlugAccount[];
}

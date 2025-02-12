import { Principal } from '@dfinity/principal';
import { ActorSubclass } from '@dfinity/agent';
import { Wallet, Adapter } from '../types/index.d';
export declare enum AccountType {
    GLOBAL = "GLOBAL",
    SESSION = "SESSION"
}
export interface NFIDAccount {
    id: string;
    displayName: string;
    principal: string;
    subaccount: Uint8Array;
    type: AccountType;
}
export declare class NFIDAdapter implements Adapter.Interface {
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
    info: Adapter.Info;
    constructor();
    private setState;
    isAvailable(): Promise<boolean>;
    isConnected(): Promise<boolean>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string>;
    unwrapResponse: <T extends unknown>(response: any) => T;
    connect(config: Wallet.PNPConfig): Promise<Wallet.Account>;
    createActor<T>(canisterId: string, idlFactory: any, options?: {
        requiresSigning?: boolean;
        anon: boolean;
    }): ActorSubclass<T>;
    undelegatedActor<T>(canisterId: string, idlFactory: any): ActorSubclass<T>;
    disconnect(): Promise<void>;
    getState(): Adapter.Status;
    getAccounts(): NFIDAccount[];
}

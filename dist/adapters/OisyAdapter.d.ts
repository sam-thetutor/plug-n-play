import { Principal } from '@dfinity/principal';
import { ActorSubclass } from '@dfinity/agent';
import { Wallet, Adapter } from '../types/index.d';
export declare enum AccountType {
    GLOBAL = "GLOBAL",
    SESSION = "SESSION"
}
export interface OisyAccount {
    id: string;
    displayName: string;
    principal: string;
    subaccount: Uint8Array;
    type: AccountType;
}
export declare class OisyAdapter implements Adapter.Interface {
    private static readonly TRANSPORT_CONFIG;
    private signer;
    private agent;
    private signerAgent;
    private accounts;
    static readonly logo: string;
    name: string;
    logo: string;
    url: string;
    config: Wallet.PNPConfig;
    info: Adapter.Info;
    state: Adapter.Status;
    constructor();
    isAvailable(): Promise<boolean>;
    isConnected(): Promise<boolean>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string>;
    connect(config: Wallet.PNPConfig): Promise<Wallet.Account>;
    private setState;
    getState(): Adapter.Status;
    createActor<T>(canisterId: string, idlFactory: any, options?: {
        requiresSigning?: boolean;
        anon: boolean;
    }): ActorSubclass<T>;
    disconnect(): Promise<void>;
    getAccounts(): OisyAccount[];
}

import { Principal } from '@dfinity/principal';
import { ActorSubclass } from '@dfinity/agent';
import { Wallet, Adapter } from '../types/index';
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
    private transport;
    static readonly logo: string;
    name: string;
    logo: string;
    url: string;
    config: Wallet.PNPConfig;
    constructor();
    isAvailable(): Promise<boolean>;
    isConnected(): Promise<boolean>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string>;
    connect(config: Wallet.PNPConfig): Promise<Wallet.Account>;
    createActor<T>(canisterId: string, idlFactory: any, options?: {
        requiresSigning?: boolean;
        anon: boolean;
    }): ActorSubclass<T>;
    disconnect(): Promise<void>;
    getAccounts(): OisyAccount[];
}

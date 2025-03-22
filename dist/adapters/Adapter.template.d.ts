import { ActorSubclass } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import { Adapter, Wallet } from '../types';
/**
 * Template adapter class that implements the Adapter.Interface
 */
export declare class TemplateAdapter implements Adapter.Interface {
    static readonly logo: string;
    name: string;
    logo: string;
    url: string;
    readyState: string;
    info: Adapter.Info;
    constructor();
    isAvailable(): Promise<boolean>;
    connect(config: Wallet.AdapterConfig): Promise<Wallet.Account>;
    disconnect(): Promise<void>;
    getPrincipal(): Promise<Principal | null>;
    getAccountId(): Promise<string | null>;
    isConnected(): Promise<boolean>;
    createActor<T>(canisterId: string, idl: any): ActorSubclass<T>;
    createAnonymousActor<T>(canisterId: string, idl: any, options?: {
        requiresSigning?: boolean;
    }): ActorSubclass<T>;
}

import { ActorSubclass } from '../@dfinity/agent';
import { Principal } from '../@dfinity/principal';
import { Adapter, Wallet } from '../types';
export declare class AstroXAdapter implements Adapter.Interface {
    static logo: string;
    logo: string;
    name: string;
    url: string;
    private agent;
    private readyState;
    constructor();
    private initAstroX;
    isAvailable(): Promise<boolean>;
    connect(config: Wallet.AdapterConfig): Promise<Wallet.Account>;
    disconnect(): Promise<void>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string>;
    createActor<T>(canisterId: string, idlFactory: any): Promise<ActorSubclass<T>>;
    isConnected(): Promise<boolean>;
}

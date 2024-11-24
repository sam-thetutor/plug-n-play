import { ActorSubclass } from '../@dfinity/agent';
import { Adapter, Wallet } from '../types';
import { Principal } from '../@dfinity/principal';
export declare class PlugAdapter implements Adapter.Interface {
    static readonly logo: string;
    name: string;
    logo: string;
    url: string;
    private readyState;
    constructor();
    private initPlug;
    isAvailable(): Promise<boolean>;
    isConnected(): Promise<boolean>;
    connect(config: Wallet.AdapterConfig): Promise<Wallet.Account>;
    disconnect(): Promise<void>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string>;
    createActor<T>(canisterId: string, idl: any): Promise<ActorSubclass<T>>;
    private handleConnectionUpdate;
}

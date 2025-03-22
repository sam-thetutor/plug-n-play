import { ActorSubclass } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import { Adapter, Wallet } from '../types';
export declare class PlugAdapter implements Adapter.Interface {
    static logo: string;
    logo: string;
    name: string;
    url: string;
    info: Adapter.Info;
    private readyState;
    private _connectionState;
    private _connectionStateTimestamp;
    private _connectionStateUpdateInterval;
    constructor();
    private initPlug;
    isAvailable(): Promise<boolean>;
    connect(config: Wallet.AdapterConfig): Promise<Wallet.Account>;
    disconnect(): Promise<void>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string>;
    createActor<T>(canisterId: string, idl: any, options?: {
        requiresSigning?: boolean;
    }): ActorSubclass<T>;
    private updateConnectionState;
    isConnected(): Promise<boolean>;
    isConnectedAsync(): Promise<boolean>;
    private handleConnectionUpdate;
}

import { ActorSubclass } from '../@dfinity/agent';
import { Principal } from '../@dfinity/principal';
import { Adapter, Wallet } from '../types';
export declare class PlugAdapter implements Adapter.Interface {
    static readonly logo: string;
    name: string;
    logo: string;
    url: string;
    private signer;
    private agent;
    private signerAgent;
    private identity;
    private sessionKey;
    private activeActors;
    private transport;
    constructor();
    private initPlug;
    private ensurePlugConnection;
    isAvailable(): Promise<boolean>;
    isConnected(): Promise<boolean>;
    connect(config: Wallet.AdapterConfig): Promise<Wallet.Account>;
    disconnect(): Promise<void>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string | null>;
    private isTabClosedError;
    createActor<T>(canisterId: string, idlFactory: any, options?: {
        requiresSigning?: boolean;
    }): Promise<ActorSubclass<T>>;
    executeActorMethod<T>(actor: ActorSubclass<any>, methodName: string, args: any[], maxRetries?: number): Promise<T>;
}

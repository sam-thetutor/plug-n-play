import { ActorSubclass } from '@dfinity/agent';
import { Wallet, Adapter, AdapterState } from '../types/index.d';
import { Principal } from '@dfinity/principal';
export declare class NNSAdapter implements Adapter.Interface {
    static readonly logo: string;
    name: string;
    logo: string;
    url: string;
    config: Wallet.PNPConfig;
    private authClient;
    private agent;
    private state;
    constructor(config?: Partial<Wallet.PNPConfig>);
    private setState;
    getState(): AdapterState;
    private initAgent;
    isAvailable(): Promise<boolean>;
    getIdentityProvider(isDev: boolean): string;
    connect(config: Wallet.PNPConfig): Promise<Wallet.Account>;
    private _continueLogin;
    isConnected(): Promise<boolean>;
    createActor<T>(canisterId: string, idl: any): ActorSubclass<T>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string>;
    private refreshLogin;
    undelegatedActor<T>(canisterId: string, idlFactory: any): ActorSubclass<T>;
    disconnect(): Promise<void>;
}

import { ActorSubclass } from '@dfinity/agent';
import { Wallet, Adapter } from '../../types/index.d';
import { Principal } from '@dfinity/principal';
import { ICRCAdapter } from './ICRCAdapter';
export declare class IIAdapter extends ICRCAdapter implements Adapter.Interface {
    static readonly logo: string;
    static readonly walletName: string;
    walletName: string;
    logo: string;
    private authClient;
    private agent;
    constructor(config: Wallet.PNPConfig);
    private initAgent;
    isAvailable(): Promise<boolean>;
    connect(): Promise<Wallet.Account>;
    private _continueLogin;
    isConnected(): Promise<boolean>;
    protected createActorInternal<T>(canisterId: string, idl: any): ActorSubclass<T>;
    getPrincipal(): Promise<Principal>;
    private refreshLogin;
    protected disconnectInternal(): Promise<void>;
    protected cleanupInternal(): void;
}

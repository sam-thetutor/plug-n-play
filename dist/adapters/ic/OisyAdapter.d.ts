import { Principal } from '@dfinity/principal';
import { ActorSubclass } from '@dfinity/agent';
import { Wallet, Adapter } from '../../types/index.d';
import { ICRCAdapter } from './ICRCAdapter';
export declare class OisyAdapter extends ICRCAdapter implements Adapter.Interface {
    private static readonly TRANSPORT_CONFIG;
    private signer;
    private agent;
    private signerAgent;
    private transport;
    static readonly logo: string;
    static readonly walletName: string;
    walletName: string;
    logo: string;
    constructor(config: Wallet.PNPConfig);
    isAvailable(): Promise<boolean>;
    isConnected(): Promise<boolean>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string>;
    connect(): Promise<Wallet.Account>;
    protected createActorInternal<T>(canisterId: string, idlFactory: any): ActorSubclass<T>;
    protected disconnectInternal(): Promise<void>;
    protected cleanupInternal(): void;
}

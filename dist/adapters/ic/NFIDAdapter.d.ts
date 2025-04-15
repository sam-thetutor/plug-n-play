import { Principal } from '@dfinity/principal';
import { ActorSubclass } from '@dfinity/agent';
import { Wallet, Adapter } from '../../types/index.d';
import { ICRCAdapter } from './ICRCAdapter';
export declare class NFIDAdapter extends ICRCAdapter implements Adapter.Interface {
    private static readonly TRANSPORT_CONFIG;
    private agent;
    private identity;
    private sessionKey;
    private signerAgent;
    private signer;
    private transport;
    static readonly logo: string;
    static readonly walletName: string;
    walletName: string;
    logo: string;
    url: string;
    constructor(config: Wallet.PNPConfig);
    isAvailable(): Promise<boolean>;
    isConnected(): Promise<boolean>;
    getPrincipal(): Promise<Principal>;
    unwrapResponse: <T extends any>(response: any) => T;
    connect(): Promise<Wallet.Account>;
    undelegatedActor<T>(canisterId: string, idlFactory: any): ActorSubclass<T>;
    protected createActorInternal<T>(canisterId: string, idlFactory: any, options?: {
        requiresSigning?: boolean;
    }): ActorSubclass<T>;
    protected disconnectInternal(): Promise<void>;
    protected cleanupInternal(): void;
}

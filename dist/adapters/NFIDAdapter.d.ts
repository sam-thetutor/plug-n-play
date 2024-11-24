import { Principal } from '../@dfinity/principal';
import { ActorSubclass } from '../@dfinity/agent';
import { Wallet, Adapter } from '../types/index';
export declare enum AccountType {
    GLOBAL = "GLOBAL",
    SESSION = "SESSION"
}
export interface NFIDAccount {
    id: string;
    displayName: string;
    principal: string;
    subaccount: Uint8Array;
    type: AccountType;
}
export declare enum AdapterState {
    READY = "READY",
    LOADING = "LOADING",
    PROCESSING = "PROCESSING",
    ERROR = "ERROR"
}
export declare class NFIDAdapter implements Adapter.Interface {
    private static readonly STORAGE_KEY;
    private static readonly MAX_RECONNECT_ATTEMPTS;
    private static readonly RECONNECT_DELAY;
    private signer;
    private agent;
    private signerAgent;
    private identity;
    private delegationStorage;
    private signatureQueue;
    private lastConnectionAttempt;
    private readonly CONNECTION_COOLDOWN;
    private state;
    private accounts;
    private actorCache;
    private sessionKey;
    private reconnectAttempts;
    static readonly logo: string;
    name: string;
    logo: string;
    identityProviderUrl: string;
    url: string;
    config: Wallet.PNPConfig;
    constructor();
    private setIdentityProviderUrl;
    private tryRestoreSession;
    private attemptReconnect;
    private setState;
    private getDelegationChain;
    private setDelegationChain;
    private removeDelegationChain;
    private initSigner;
    isAvailable(): Promise<boolean>;
    isConnected(): Promise<boolean>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string>;
    unwrapResponse: <T extends unknown>(response: any) => T;
    connect(config: Wallet.PNPConfig): Promise<Wallet.Account>;
    private isDelegationReady;
    private waitForDelegation;
    createActor<T>(canisterId: string, idlFactory: any, options?: {
        requiresSigning?: boolean;
    }): Promise<ActorSubclass<T>>;
    undelegatedActor<T>(canisterId: string, idlFactory: any): Promise<ActorSubclass<T>>;
    disconnect(): Promise<void>;
    queueSignatureRequest<T>(request: () => Promise<T>): Promise<T>;
    getState(): AdapterState;
    getAccounts(): NFIDAccount[];
}

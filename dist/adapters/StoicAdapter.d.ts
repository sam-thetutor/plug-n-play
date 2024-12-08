import { Principal } from '../@dfinity/principal';
import { ActorSubclass } from '../@dfinity/agent';
import { Wallet, Adapter } from '../types/index';
export declare enum AccountType {
    GLOBAL = "GLOBAL",
    SESSION = "SESSION"
}
export interface StoicAccount {
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
export declare class StoicAdapter implements Adapter.Interface {
    private static readonly STORAGE_KEY;
    private static readonly MAX_RECONNECT_ATTEMPTS;
    private static readonly CONNECTION_COOLDOWN;
    private static readonly CONNECTION_TIMEOUT;
    private static readonly WINDOW_FEATURES;
    private static readonly TRANSPORT_CONFIG;
    private signer;
    private agent;
    private signerAgent;
    private identity;
    private delegationStorage;
    private signatureQueue;
    private lastConnectionAttempt;
    private connectionPromise;
    private transport;
    private signerWindow;
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
    private initialize;
    private tryRestoreSession;
    private setState;
    private getDelegationChain;
    private setDelegationChain;
    private removeDelegationChain;
    private setupWindowTracking;
    private initSigner;
    private isDelegationReady;
    private waitForDelegation;
    private createAnonymousActor;
    createActor<T>(canisterId: string, idlFactory: any, options?: {
        requiresSigning?: boolean;
        anon: boolean;
    }): Promise<ActorSubclass<T>>;
    undelegatedActor<T>(canisterId: string, idlFactory: any): Promise<ActorSubclass<T>>;
    disconnect(): Promise<void>;
    queueSignatureRequest<T>(request: () => Promise<T>): Promise<T>;
    getState(): AdapterState;
    getAccounts(): StoicAccount[];
    private cleanupTransport;
    isAvailable(): Promise<boolean>;
    isConnected(): Promise<boolean>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string>;
    connect(config: Wallet.PNPConfig): Promise<Wallet.Account>;
    unwrapResponse: <T>(response: any) => T;
    private _connect;
}

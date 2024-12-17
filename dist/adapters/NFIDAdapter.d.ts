import { Principal } from '../@dfinity/principal';
import { ActorSubclass } from '../@dfinity/agent';
import { Wallet, Adapter } from '../types/index.d';
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
    private static readonly CONNECTION_COOLDOWN;
    private static readonly CONNECTION_TIMEOUT;
    private static readonly TRANSPORT_CONFIG;
    private static readonly HIDDEN_TRANSPORT_CONFIG;
    private agent;
    private identity;
    private delegationStorage;
    private signatureQueue;
    private signerWindow;
    private state;
    private accounts;
    private actorCache;
    private sessionKey;
    private signerAgent;
    private signer;
    static readonly logo: string;
    name: string;
    logo: string;
    identityProviderUrl: string;
    url: string;
    config: Wallet.PNPConfig;
    constructor();
    private setState;
    private setDelegationChain;
    private cleanupTransport;
    isAvailable(): Promise<boolean>;
    isConnected(): Promise<boolean>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string>;
    unwrapResponse: <T extends unknown>(response: any) => T;
    private connect;
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
    getAccounts(): NFIDAccount[];
}

import { Principal } from '../@dfinity/principal';
import { ActorSubclass } from '../@dfinity/agent';
import { DelegationChain } from '../@dfinity/identity';
import { Wallet, Adapter } from '../types/index';
export interface PermissionScope<Method extends string = string> {
    method: Method;
}
export type DelegationPermissionScope = PermissionScope<"icrc34_delegation"> & {
    targets?: Principal[];
};
export interface DelegationParams {
    targets?: Principal[];
    maxTimeToLive?: bigint;
}
export interface RequestPermissionsParams {
    targets?: Principal[];
    canisterId?: string;
}
export declare class NFIDAdapter implements Adapter.Interface {
    private authClient;
    private agent;
    private identity;
    private signIdentity;
    static readonly logo: string;
    name: string;
    logo: string;
    readyState: string;
    url: string;
    config: Wallet.PNPConfig;
    private delegationState;
    private resetDelegationState;
    private waitForDelegation;
    constructor();
    private initAuthClient;
    private refreshLogin;
    isAvailable(): Promise<boolean>;
    connect(config: Wallet.PNPConfig): Promise<Wallet.Account>;
    private _continueLogin;
    requestPermissions(params: RequestPermissionsParams): Promise<boolean>;
    createActor<T>(canisterId: string, idl: any): Promise<ActorSubclass<T>>;
    disconnect(): Promise<void>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string>;
    isConnected(): Promise<boolean>;
    getDelegation(params: DelegationParams): Promise<DelegationChain | null>;
    createDelegation(params: DelegationParams): Promise<DelegationChain>;
    private calculateExpiryTime;
}

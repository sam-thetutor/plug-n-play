import { HttpAgent, ActorSubclass } from '../@dfinity/agent';
import { Adapter, Wallet } from '../types';
import { Principal } from '../@dfinity/principal';
declare global {
    interface Window {
        ic: {
            plug: {
                agent: HttpAgent;
                principalId: string;
                accountId: string;
                requestConnect: (params?: {
                    whitelist?: string[];
                    host?: string;
                    timeout?: number;
                    onConnectionUpdate?: () => void;
                }) => Promise<string>;
                isConnected: () => Promise<boolean>;
                createActor: <T>(params: {
                    canisterId: string;
                    interfaceFactory: any;
                }) => Promise<ActorSubclass<T>>;
                disconnect: () => Promise<void>;
            };
        };
    }
}
export declare class PlugAdapter implements Adapter.Interface {
    static readonly logo: string;
    name: string;
    logo: string;
    url: string;
    private activeActors;
    isAvailable(): Promise<boolean>;
    isConnected(): Promise<boolean>;
    connect(config: Wallet.PNPConfig): Promise<Wallet.Account>;
    disconnect(): Promise<void>;
    getPrincipal(): Promise<Principal>;
    getAccountId(): Promise<string>;
    createActor<T>(canisterId: string, idlFactory: any, options?: {
        requiresSigning?: boolean;
    }): Promise<ActorSubclass<T>>;
}

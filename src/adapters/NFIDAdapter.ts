import { Principal } from '@dfinity/principal';
import { Actor, HttpAgent, type ActorSubclass, Identity } from "@dfinity/agent";
import { DelegationChain, DelegationIdentity, Ed25519KeyIdentity } from "@dfinity/identity";
import type { Wallet, Adapter } from '../types/index';
import { getAccountIdentifier } from '../utils/identifierUtils';
import { createHttpAgent } from '../utils/agentUtils';
import nfidLogo from "../../assets/nfid.svg";
import { principalToSubAccount } from "@dfinity/utils";
import { Signer } from "@slide-computer/signer";
import { PostMessageTransport } from "@slide-computer/signer-web";
import { SignerAgent } from "@slide-computer/signer-agent";
import { IDL } from '@dfinity/candid';

// Account types for different session types
export enum AccountType {
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

// Storage interface for delegation
interface DelegationStorage {
    get(key: string): Promise<string | null>;
    set(key: string, value: string): Promise<void>;
    remove(key: string): Promise<void>;
}

// Local storage implementation
class LocalDelegationStorage implements DelegationStorage {
    async get(key: string): Promise<string | null> {
        return localStorage.getItem(key);
    }

    async set(key: string, value: string): Promise<void> {
        localStorage.setItem(key, value);
    }

    async remove(key: string): Promise<void> {
        localStorage.removeItem(key);
    }
}

// Queue for managing signature requests
class SignatureQueue {
    private queue: Array<() => Promise<any>> = [];
    private isProcessing = false;

    async add<T>(request: () => Promise<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            this.queue.push(async () => {
                try {
                    const result = await request();
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
            this.processQueue();
        });
    }

    private async processQueue() {
        if (this.isProcessing || this.queue.length === 0) return;
        this.isProcessing = true;
        while (this.queue.length > 0) {
            const request = this.queue.shift();
            if (request) {
                try {
                    await request();
                } catch (error) {
                    console.error('Error processing signature request:', error);
                }
            }
        }
        this.isProcessing = false;
    }

    clear() {
        this.queue = [];
        this.isProcessing = false;
    }
}

// State management for adapter
export enum AdapterState {
    READY = "READY",
    LOADING = "LOADING",
    PROCESSING = "PROCESSING",
    ERROR = "ERROR"
}

export class NFIDAdapter implements Adapter.Interface {
    private signer: Signer | null = null;
    private agent: HttpAgent | SignerAgent<any> | null = null;
    private signerAgent: SignerAgent<any> | null = null;
    private identity: DelegationIdentity | null = null;
    private delegationStorage: DelegationStorage;
    private signatureQueue: SignatureQueue;
    private lastConnectionAttempt: number = 0;
    private readonly CONNECTION_COOLDOWN = 3000; // 3 seconds
    private state: AdapterState = AdapterState.READY;
    private accounts: NFIDAccount[] = [];
    private actorCache: Map<string, ActorSubclass<any>> = new Map();
    
    static readonly logo: string = nfidLogo;
    name: string = "NFID";
    logo: string = NFIDAdapter.logo;
    url: string = 'https://nfid.one/rpc';
    config: Wallet.PNPConfig;

    constructor() {
        this.url = 'https://nfid.one/rpc';
        this.name = 'NFID';
        this.logo = NFIDAdapter.logo;
        this.delegationStorage = new LocalDelegationStorage();
        this.signatureQueue = new SignatureQueue();
    }

    private setState(newState: AdapterState) {
        this.state = newState;
        // Could emit an event here if needed
    }

    private async getDelegationChain(key: string): Promise<DelegationChain | null> {
        const stored = await this.delegationStorage.get(key);
        if (!stored) return null;
        try {
            return DelegationChain.fromJSON(JSON.parse(stored));
        } catch (error) {
            console.error('Error parsing delegation chain:', error);
            return null;
        }
    }

    private async setDelegationChain(key: string, chain: DelegationChain): Promise<void> {
        await this.delegationStorage.set(key, JSON.stringify(chain.toJSON()));
    }

    private async removeDelegationChain(key: string): Promise<void> {
        await this.delegationStorage.remove(key);
    }

    private async initSigner(): Promise<void> {
        if (!this.signer) {
            const now = Date.now();
            if (now - this.lastConnectionAttempt < this.CONNECTION_COOLDOWN) {
                throw new Error('Please wait before attempting to connect again');
            }
            this.lastConnectionAttempt = now;

            const transport = new PostMessageTransport({
                url: this.url,
            });

            this.signer = new Signer({ transport });
        }
    }

    async isAvailable(): Promise<boolean> {
        return true; // NFID is web-based, so it's always available
    }

    async isConnected(): Promise<boolean> {
        return this.identity !== null && this.agent !== null;
    }

    async getPrincipal(): Promise<Principal> {
        if (!this.identity) {
            throw new Error("Not connected");
        }
        return this.identity.getPrincipal();
    }

    async getAccountId(): Promise<string> {
        if (!this.identity) {
            throw new Error("Not connected");
        }
        const principal = this.identity.getPrincipal();
        return getAccountIdentifier(principal.toText()) || "";
    }

    async connect(config: Wallet.PNPConfig): Promise<Wallet.Account> {
        try {
            this.setState(AdapterState.LOADING);
            this.config = config;
            await this.initSigner();
            
            if (!this.signer) {
                throw new Error("Failed to initialize NFID signer");
            }

            this.setState(AdapterState.PROCESSING);

            // Create session key
            const sessionKey = Ed25519KeyIdentity.generate();
            
            // Get delegation from signer with targets and session key
            const delegationChain = await this.signer.delegation({
                publicKey: sessionKey.getPublicKey().toDer(),
                targets: config.delegationTargets || [],
                maxTimeToLive: config.delegationTimeout || BigInt(24 * 60 * 60 * 1000 * 1000 * 1000), // 24 hours
            });

            // Create delegation identity
            const delegationIdentity = DelegationIdentity.fromDelegation(
                sessionKey,
                delegationChain,
            );

            // Create agent with delegation identity
            this.agent = HttpAgent.createSync({
                host: config.host,
                identity: delegationIdentity,
                verifyQuerySignatures: config.verifyQuerySignatures
            });

            // Verify we're not anonymous
            const principal = delegationIdentity.getPrincipal();
            console.log("NFID Principal:", principal.toString());
            if (principal.isAnonymous()) {
                throw new Error("Failed to authenticate with NFID - got anonymous principal");
            }

            // Create signer agent
            this.signerAgent = SignerAgent.createSync({
                signer: this.signer,
                account: principal,
            });

            this.identity = delegationIdentity;

            // Create account object
            const accountId = getAccountIdentifier(principal.toText()) || "";
            const subaccount = principalToSubAccount(principal);
            const account: NFIDAccount = {
                id: principal.toText(),
                displayName: `NFID Account`,
                principal: principal.toText(),
                subaccount: new Uint8Array(subaccount),
                type: AccountType.SESSION
            };
            
            this.accounts = [account];
            this.setState(AdapterState.READY);

            return {
                owner: principal,
                subaccount: null,
                hasDelegation: true
            };
        } catch (error) {
            console.error('Error connecting to NFID:', error);
            this.setState(AdapterState.ERROR);
            throw error;
        }
    }

    async disconnect(): Promise<void> {
        try {
            this.setState(AdapterState.PROCESSING);
            if (this.signer) {
                await this.signer.closeChannel();
                this.signer = null;
            }
            this.signatureQueue.clear();
            this.identity = null;
            this.agent = null;
            this.signerAgent = null;
            this.accounts = [];
            this.actorCache.clear();
            this.setState(AdapterState.READY);
        } catch (error) {
            console.error('Error disconnecting from NFID:', error);
            this.setState(AdapterState.ERROR);
            throw error;
        }
    }

    async createActor<T>(
        canisterId: string,
        idlFactory: IDL.InterfaceFactory,
        requiresSigning: boolean = false
    ): Promise<ActorSubclass<T>> {
        try {
            console.log('Creating actor for canister:', canisterId);
            console.log('Configuration:', {
                isConnected: await this.isConnected(),
                requiresSigning,
                host: this.config.hostUrl || this.config.host,
                verifyQuerySignatures: this.config.verifyQuerySignatures
            });

            // Check if actor is already cached
            const cacheKey = `${canisterId}-${requiresSigning}`;
            if (this.actorCache.has(cacheKey)) {
                return this.actorCache.get(cacheKey) as ActorSubclass<T>;
            }

            // Create anonymous agent for non-authenticated operations
            if (!this.isConnected()) {
                console.log('Creating anonymous actor - not connected');
                const anonymousAgent = HttpAgent.createSync({ 
                    host: this.config.host,
                    verifyQuerySignatures: this.config.verifyQuerySignatures
                });
                
                // Fetch root key for development mode
                if (!this.config.isDev) {
                    try {
                        await anonymousAgent.fetchRootKey();
                    } catch (err) {
                        console.warn('Unable to fetch root key:', err);
                    }
                }
                
                const actor = Actor.createActor<T>(idlFactory, {
                    agent: anonymousAgent,
                    canisterId,
                });
                this.actorCache.set(cacheKey, actor);
                return actor;
            }

            // For authenticated operations
            if (requiresSigning) {
                console.log('Creating signed actor with signer agent');
                // Use signer agent for signing operations
                if (!this.signerAgent) {
                    throw new Error("No signer agent available. Please connect first.");
                }
                const actor = Actor.createActor<T>(idlFactory, {
                    agent: this.signerAgent,
                    canisterId,
                });

                // Wrap actor methods to use signature queue for signing operations
                const wrappedActor = new Proxy(actor, {
                    get: (target: any, prop: string) => {
                        const method = target[prop];
                        if (typeof method === 'function') {
                            return (...args: any[]) => {
                                console.log('Queuing signed operation:', prop);
                                return this.queueSignatureRequest(async () => {
                                    return method.apply(target, args);
                                });
                            };
                        }
                        return method;
                    },
                }) as ActorSubclass<T>;
                this.actorCache.set(cacheKey, wrappedActor);
                return wrappedActor;
            } else {
                console.log('Creating authenticated but unsigned actor with HttpAgent');
                // Use pre-configured HttpAgent for authenticated but unsigned operations
                if (!this.agent) {
                    throw new Error("No HTTP agent available. Please connect first.");
                }
                
                // Fetch root key for development mode
                if (!this.config.isDev) {
                    try {
                        await this.agent.fetchRootKey();
                    } catch (err) {
                        console.warn('Unable to fetch root key:', err);
                    }
                }

                const actor = Actor.createActor<T>(idlFactory, {
                    agent: this.agent,
                    canisterId,
                });
                this.actorCache.set(cacheKey, actor);
                return actor;
            }
        } catch (error) {
            console.error('Error creating actor:', error);
            throw new Error(`Failed to create actor: ${error instanceof Error ? error.message : String(error)}`);
        }
    }

    async queueSignatureRequest<T>(request: () => Promise<T>): Promise<T> {
        return this.signatureQueue.add(request);
    }

    getState(): AdapterState {
        return this.state;
    }

    getAccounts(): NFIDAccount[] {
        return this.accounts;
    }
}

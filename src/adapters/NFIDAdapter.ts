import { Principal } from '@dfinity/principal';
import { Actor, HttpAgent, type ActorSubclass, Identity, SignIdentity } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import { DelegationChain, DelegationIdentity } from "@dfinity/identity";
import type { Wallet, Adapter } from '../types/index';
import { getAccountIdentifier } from '../utils/identifierUtils';
import { createHttpAgent } from '../utils/agentUtils';
import nfidLogo from "../../assets/nfid.svg";
import { principalToSubAccount } from "@dfinity/utils";

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

export class NFIDAdapter implements Adapter.Interface {
    private authClient: AuthClient | null = null;
    private agent: HttpAgent | null = null;
    private identity: Identity | null = null;
    private signIdentity: SignIdentity | null = null;
    static readonly logo: string = nfidLogo;
    name: string = "NFID";
    logo: string = NFIDAdapter.logo;
    readyState: string = "Loadable";
    url: string = 'https://nfid.one/';
    config: Wallet.PNPConfig;

    private delegationState: {
        lastAttempt?: number;
        retryCount: number;
        pendingPromise?: Promise<DelegationChain | null>;
    } = {
        retryCount: 0
    };

    private resetDelegationState() {
        this.delegationState = {
            retryCount: 0
        };
    }

    private async waitForDelegation(timeoutMs: number = 30000): Promise<DelegationChain | null> {
        const startTime = Date.now();
        while (Date.now() - startTime < timeoutMs) {
            const delegation = await this.getDelegation({});
            if (delegation) return delegation;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        return null;
    }

    constructor() {
        this.url = 'https://nfid.one/';
        this.name = 'NFID';
        this.logo = NFIDAdapter.logo;
        this.readyState = "Loadable";
    }

    private async initAuthClient(): Promise<void> {
        if (!this.authClient) {
            this.authClient = await AuthClient.create({
                idleOptions: {
                    idleTimeout: this.config?.timeout || 1000 * 60 * 60 * 24 * 7, // 7 days
                    disableDefaultIdleCallback: true, // Disable default reload behavior
                },
            });
            this.authClient.idleManager?.registerCallback?.(() => this.refreshLogin());
        }
    }

    private async refreshLogin(): Promise<void> {
        try {
            await this.connect(this.config);
        } catch (error) {
            console.error("Failed to refresh login:", error);
            await this.disconnect();
        }
    }

    async isAvailable(): Promise<boolean> {
        return true; // NFID is web-based, so it's always available
    }

    async connect(config: Wallet.PNPConfig): Promise<Wallet.Account> {
        console.log('Connecting with config:', {
            hostUrl: config.hostUrl,
            hasDelegationTargets: !!config.delegationTargets?.length,
            delegationTimeout: config.delegationTimeout?.toString()
        });
        
        this.config = config;
        this.resetDelegationState();
        await this.initAuthClient();

        // Clear existing auth state if delegation is requested
        const useDelegation = !!this.config.delegationTargets?.length;
        if (useDelegation) {
            await this.authClient!.logout();
        }

        const isAuthenticated = await this.authClient!.isAuthenticated();
        console.log('Auth state:', { isAuthenticated, useDelegation });

        // Always go through login flow if delegation is requested
        if (!isAuthenticated || useDelegation) {
            return new Promise<Wallet.Account>((resolve, reject) => {
                const maxTimeToLive = useDelegation 
                    ? (this.config.delegationTimeout || BigInt(this.config?.timeout || 1000 * 60 * 60 * 24 * 7))
                    : undefined;

                // Construct NFID URL with delegation parameters
                const nfidUrl = new URL('https://nfid.one/authenticate/');
                nfidUrl.searchParams.set('applicationName', window.location.hostname);
                
                if (useDelegation && this.config.delegationTargets) {
                    // Add ICRC-34 delegation scope
                    const scope = {
                        method: "icrc34_delegation",
                        targets: this.config.delegationTargets.map(p => p.toString())
                    };
                    
                    // Add ICRC-28 target canisters
                    nfidUrl.searchParams.set('scope', JSON.stringify([scope]));
                    nfidUrl.searchParams.set('targets', this.config.delegationTargets.map(p => p.toString()).join(','));
                    if (maxTimeToLive) {
                        nfidUrl.searchParams.set('maxTimeToLive', maxTimeToLive.toString());
                    }
                }
                
                console.log('NFID login URL:', nfidUrl.toString());

                let loginTimeoutId: number;
                const cleanup = () => {
                    if (loginTimeoutId) window.clearTimeout(loginTimeoutId);
                };

                // Set timeout for entire login process
                loginTimeoutId = window.setTimeout(() => {
                    cleanup();
                    reject(new Error('Login process timed out'));
                }, 120000); // 2 minute timeout for entire login process
                
                this.authClient!.login({
                    identityProvider: nfidUrl.toString(),
                    windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,
                    maxTimeToLive,
                    derivationOrigin: this.config?.derivationOrigin,
                    onSuccess: async () => {
                        try {
                            cleanup();
                            // Get and verify identity first
                            const identity = this.authClient!.getIdentity();
                            this.identity = identity;
                            
                            // Check signing capabilities if needed
                            if (useDelegation) {
                                if (!('sign' in identity && 'getPublicKey' in identity)) {
                                    reject(new Error('Current identity does not support signing'));
                                    return;
                                }
                                this.signIdentity = identity as SignIdentity;
                                
                                // Get existing delegation or create new one with explicit scope
                                const delegation = await this.getDelegation({
                                    targets: this.config.delegationTargets,
                                    maxTimeToLive
                                });
                                
                                if (delegation) {
                                    console.log('Got delegation:', {
                                        delegationChainLength: delegation.delegations.length,
                                        delegationKey: delegation.delegations[0]?.delegation.pubkey,
                                        expiry: delegation.delegations[0]?.delegation.expiration.toString()
                                    });
                                    
                                    // Create delegation identity
                                    const delegationIdentity = DelegationIdentity.fromDelegation(
                                        this.signIdentity,
                                        delegation
                                    );
                                    this.identity = delegationIdentity;
                                    this.signIdentity = delegationIdentity;
                                    
                                    // Create new auth client with delegation identity
                                    this.authClient = await AuthClient.create({
                                        identity: delegationIdentity,
                                        idleOptions: {
                                            idleTimeout: this.config?.timeout || 1000 * 60 * 60 * 24 * 7, // 7 days
                                            disableDefaultIdleCallback: true, // Disable default reload behavior
                                        },
                                    });
                                } else {
                                    console.warn('No delegation received from NFID');
                                }
                            }
                            
                            const account = await this._continueLogin(config.hostUrl);
                            console.log('Login successful with account:', {
                                principal: account.owner.toString(),
                                hasDelegation: account.hasDelegation
                            });
                            resolve(account);
                        } catch (error) {
                            cleanup();
                            reject(error);
                        }
                    },
                    onError: (error) => {
                        cleanup();
                        reject(new Error("Authentication failed: " + error));
                    },
                });
            });
        } else {
            return this._continueLogin(config.hostUrl);
        }
    }

    private async _continueLogin(host: string): Promise<Wallet.Account> {
        try {
            // Only get a fresh identity if we don't already have one
            if (!this.identity) {
                const identity = this.authClient!.getIdentity();
                this.identity = identity;
            }
            
            // Only require signing capabilities if using delegations
            const useDelegation = !!this.config.delegationTargets?.length;
            if (useDelegation) {
                if (!('sign' in this.identity && 'getPublicKey' in this.identity)) {
                    throw new Error('Current identity does not support signing');
                }
                this.signIdentity = this.identity as SignIdentity;
            }
            
            const principal = this.identity.getPrincipal();
            this.agent = createHttpAgent({ 
                identity: this.identity, 
                host: host 
            });
            
            return {
                owner: principal,
                subaccount: principalToSubAccount(principal),
                hasDelegation: this.identity instanceof DelegationIdentity
            };
        } catch (error) {
            console.error("Failed to continue login:", error);
            throw error;
        }
    }

    async requestPermissions(params: RequestPermissionsParams): Promise<boolean> {
        if (!this.authClient) {
            throw new Error('Not connected');
        }

        console.log('Requesting permissions for targets:', params.targets?.map(p => p.toString()));

        // Get current identity and check signing capabilities
        const identity = this.authClient.getIdentity();
        if (!('sign' in identity && 'getPublicKey' in identity)) {
            throw new Error('Current identity does not support signing');
        }
        this.signIdentity = identity as SignIdentity;

        try {
            // Use delegation timeout from config if available
            const maxTimeToLive = this.config.delegationTimeout || 
                BigInt(this.config?.timeout || 1000 * 60 * 60 * 24 * 7); // 7 days in nanoseconds
            
            console.log('Requesting delegation with timeout:', maxTimeToLive.toString());

            // Request new delegation with specific targets
            const delegation = await this.createDelegation({
                targets: params.targets,
                maxTimeToLive
            });

            // Update the identity with new delegation
            if (delegation) {
                console.log('Creating delegation identity');
                const delegationIdentity = DelegationIdentity.fromDelegation(
                    this.signIdentity,
                    delegation
                );
                this.identity = delegationIdentity;
                this.signIdentity = delegationIdentity;
                this.agent = createHttpAgent({
                    identity: this.identity,
                    host: this.config.hostUrl
                });
                
                // Verify the delegation worked
                const principal = this.identity.getPrincipal();
                console.log('Delegation identity created with principal:', principal.toString());
                
                return true;
            }
            console.warn('No delegation created');
            return false;
        } catch (error) {
            console.error("Failed to request permissions:", error);
            throw error;
        }
    }

    async createActor<T>(canisterId: string, idl: any): Promise<ActorSubclass<T>> {
        if (!this.agent) throw new Error('Not connected');
        
        // Only request permissions if using delegations and we don't have a valid identity
        const useDelegation = !!this.config.delegationTargets?.length;
        if (useDelegation && !this.signIdentity) {
            const principal = Principal.fromText(canisterId);
            await this.requestPermissions({
                targets: [principal],
                canisterId
            });
        }

        return Actor.createActor(idl, {
            agent: this.agent,
            canisterId
        });
    }

    async disconnect(): Promise<void> {
        if (this.authClient) {
            await this.authClient.logout();
            this.authClient = null;
            this.agent = null;
            this.identity = null;
            this.signIdentity = null;
        }
    }

    async getPrincipal(): Promise<Principal> {
        if (!this.identity) throw new Error('Not connected');
        return this.identity.getPrincipal();
    }

    async getAccountId(): Promise<string> {
        const principal = await this.getPrincipal();
        return getAccountIdentifier(principal.toString()) || '';
    }

    async isConnected(): Promise<boolean> {
        return this.authClient ? this.authClient.isAuthenticated() : false;
    }

    async getDelegation(params: DelegationParams): Promise<DelegationChain | null> {
        if (!this.authClient || !this.identity) {
            throw new Error('Not connected');
        }

        try {
            // Return existing pending promise if one exists
            if (this.delegationState.pendingPromise) {
                return this.delegationState.pendingPromise;
            }

            // Get the current identity from auth client
            const identity = this.authClient.getIdentity();
            
            // If it's already a delegation identity, return its chain
            if (identity instanceof DelegationIdentity) {
                const delegation = identity.getDelegation();
                // Check if delegation is expired
                if (delegation.delegations[0]?.delegation.expiration > BigInt(Date.now()) * BigInt(1000000)) {
                    return delegation;
                }
            }

            // Check if we can get delegation directly
            if ('getDelegation' in identity) {
                try {
                    const delegation = await (identity as any).getDelegation();
                    if (delegation && delegation.delegations[0]?.delegation.expiration > BigInt(Date.now()) * BigInt(1000000)) {
                        return delegation;
                    }
                } catch (e) {
                    console.warn('Failed to get delegation directly:', e);
                }
            }

            // If we've exceeded retry count, wait before trying again
            if (this.delegationState.retryCount > 0) {
                const timeSinceLastAttempt = this.delegationState.lastAttempt 
                    ? Date.now() - this.delegationState.lastAttempt 
                    : Infinity;
                
                if (timeSinceLastAttempt < 5000) { // 5 second cooldown
                    throw new Error('Please wait before requesting another delegation');
                }
            }

            // Create new delegation if needed
            this.delegationState.lastAttempt = Date.now();
            this.delegationState.retryCount++;
            this.delegationState.pendingPromise = this.createDelegation(params)
                .then(async (delegation) => {
                    // Wait briefly to ensure delegation is registered
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    return delegation;
                })
                .finally(() => {
                    this.delegationState.pendingPromise = undefined;
                });

            return this.delegationState.pendingPromise;

        } catch (error) {
            console.error("Failed to get delegation:", error);
            throw error;
        }
    }

    async createDelegation(params: DelegationParams): Promise<DelegationChain> {
        if (!this.authClient) {
            throw new Error('Not connected');
        }

        try {
            console.log('Creating delegation with params:', {
                targets: params.targets?.map(p => p.toString()),
                maxTimeToLive: params.maxTimeToLive?.toString()
            });

            // Create a new delegation through the auth client's login method
            return new Promise((resolve, reject) => {
                let timeoutId: number;
                
                const cleanup = () => {
                    if (timeoutId) window.clearTimeout(timeoutId);
                };

                // Set timeout for delegation request
                timeoutId = window.setTimeout(() => {
                    cleanup();
                    reject(new Error('Delegation request timed out'));
                }, 60000); // 60 second timeout

                this.authClient!.login({
                    identityProvider: this.config.identityProvider || 'https://nfid.one',
                    maxTimeToLive: params.maxTimeToLive,
                    derivationOrigin: this.config?.derivationOrigin,
                    windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,
                    onSuccess: async () => {
                        try {
                            cleanup();
                            const identity = this.authClient!.getIdentity();
                            if (!('getDelegation' in identity)) {
                                reject(new Error('Identity does not support delegations'));
                                return;
                            }

                            // Wait for delegation to be available
                            const delegation = await this.waitForDelegation();
                            if (!delegation) {
                                reject(new Error('Delegation not received after waiting'));
                                return;
                            }

                            console.log('Delegation created successfully:', {
                                delegationChainLength: delegation.delegations.length,
                                expiry: delegation.delegations[0]?.delegation.expiration.toString()
                            });
                            resolve(delegation);
                        } catch (error) {
                            cleanup();
                            console.error('Failed to get delegation:', error);
                            reject(error);
                        }
                    },
                    onError: (error) => {
                        cleanup();
                        console.error('Failed to create delegation:', error);
                        reject(error);
                    }
                });
            });
        } catch (error) {
            console.error("Failed to create delegation:", error);
            throw error;
        }
    }

    private calculateExpiryTime(duration: bigint): bigint {
        // Get current time in nanoseconds
        const now = BigInt(Date.now()) * BigInt(1_000_000); // Convert ms to ns
        // Add the requested duration first
        const expiryTime = now + duration;
        // Then add a buffer for clock skew (30 minutes)
        const BUFFER_NS = BigInt(30 * 60 * 1000_000_000); // 30 minute buffer
        return expiryTime + BUFFER_NS;
    }
}

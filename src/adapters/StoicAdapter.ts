import { Principal } from "@dfinity/principal";
import {
  Actor,
  HttpAgent,
  type ActorSubclass,
  Signature,
  AnonymousIdentity,
} from "@dfinity/agent";
import {
  DelegationChain,
  DelegationIdentity,
  Ed25519KeyIdentity,
  Delegation,
} from "@dfinity/identity";
import type { Wallet, Adapter } from "../types/index";
import { getAccountIdentifier } from "../utils/identifierUtils";
import stoicLogo from "../../assets/stoic.png";
import { principalToSubAccount } from "@dfinity/utils";
import { StoicTransport } from "@slide-computer/signer-transport-stoic";
import { SignerAgent } from "@slide-computer/signer-agent";
import { Signer, SignerError } from "@slide-computer/signer";

// Account types for different session types
export enum AccountType {
  GLOBAL = "GLOBAL",
  SESSION = "SESSION",
}

export interface StoicAccount {
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
    const value = localStorage.getItem(key);
    console.debug(`[Stoic] Getting storage key ${key}:`, value);
    return value;
  }

  async set(key: string, value: string): Promise<void> {
    console.debug(`[Stoic] Setting storage key ${key}:`, value);
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  async remove(key: string): Promise<void> {
    console.debug(`[Stoic] Removing storage key ${key}`);
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
          console.error("Error processing signature request:", error);
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
  ERROR = "ERROR",
}

// Add these interfaces near the top of the file after the imports
interface AuthResponse {
  accounts: Array<{
    owner: string;
    subaccount?: string;
  }>;
}

interface DelegationResponseData {
  signerDelegation: Array<{
    delegation: {
      pubkey: string;
      expiration: string;
      targets?: string[];
    };
    signature: string;
  }>;
  publicKey: string;
}

// First, let's add an interface for the standards response
interface StandardsResponse {
  supportedStandards: Array<{
    name: string;
    url: string;
  }>;
}

interface PermissionsResponse {
  scopes: Array<{
    scope: {
      method: string;
    };
    state: 'granted' | 'denied' | 'ask_on_use';
  }>;
}

export class StoicAdapter implements Adapter.Interface {
  private static readonly STORAGE_KEY = "stoic_session";
  private static readonly MAX_RECONNECT_ATTEMPTS = 3;
  private static readonly CONNECTION_COOLDOWN = 1000; // 1 second cooldown
  private static readonly CONNECTION_TIMEOUT = 10000; // 10 seconds
  private static readonly WINDOW_FEATURES = "width=400,height=600,resizable,scrollbars=yes,status=1";
  private static readonly TRANSPORT_CONFIG = {
    statusPollingRate: 200,
    establishTimeout: 30000,
    disconnectTimeout: 25000,
    manageFocus: true,
  };

  private signer: Signer | null = null;
  private agent: HttpAgent | SignerAgent<any> | null = null;
  private signerAgent: SignerAgent<any> | null = null;
  private identity: DelegationIdentity | null = null;
  private delegationStorage: DelegationStorage;
  private signatureQueue: SignatureQueue;
  private lastConnectionAttempt: number = 0;
  private connectionPromise: Promise<void> | null = null;
  private transport: StoicTransport | null = null;
  private signerWindow: Window | null = null;
  private state: AdapterState = AdapterState.READY;
  private accounts: StoicAccount[] = [];
  private actorCache: Map<string, ActorSubclass<any>> = new Map();
  private sessionKey: Ed25519KeyIdentity | null = null;
  private reconnectAttempts = 0;

  static readonly logo: string = stoicLogo;
  name: string = "Stoic";
  logo: string = StoicAdapter.logo;
  identityProviderUrl: string = "https://www.stoicwallet.com";
  url: string = "https://www.stoicwallet.com";
  config: Wallet.PNPConfig;

  constructor() {
    this.url = "https://www.stoicwallet.com";
    this.name = "Stoic";
    this.logo = StoicAdapter.logo;
    this.delegationStorage = new LocalDelegationStorage();
    this.signatureQueue = new SignatureQueue();
    // Initialize session asynchronously - don't generate key here
    this.initialize();
  }

  private async initialize() {
    try {
      // Try to restore existing session first
      const restored = await this.tryRestoreSession();
      if (!restored) {
        this.setState(AdapterState.READY);
      }
    } catch (error) {
      console.error("[Stoic] Error during initialization:", error);
      this.setState(AdapterState.ERROR);
    }
  }

  private async tryRestoreSession(): Promise<boolean> {
    try {
      const stored = await this.delegationStorage.get(StoicAdapter.STORAGE_KEY);
      if (!stored) return false;

      let parsedData;
      try {
        parsedData = JSON.parse(stored);
      } catch (parseError) {
        console.warn("[Stoic] Failed to parse stored session:", parseError);
        await this.delegationStorage.remove(StoicAdapter.STORAGE_KEY);
        return false;
      }

      const { sessionKey, delegationChain } = parsedData;
      if (!sessionKey || !delegationChain) {
        console.warn("[Stoic] Invalid stored session format");
        await this.delegationStorage.remove(StoicAdapter.STORAGE_KEY);
        return false;
      }

      // Restore session key
      try {
        this.sessionKey = Ed25519KeyIdentity.fromParsedJson(sessionKey);
      } catch (keyError) {
        console.warn("[Stoic] Failed to restore session key:", keyError);
        await this.delegationStorage.remove(StoicAdapter.STORAGE_KEY);
        return false;
      }

      if (!this.sessionKey) {
        console.warn("[Stoic] Session key restoration returned null");
        await this.delegationStorage.remove(StoicAdapter.STORAGE_KEY);
        return false;
      }

      // Restore delegation chain and verify it's not expired
      let chain;
      try {
        chain = DelegationChain.fromJSON(delegationChain);
      } catch (chainError) {
        console.warn("[Stoic] Failed to restore delegation chain:", chainError);
        await this.delegationStorage.remove(StoicAdapter.STORAGE_KEY);
        return false;
      }

      const now = BigInt(Date.now()) * BigInt(1000000); // Convert to nanoseconds

      // Check if any delegation in the chain is expired
      const isExpired = chain.delegations.some(
        (d) => d.delegation.expiration <= now
      );
      
      if (isExpired) {
        console.debug("[Stoic] Stored delegation chain is expired");
        await this.delegationStorage.remove(StoicAdapter.STORAGE_KEY);
        return false;
      }

      // Create delegation identity first
      this.identity = DelegationIdentity.fromDelegation(this.sessionKey, chain);
      const principal = this.identity.getPrincipal();
      
      if (principal.isAnonymous()) {
        console.warn("[Stoic] Restored identity is anonymous");
        this.identity = null;
        return false;
      }

      // Initialize signer after identity is set
      await this.initSigner(false);
      if (!this.signer) {
        console.warn("[Stoic] Failed to initialize signer during session restore");
        return false;
      }

      // Create HTTP agent
      this.agent = HttpAgent.createSync({
        host: this.config?.hostUrl || "https://icp0.io",
        identity: this.identity,
        verifyQuerySignatures: this.config?.verifyQuerySignatures,
      });

      // Create signer agent
      this.signerAgent = SignerAgent.createSync({
        signer: this.signer,
        account: principal,
      });

      // Set up account
      const accountId = getAccountIdentifier(principal.toText()) || "";
      const subaccount = principalToSubAccount(principal);
      const account: StoicAccount = {
        id: accountId,
        displayName: "Stoic Account",
        principal: principal.toText(),
        subaccount: new Uint8Array(subaccount),
        type: AccountType.SESSION,
      };

      this.accounts = [account];

      // Verify the restored session works by making a test request
      try {
        
        // Double check that all components are still valid
        if (!this.identity || !this.agent || !this.signerAgent || !this.signer) {
          console.warn("[Stoic] Components lost during verification");
          throw new Error("Components lost during verification");
        }

        this.setState(AdapterState.READY);
        this.reconnectAttempts = 0;
        return true;
      } catch (error) {
        console.warn("[Stoic] Restored session verification failed:", error);
      }

      // If we get here, something went wrong during verification
      console.warn("[Stoic] Session restore failed, cleaning up");
      this.cleanupTransport();
      this.identity = null;
      this.agent = null;
      this.signerAgent = null;
      this.accounts = [];
      await this.delegationStorage.remove(StoicAdapter.STORAGE_KEY);
      this.setState(AdapterState.ERROR);
      return false;
    } catch (error) {
      console.warn("[Stoic] Error restoring session:", error);
      // Clean up any partial state
      this.cleanupTransport();
      this.identity = null;
      this.agent = null;
      this.signerAgent = null;
      this.accounts = [];
      this.setState(AdapterState.ERROR);
      throw error;
    }
  }

  private setState(newState: AdapterState) {
    this.state = newState;
    // Could emit an event here if needed
  }

  private async getDelegationChain(
    key: string
  ): Promise<DelegationChain | null> {
    const stored = await this.delegationStorage.get(key);
    if (!stored) return null;
    try {
      return DelegationChain.fromJSON(JSON.parse(stored));
    } catch (error) {
      console.error("Error parsing delegation chain:", error);
      return null;
    }
  }

  private async setDelegationChain(
    key: string,
    chain: DelegationChain
  ): Promise<void> {
    const sessionData = {
      sessionKey: this.sessionKey.toJSON(),
      delegationChain: chain.toJSON()
    };
    await this.delegationStorage.set(key, JSON.stringify(sessionData));
  }

  private async removeDelegationChain(key: string): Promise<void> {
    await this.delegationStorage.remove(key);
  }

  private setupWindowTracking() {
    if (this.transport) {
      const transportWindow = (this.transport as any)._window;
      if (transportWindow) {
        this.signerWindow = transportWindow;
      }
    }
  }

  private async initSigner(forceNewTransport: boolean = false): Promise<void> {
    console.debug("[Stoic] Initializing signer, forceNewTransport:", forceNewTransport);
    if (this.signer && !forceNewTransport) {
      console.debug("[Stoic] Signer already exists, skipping initialization");
      return;
    }

    try {
      // First try to detect if third-party cookies/storage are blocked
      const testKey = "stoic_storage_test";
      try {
        localStorage.setItem(testKey, "test");
        localStorage.removeItem(testKey);
        console.debug("[Stoic] Storage access test passed");
      } catch (e) {
        console.error("[Stoic] Storage access test failed:", e);
        throw new Error("Browser storage is not accessible. Please enable third-party cookies and storage access for stoicwallet.com");
      }

      // Log any existing identity data
      console.debug("[Stoic] Checking existing identity data:");
      console.debug("stoic_session:", localStorage.getItem("stoic_session"));
      console.debug("stoic-base-identity:", localStorage.getItem("stoic-base-identity"));
      console.debug("stoic-delegation-chain:", localStorage.getItem("stoic-delegation-chain"));
      console.debug("stoic-account-count:", localStorage.getItem("stoic-account-count"));

      console.debug("[Stoic] Creating new Stoic transport...");
      // Create transport with minimal options
      const transport = await StoicTransport.create({
        storage: {
          get: async (key: string) => {
            const value = localStorage.getItem(key);
            console.debug(`[Stoic] Getting storage key ${key}:`, value);
            return value;
          },
          set: async (key: string, value: string) => {
            console.debug(`[Stoic] Setting storage key ${key}:`, value);
            if (typeof value === 'object') {
              value = JSON.stringify(value);
            }
            localStorage.setItem(key, value);
          },
          remove: async (key: string) => {
            console.debug(`[Stoic] Removing storage key ${key}`);
            localStorage.removeItem(key);
          }
        }
      });
      console.debug("[Stoic] Transport created successfully");

      // Connect the transport first
      await transport.connection.connect();
      console.debug("[Stoic] Transport connected successfully");

      this.transport = transport;
      this.signer = new Signer({ transport }); // Create signer with connected transport
      console.debug("[Stoic] Transport and signer assigned");

      // Setup window tracking for focus management
      this.setupWindowTracking();
      console.debug("[Stoic] Window tracking setup complete");
    } catch (error) {
      console.error("[Stoic] Failed to initialize transport:", error);
      this.cleanupTransport();
      throw error;
    }
  }

  private async isDelegationReady(): Promise<boolean> {
    return (
      this.identity !== null &&
      this.agent !== null &&
      this.signerAgent !== null &&
      this.signerAgent.signer !== null
    );
  }

  private async waitForDelegation(timeoutMs: number = 5000): Promise<void> {
    const startTime = Date.now();
    while (Date.now() - startTime < timeoutMs) {
      if (await this.isDelegationReady()) {
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    throw new Error("Delegation initialization timeout");
  }

  private async createAnonymousActor<T>(canisterId: string, idl: any): Promise<ActorSubclass<T>> {
    return Actor.createActor<T>(idl, {
      agent: HttpAgent.createSync({
        host: this.config?.hostUrl || "https://icp0.io",
        verifyQuerySignatures: this.config?.verifyQuerySignatures,
      }),
      canisterId,
    });
  }

  async createActor<T>(
    canisterId: string,
    idlFactory: any,
    options: {
      requiresSigning?: boolean;
      anon: boolean;
    } = {
      requiresSigning: true,
      anon: false,
    }
  ): Promise<ActorSubclass<T>> {
    const { requiresSigning = true, anon = false } = options;
    try {
      if (!this.identity) {
        throw new Error("Identity not initialized");
      }

      // Wait for delegation to be ready if signing is required
      if (requiresSigning) {
        await this.waitForDelegation();
      }

      // check if canister id is in the delegation targets
      const inTargets = this.identity.getDelegation().delegations.some(
        (d) => d.delegation.targets?.some((p) => p.toText() === canisterId)
      );

      const isUndelegated = (inTargets && !requiresSigning) || (!inTargets && requiresSigning) || (!inTargets && !requiresSigning);
      const cacheKey = `${canisterId}-${inTargets}-${requiresSigning}-${isUndelegated}-${this.identity.getPrincipal().toText()}`;
      const cachedActor = this.actorCache.get(cacheKey);
      
      if (cachedActor) {
        return cachedActor;
      }

      if (!inTargets && !requiresSigning && anon) {
        const anonActor = await this.createAnonymousActor<T>(canisterId, idlFactory);
        this.actorCache.set(cacheKey, anonActor);
        return anonActor;
      }

      if ((inTargets && !requiresSigning) || (!inTargets && !requiresSigning)) {
        const actor = this.undelegatedActor<T>(canisterId, idlFactory);
        this.actorCache.set(cacheKey, actor);
        return actor;
      }

      // Create base actor with delegation identity for authenticated calls
      const actor = Actor.createActor<T>(idlFactory, {
        agent: this.signerAgent,
        canisterId,
      });

      if (requiresSigning) {
        if (!this.signerAgent) {
          throw new Error("No signer agent available. Please connect first.");
        }

        // Use signature queue for signing operations
        const proxiedActor = new Proxy(actor, {
          get: (target, prop) => {
            const original = target[prop];
            if (typeof original === "function") {
              return (...args: any[]) => {
                return this.signatureQueue.add(async () => {
                  // Verify delegation is still valid before each operation
                  if (!(await this.isDelegationReady())) {
                    throw new Error(
                      "Delegation no longer valid. Please reconnect."
                    );
                  }

                  const wrappedActor = Actor.createActor<T>(idlFactory, {
                    agent: this.signerAgent,
                    canisterId,
                  });
                  return wrappedActor[prop](...args);
                });
              };
            }
            return original;
          },
        });

        this.actorCache.set(cacheKey, proxiedActor);
        return proxiedActor;
      }

      return actor;
    } catch (error) {
      console.error("Error creating actor:", error);
      throw new Error(
        `Failed to create actor: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }

  async undelegatedActor<T>(
    canisterId: string,
    idlFactory: any
  ): Promise<ActorSubclass<T>> {
    const agent = await HttpAgent.create({
      shouldFetchRootKey: this.config.fetchRootKeys, // * local only
      identity: this.identity,
      host: this.config.hostUrl,
      verifyQuerySignatures: this.config.verifyQuerySignatures,
    });
    const actor = Actor.createActor<T>(idlFactory, {
      agent: agent,
      canisterId,
    });
    return actor;
  }

  async disconnect(): Promise<void> {
    this.cleanupTransport();
    this.identity = null;
    this.agent = null;
    this.signerAgent = null;
    this.accounts = [];
    await this.delegationStorage.remove(StoicAdapter.STORAGE_KEY);
    this.setState(AdapterState.READY);
  }

  async queueSignatureRequest<T>(request: () => Promise<T>): Promise<T> {
    return this.signatureQueue.add(request);
  }

  getState(): AdapterState {
    return this.state;
  }

  getAccounts(): StoicAccount[] {
    return this.accounts;
  }

  private async cleanupTransport() {
    if (this.signer) {
      try {
        this.signer.closeChannel();
      } catch (error) {
        console.debug("[Stoic] Error cleaning up signer:", error);
      }
      this.signer = null;
    }

    if (this.signerWindow && !this.signerWindow.closed) {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.signerWindow.close();
      } catch (error) {
        console.debug("[Stoic] Error closing signer window:", error);
      }
      this.signerWindow = null;
    }
    
    this.transport = null;
  }

  async isAvailable(): Promise<boolean> {
    return true; // Stoic is web-based, so it's always available
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
      this.config = config;
      
      // Add timeout to the entire connect operation
      return await Promise.race([
        this._connect(config),
        new Promise<never>((_, reject) => 
          setTimeout(() => {
            this.cleanupTransport();
            reject(new Error("Connection timeout"));
          }, 45000)
        ),
      ]);
    } catch (error) {
      this.cleanupTransport();
      this.setState(AdapterState.ERROR);
      throw error;
    }
  }

  unwrapResponse = <T>(response: any): T => {
    if ("error" in response) {
      throw new SignerError(response.error);
    }
    if ("result" in response) {
      return response.result as T;
    }
    throw new SignerError({
      code: 500,
      message: "Invalid response",
    });
  };

  private async _connect(config: Wallet.PNPConfig): Promise<Wallet.Account> {
    try {
      console.debug("[Stoic] Starting connection process with config:", config);
      
      // First try to restore session
      const restored = await this.tryRestoreSession();
      if (restored) {
        console.debug("[Stoic] Session restored successfully");
        return {
          owner: this.identity!.getPrincipal(),
          subaccount: principalToSubAccount(this.identity!.getPrincipal()),
          hasDelegation: true
        };
      }

      // Set state to loading
      this.setState(AdapterState.LOADING);
      console.debug("[Stoic] State set to LOADING");

      // Initialize signer with new transport
      await this.initSigner(true);
      console.debug("[Stoic] Signer initialized");

      // Get delegation chain
      const delegationChain = await this.signer!.delegation({
        publicKey: this.sessionKey!.getPublicKey().toDer(),
        targets: config.delegationTargets,
        maxTimeToLive: BigInt(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      });
      console.debug("[Stoic] Got delegation chain");

      // Create identity from delegation
      this.identity = DelegationIdentity.fromDelegation(
        this.sessionKey!,
        delegationChain
      );
      console.debug("[Stoic] Created identity from delegation");

      // Get principal
      const principal = this.identity.getPrincipal();
      console.debug("[Stoic] Got principal:", principal.toString());

      // Store session
      await this.setDelegationChain(
        StoicAdapter.STORAGE_KEY,
        delegationChain
      );
      console.debug("[Stoic] Stored session");

      // Set state to ready
      this.setState(AdapterState.READY);
      console.debug("[Stoic] State set to READY");

      return {
        owner: principal,
        subaccount: principalToSubAccount(principal),
        hasDelegation: true
      };
    } catch (error) {
      console.error("[Stoic] Error connecting to Stoic:", error);
      this.cleanupTransport();
      throw error;
    }
  }
}

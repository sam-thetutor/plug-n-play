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
import type { Wallet, Adapter } from "../types/index.d";
import { getAccountIdentifier } from "../utils/identifierUtils";
import nfidLogo from "../../assets/nfid.webp";
import { principalToSubAccount } from "@dfinity/utils";
import { PostMessageTransport } from "@slide-computer/signer-web";
import { SignerAgent } from "@slide-computer/signer-agent";
import { Signer } from "@slide-computer/signer";
import {
  type DelegationResponse,
  SignerError,
  toBase64,
  fromBase64,
} from "@slide-computer/signer";

// Account types for different session types
export enum AccountType {
  GLOBAL = "GLOBAL",
  SESSION = "SESSION",
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

export class NFIDAdapter implements Adapter.Interface {
  private static readonly STORAGE_KEY = "nfid_session";
  private static readonly MAX_RECONNECT_ATTEMPTS = 3;
  private static readonly CONNECTION_COOLDOWN = 1000; // 1 second cooldown
  private static readonly CONNECTION_TIMEOUT = 10000; // 10 seconds
  private static readonly TRANSPORT_CONFIG = {
    windowOpenerFeatures: "width=525,height=705",
    establishTimeout: 45000,
    disconnectTimeout: 35000,
    manageFocus: false,
  };

  private static readonly HIDDEN_TRANSPORT_CONFIG = {
    ...NFIDAdapter.TRANSPORT_CONFIG,
    manageFocus: false,
  };

  private agent: HttpAgent;
  private identity: DelegationIdentity | null = null;
  private delegationStorage: DelegationStorage;
  private signatureQueue: SignatureQueue;
  private signerWindow: Window | null = null;
  private state: AdapterState = AdapterState.READY;
  private accounts: NFIDAccount[] = [];
  private actorCache: Map<string, ActorSubclass<any>> = new Map();
  private sessionKey: Ed25519KeyIdentity | null = null;
  private signerAgent: SignerAgent<Signer>;
  private signer: Signer;

  static readonly logo: string = nfidLogo;
  name: string = "NFID";
  logo: string = NFIDAdapter.logo;
  identityProviderUrl: string =
    "https://nfid.one/authenticate/?applicationName=kong";
  url: string = "https://nfid.one/rpc";
  config: Wallet.PNPConfig;

  constructor() {
    this.url = "https://nfid.one/rpc";
    this.name = "NFID";
    this.logo = NFIDAdapter.logo;
    this.delegationStorage = new LocalDelegationStorage();
    this.signatureQueue = new SignatureQueue();
    // Initialize session asynchronously - don't generate key here
    this.signerAgent = SignerAgent.createSync({ 
      signer: new Signer({ transport: new PostMessageTransport({ url: this.url, ...NFIDAdapter.TRANSPORT_CONFIG }) }), 
      account: Principal.anonymous(), 
      agent: HttpAgent.createSync({ host: this.url }) 
    });
    this.signer = this.signerAgent.signer;
    this.agent = HttpAgent.createSync({ host: this.url });
  }



  private setState(newState: AdapterState) {
    this.state = newState;
    // Could emit an event here if needed
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


  private async cleanupTransport() {
    if (this.signer) {
      try {
        this.signer.closeChannel();
      } catch (error) {
        console.debug("[NFID] Error cleaning up signer:", error);
      }
      this.signer = null;
    }

    if (this.signerWindow && !this.signerWindow.closed) {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.signerWindow.close();
      } catch (error) {
        console.debug("[NFID] Error closing signer window:", error);
      }
      this.signerWindow = null;
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

  unwrapResponse = <T extends any>(response: any): T => {
    if ("error" in response) {
      throw new SignerError(response.error);
    }
    if ("result" in response) {
      return response.result;
    }
    throw new SignerError({
      code: 500,
      message: "Invalid response",
    });
  };

  private async connect(config: Wallet.PNPConfig): Promise<Wallet.Account> {
    this.config = config;

    try {
      this.setState(AdapterState.LOADING);

      // Force a new transport when explicitly connecting
      if (!this.signer) {
        throw new Error("Failed to initialize NFID signer");
      }

      this.setState(AdapterState.PROCESSING);

      if (!this.sessionKey) {
        this.sessionKey = Ed25519KeyIdentity.generate();
      }

      const response = await this.signer.sendRequest<any, DelegationResponse>({
        id: window.crypto.randomUUID(),
        jsonrpc: "2.0",
        method: "icrc34_delegation",
        params: {
          publicKey: toBase64(this.sessionKey.getPublicKey().toDer()),
          targets: config.delegationTargets?.map((p) => p.toText()),
          maxTimeToLive:
            this.config.delegationTimeout === undefined
              ? BigInt(24 * 60 * 60 * 1000 * 1000 * 1000 * 1000)
              : String(BigInt(Date.now()) + this.config.delegationTimeout),
        },
      });

      const result: any = this.unwrapResponse(response);
      const delegationChain = DelegationChain.fromDelegations(
        result.signerDelegation.map((delegation) => ({
          delegation: new Delegation(
            fromBase64(delegation.delegation.pubkey),
            BigInt(delegation.delegation.expiration),
            delegation.delegation.targets?.map((principal) =>
              Principal.fromText(principal)
            )
          ),
          signature: fromBase64(delegation.signature) as Signature,
        })),
        fromBase64(result.publicKey)
      );

      await this.setDelegationChain(
        NFIDAdapter.STORAGE_KEY,
        delegationChain
      );

      const delegationIdentity = DelegationIdentity.fromDelegation(
        this.sessionKey,
        delegationChain
      );

      this.signerAgent.replaceAccount(delegationIdentity.getPrincipal());

      if (config.fetchRootKeys) {
        await this.agent.fetchRootKey();
      }

      const principal = delegationIdentity.getPrincipal();

      if (principal.isAnonymous()) {
        throw new Error(
          "Failed to authenticate with NFID - got anonymous principal"
        );
      }

      this.signerAgent = SignerAgent.createSync({
        signer: this.signer,
        account: principal,
      });

      this.identity = delegationIdentity;

      const subaccount = principalToSubAccount(principal);
      const account: NFIDAccount = {
        id: principal.toText(),
        displayName: "NFID Account",
        principal: principal.toText(),
        subaccount: new Uint8Array(subaccount),
        type: AccountType.SESSION,
      };

      this.accounts = [account];

      try {
          if (this.identity && this.agent && this.signerAgent && this.signer) {
          this.setState(AdapterState.READY);
          console.debug("[NFID] Session established successfully");
          // Let the window close itself
          this.signerWindow = null;
          return {
            owner: principal,
            subaccount: principalToSubAccount(principal),
            hasDelegation: true,
          };
        }
      } catch (error) {
        console.error("[NFID] New session verification failed:", error);
      }

      // If we get here, something went wrong during verification
      console.error("[NFID] Session establishment failed, cleaning up");
      this.identity = null;
      this.agent = null;
      this.signerAgent = null;
      this.accounts = [];
      await this.delegationStorage.remove(NFIDAdapter.STORAGE_KEY);
      this.setState(AdapterState.ERROR);
      throw new Error("Failed to establish session");
    } catch (error) {
      console.error("Error connecting to NFID:", error);
      this.setState(AdapterState.ERROR);
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
    this.identity = null;
    this.agent = null;
    this.signerAgent = null;
    this.accounts = [];
    await this.delegationStorage.remove(NFIDAdapter.STORAGE_KEY);
    this.setState(AdapterState.READY);
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

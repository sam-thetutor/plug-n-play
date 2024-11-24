import { Principal } from "@dfinity/principal";
import {
  Actor,
  HttpAgent,
  type ActorSubclass,
  Signature,
} from "@dfinity/agent";
import {
  DelegationChain,
  DelegationIdentity,
  Ed25519KeyIdentity,
  Delegation,
} from "@dfinity/identity";
import type { Wallet, Adapter } from "../types/index";
import { getAccountIdentifier } from "../utils/identifierUtils";
import nfidLogo from "../../assets/nfid.webp";
import { principalToSubAccount } from "@dfinity/utils";
import { Signer } from "@slide-computer/signer";
import { PostMessageTransport } from "@slide-computer/signer-web";
import { SignerAgent } from "@slide-computer/signer-agent";
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
  private sessionKey: Ed25519KeyIdentity | null = null;
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
    this.sessionKey = Ed25519KeyIdentity.generate();
    // Try to restore session on init
    this.tryRestoreSession();
  }

  private setIdentityProviderUrl(isDev: boolean) {
    this.identityProviderUrl = `https://nfid.one/authenticate/?applicationName=${window.location.hostname}&left=${window.screen.width / 2 - 525 / 2}&top=${window.screen.height / 2 - 705 / 2}&toolbar=0&location=0&menubar=0&width=525&height=705`;
  }

  private async tryRestoreSession(): Promise<void> {
    try {
      const stored = await this.delegationStorage.get(NFIDAdapter.STORAGE_KEY);
      if (!stored) {
        console.warn("[NFID] No stored session found");
        return;
      }

      const { sessionKey, delegationChain } = JSON.parse(stored);

      // Restore session key
      this.sessionKey = Ed25519KeyIdentity.fromJSON(sessionKey);
      if (!this.sessionKey) {
        throw new Error("Failed to restore session key");
      }

      // Restore delegation chain and verify it's not expired
      const chain = DelegationChain.fromJSON(delegationChain);
      const now = BigInt(Date.now()) * BigInt(1000000); // Convert to nanoseconds

      // Check if any delegation in the chain is expired
      const isExpired = chain.delegations.some(
        (d) => d.delegation.expiration <= now
      );
      if (isExpired) {
        console.warn("[NFID] Stored delegation chain is expired");
        await this.delegationStorage.remove(NFIDAdapter.STORAGE_KEY);
        return;
      }

      // Create delegation identity
      this.identity = DelegationIdentity.fromDelegation(this.sessionKey, chain);

      if (!this.identity) {
        throw new Error("Failed to create delegation identity");
      }

      const principal = this.identity.getPrincipal();
      if (principal.isAnonymous()) {
        throw new Error("Restored identity is anonymous");
      }

      // Initialize signer and agents
      await this.initSigner();
      if (!this.signer) {
        throw new Error("Failed to initialize signer");
      }

      this.signerAgent = SignerAgent.createSync({
        signer: this.signer,
        account: principal,
      });

      // Create HTTP agent
      this.agent = HttpAgent.createSync({
        host: this.config?.hostUrl || "https://icp0.io",
        identity: this.identity,
        verifyQuerySignatures: this.config?.verifyQuerySignatures,
      });

      // Set up account
      const accountId = getAccountIdentifier(principal.toText()) || "";
      const subaccount = principalToSubAccount(principal);
      const account: NFIDAccount = {
        id: accountId,
        displayName: "NFID Account",
        principal: principal.toText(),
        subaccount: new Uint8Array(subaccount),
        type: AccountType.SESSION,
      };

      this.accounts = [account];
      this.setState(AdapterState.READY);
    } catch (error) {
      console.warn("[NFID Debug] Error restoring session:", error);
      // Clean up any partial state
      this.identity = null;
      this.agent = null;
      this.signerAgent = null;
      this.signer = null;
      this.accounts = [];
      await this.delegationStorage.remove(NFIDAdapter.STORAGE_KEY);
      this.setState(AdapterState.ERROR);
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
    await this.delegationStorage.set(key, JSON.stringify(chain.toJSON()));
  }

  private async removeDelegationChain(key: string): Promise<void> {
    await this.delegationStorage.remove(key);
  }

  private async initSigner(): Promise<void> {
    if (!this.signer) {
      try {
        const now = Date.now();
        if (now - this.lastConnectionAttempt < this.CONNECTION_COOLDOWN) {
          throw new Error("Please wait before attempting to connect again");
        }
        this.lastConnectionAttempt = now;

        const transport = new PostMessageTransport({
          url: this.url,
        });
        // TODO: Add derivationOrigin here (frontend canister id) only
        this.signer = new Signer({ transport });
      } catch (error) {
        console.error("Error initializing signer:", error);
        throw error;
      }
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

  async connect(config: Wallet.PNPConfig): Promise<Wallet.Account> {
    try {
      this.setState(AdapterState.LOADING);
      this.config = config;
      this.setIdentityProviderUrl(config.isDev || false);

      // If we already have an identity and it's not expired, just initialize the signer
      if (this.identity) {
        const principal = this.identity.getPrincipal();
        if (!principal.isAnonymous()) {
          await this.initSigner();
          if (this.signer) {
            this.signerAgent = SignerAgent.createSync({
              signer: this.signer,
              account: principal,
            });
            return {
              owner: principal,
              subaccount: null,
              hasDelegation: true,
            };
          }
        }
      }

      await this.initSigner();
      if (!this.signer) {
        throw new Error("Failed to initialize NFID signer");
      }

      this.setState(AdapterState.PROCESSING);

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

      await this.delegationStorage.set(
        NFIDAdapter.STORAGE_KEY,
        JSON.stringify({
          sessionKey: this.sessionKey.toJSON(),
          delegationChain: delegationChain.toJSON(),
        })
      );

      const delegationIdentity = DelegationIdentity.fromDelegation(
        this.sessionKey,
        delegationChain
      );

      this.agent = HttpAgent.createSync({
        host: config.hostUrl,
        identity: delegationIdentity,
        verifyQuerySignatures: config.verifyQuerySignatures,
      });

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
      this.setState(AdapterState.READY);

      return {
        owner: principal,
        subaccount: null,
        hasDelegation: true,
      };
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

  async createActor<T>(
    canisterId: string,
    idlFactory: any,
    options: {
      requiresSigning?: boolean;
    } = {
      requiresSigning: true,
    }
  ): Promise<ActorSubclass<T>> {
    const { requiresSigning = true } = options;
    try {
      if (!this.identity) {
        throw new Error("Identity not initialized");
      }

      // Wait for delegation to be ready if signing is required
      if (requiresSigning) {
        await this.waitForDelegation();
      }

      // Ensure we have delegation targets configured
      if (!this.config?.delegationTargets) {
        throw new Error("Delegation targets not configured");
      }

      // check if canister id is in the delegation targets
      const inTargets = this.identity.getDelegation().delegations.some(
        (d) => d.delegation.targets?.some((p) => p.toText() === canisterId)
      );

      const isUndelegated = (inTargets && !requiresSigning) || (!inTargets && requiresSigning) || (!inTargets && !requiresSigning);
      const cacheKey = `${canisterId}${requiresSigning ? "-signed" : ""}${isUndelegated ? "-undelegated" : ""}`;
      const cachedActor = this.actorCache.get(cacheKey);
      
      if (cachedActor) {
        // Verify delegation is still valid before returning cached actor
        if (!isUndelegated && requiresSigning && !(await this.isDelegationReady())) {
          this.actorCache.delete(cacheKey);
        } else {
          return cachedActor as ActorSubclass<T>;
        }
      }

      if (isUndelegated) {
        const actor = this.undelegatedActor<T>(canisterId, idlFactory);
        this.actorCache.set(cacheKey, actor);
        return actor;
      }

      // Create base actor with delegation identity for authenticated calls
      const actor = Actor.createActor<T>(idlFactory, {
        agent: this.agent,
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

      this.actorCache.set(cacheKey, actor);
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
      verifyQuerySignatures: false,
    });
    const actor = Actor.createActor<T>(idlFactory, {
      agent: agent,
      canisterId,
    });
    return actor;
  }

  async disconnect(): Promise<void> {
    try {
      this.setState(AdapterState.PROCESSING);
      if (this.signer) {
        await this.signer.closeChannel();
        this.signer = null;
      }
      // Clean up stored session
      await this.delegationStorage.remove(NFIDAdapter.STORAGE_KEY);
      this.signatureQueue.clear();
      this.identity = null;
      this.agent = null;
      this.signerAgent = null;
      this.accounts = [];
      this.actorCache.clear();
      this.setState(AdapterState.READY);
    } catch (error) {
      console.error("Error disconnecting from NFID:", error);
      this.setState(AdapterState.ERROR);
      throw error;
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

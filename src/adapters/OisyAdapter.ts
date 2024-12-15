import { Principal } from "@dfinity/principal";
import {
  Actor,
  HttpAgent,
  type ActorSubclass,
} from "@dfinity/agent";
import type { Wallet, Adapter } from "../types/index";
import { getAccountIdentifier } from "../utils/identifierUtils";
import oisyLogo from "../../assets/oisy_logo.webp";
import { principalToSubAccount } from "@dfinity/utils";
import { PostMessageTransport } from "@slide-computer/signer-web";
import { SignerAgent } from "@slide-computer/signer-agent";
import { Signer } from "@slide-computer/signer";

export enum AccountType {
  GLOBAL = "GLOBAL",
  SESSION = "SESSION",
}

export interface OisyAccount {
  id: string;
  displayName: string;
  principal: string;
  subaccount: Uint8Array;
  type: AccountType;
}

export class OisyAdapter implements Adapter.Interface {
  private static readonly TRANSPORT_CONFIG = {
    windowOpenerFeatures: "width=525,height=705",
    establishTimeout: 45000,
    disconnectTimeout: 35000,
  };

  private signer: Signer | null = null;
  private agent: HttpAgent | SignerAgent<any> | null = null;
  private signerAgent: SignerAgent<any> | null = null;
  private accounts: OisyAccount[] = [];
  private transport: PostMessageTransport | null = null;
  private connectionPromise: Promise<void> | null = null;
  private isProcessing: boolean = false;
  private requestQueue: Array<() => Promise<any>> = [];
  private isProcessingRequest: boolean = false;
  private static readonly REQUEST_TIMEOUT = 30000; // 30 seconds
  private static readonly OPERATION_LOCK_TIMEOUT = 10000; // 10 seconds
  private operationLock: Promise<void> | null = null;

  static readonly logo: string = oisyLogo;
  name: string = "Oisy";
  logo: string = OisyAdapter.logo;
  url: string = "https://oisy.com/sign";
  config: Wallet.PNPConfig;

  constructor() {
    this.url = "https://oisy.com/sign";
    this.name = "Oisy";
    this.logo = OisyAdapter.logo;
  }

  async isAvailable(): Promise<boolean> {
    return true; // Oisy is web-based
  }

  async isConnected(): Promise<boolean> {
    return this.agent !== null && this.signer !== null;
  }

  async getPrincipal(): Promise<Principal> {
    if (!this.signerAgent) {
      throw new Error("Not connected");
    }
    return this.signerAgent.getPrincipal();
  }

  async getAccountId(): Promise<string> {
    const principal = await this.getPrincipal();
    return getAccountIdentifier(principal.toText()) || "";
  }

  async connect(config: Wallet.PNPConfig): Promise<Wallet.Account> {
    if (this.connectionPromise) {
      return this.connectionPromise.then(async () => ({
        owner: await this.getPrincipal(),
        subaccount: principalToSubAccount(await this.getPrincipal()),
        hasDelegation: false,
      }));
    }

    const releaseLock = await this.acquireLock();
    try {
      await this.disconnect();

      this.isProcessing = true;
      this.config = config;
      
      this.connectionPromise = (async () => {
        this.transport = new PostMessageTransport({
          url: this.url,
          ...OisyAdapter.TRANSPORT_CONFIG,
        });

        this.signer = new Signer({ transport: this.transport });

        await new Promise(resolve => setTimeout(resolve, 500));
        
        console.debug('[Oisy] Permissions:', await this.signer.permissions());

        const accounts = await this.signer.accounts();
        if (!accounts || accounts.length === 0) {
          throw new Error("No accounts returned from Oisy");
        }

        const principal = accounts[0].owner;
        if (principal.isAnonymous()) {
          throw new Error("Failed to authenticate with Oisy - got anonymous principal");
        }

        this.signerAgent = SignerAgent.createSync({
          signer: this.signer,
          account: principal,
        });

        this.agent = HttpAgent.createSync({
          host: config.hostUrl || "https://icp0.io",
          verifyQuerySignatures: config.verifyQuerySignatures,
        });

        if (config.fetchRootKeys) {
          await this.agent.fetchRootKey();
          await this.signerAgent.fetchRootKey();
        }

        this.accounts = accounts.map(acc => ({
          id: acc.owner.toText(),
          displayName: `Oisy Account ${acc.owner.toText().slice(0, 8)}...`,
          principal: acc.owner.toText(),
          subaccount: new Uint8Array(principalToSubAccount(acc.owner)),
          type: AccountType.SESSION,
        }));
      })();

      await this.connectionPromise;
      
      const principal = await this.getPrincipal();
      return {
        owner: principal,
        subaccount: principalToSubAccount(principal),
        hasDelegation: false,
      };

    } catch (error) {
      console.error("[Oisy] Connection error:", error);
      await this.disconnect();
      throw error;
    } finally {
      this.isProcessing = false;
      this.connectionPromise = null;
      releaseLock();
    }
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

    if (anon === true) {
      return this.createAnonymousActor<T>(canisterId, idlFactory);
    }

    if (!this.signerAgent) {
      throw new Error("No signer agent available. Please connect first.");
    }

    const releaseLock = await this.acquireLock();
    try {
      const actor = Actor.createActor<T>(idlFactory, {
        agent: this.signerAgent,
        canisterId,
      });
      return actor;
    } finally {
      releaseLock();
    }
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

  async disconnect(): Promise<void> {
    this.requestQueue = [];
    this.isProcessingRequest = false;

    if (this.isProcessing) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    if (this.signer) {
      try {
        await new Promise(resolve => setTimeout(resolve, 200));
        this.signer.closeChannel();
      } catch (error) {
        console.debug("[Oisy] Error cleaning up signer:", error);
      }
      this.signer = null;
    }

    if (this.transport) {
      this.transport = null;
    }

    this.agent = null;
    this.signerAgent = null;
    this.accounts = [];
    this.connectionPromise = null;
    this.isProcessing = false;
  }

  getAccounts(): OisyAccount[] {
    return this.accounts;
  }

  private async processQueue() {
    if (this.isProcessingRequest) return;
    
    while (this.requestQueue.length > 0) {
      this.isProcessingRequest = true;
      const request = this.requestQueue.shift();
      
      if (request) {
        try {
          await Promise.race([
            request(),
            new Promise((_, reject) => 
              setTimeout(() => reject(new Error("Request timeout")), OisyAdapter.REQUEST_TIMEOUT)
            )
          ]);
          // Add small delay between requests
          await new Promise(resolve => setTimeout(resolve, 100));
        } catch (error) {
          console.error("[Oisy] Error processing request:", error);
        }
      }
    }
    
    this.isProcessingRequest = false;
  }

  private async acquireLock(): Promise<() => void> {
    while (this.operationLock) {
      try {
        await this.operationLock;
      } catch {
        // Ignore errors from previous operations
      }
    }

    let releaseLock: () => void;
    this.operationLock = new Promise<void>((resolve) => {
      releaseLock = () => {
        this.operationLock = null;
        resolve();
      };
    });

    setTimeout(() => {
      if (this.operationLock) {
        console.warn("[Oisy] Operation lock timeout - forcing release");
        releaseLock!();
      }
    }, OisyAdapter.OPERATION_LOCK_TIMEOUT);

    return releaseLock!;
  }
}
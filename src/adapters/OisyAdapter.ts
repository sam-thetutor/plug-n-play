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
  private signerAgent: SignerAgent<Signer>;
  private accounts: OisyAccount[] = [];
  private transport: PostMessageTransport | null = null;
  private connectionPromise: Promise<void> | null = null;
  private isProcessing: boolean = false;
  private requestQueue: Array<() => Promise<any>> = [];
  private isProcessingRequest: boolean = false;
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
    this.signerAgent = SignerAgent.createSync({ 
      signer: new Signer({ transport: new PostMessageTransport({ url: this.url, ...OisyAdapter.TRANSPORT_CONFIG }) }), 
      account: Principal.anonymous(), 
      agent: HttpAgent.createSync({ host: this.url }) 
    });
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
    try {
      const accounts = await this.signerAgent.signer.accounts();
      if (!accounts || accounts.length === 0) {
        throw new Error("No accounts returned from Oisy");
      }

      const principal = accounts[0].owner;
      if (principal.isAnonymous()) {
        throw new Error("Failed to authenticate with Oisy - got anonymous principal");
      }

      this.signerAgent.replaceAccount(principal);

      if (config.fetchRootKeys) {
        await this.signerAgent.fetchRootKey();
      }

      this.accounts = accounts.map(acc => ({
        id: acc.owner.toText(),
        displayName: `Oisy Account ${acc.owner.toText().slice(0, 8)}...`,
        principal: acc.owner.toText(),
        subaccount: new Uint8Array(principalToSubAccount(acc.owner)),
        type: AccountType.SESSION,
      }));

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
    try {
      const actor = Actor.createActor<T>(idlFactory, {
        agent: this.signerAgent,
        canisterId,
      });
      return actor;
    } catch (error) {
      console.error("[Oisy] Actor creation error:", error);
      throw error;
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
}

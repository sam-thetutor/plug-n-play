import { Principal } from "@dfinity/principal";
import {
  Actor,
  HttpAgent,
  type ActorSubclass,
  AnonymousIdentity,
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
  private actorCache: Map<string, ActorSubclass<any>> = new Map();
  private transport: PostMessageTransport | null = null;

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
    try {
      this.config = config;
      
      this.transport = new PostMessageTransport({
        url: this.url
      });

      this.signer = new Signer({ transport: this.transport });

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

      // Create HTTP agent
      this.agent = HttpAgent.createSync({
        host: config.hostUrl || "https://icp0.io",
        verifyQuerySignatures: config.verifyQuerySignatures,
      });

      if (config.fetchRootKeys) {
        await this.agent.fetchRootKey();
        await this.signerAgent.fetchRootKey();
      }

      this.accounts = accounts.map(acc => {
        return {
          id: acc.owner.toText(),
          displayName: `Oisy Account ${acc.owner.toText().slice(0, 8)}...`,
          principal: acc.owner.toText(),
          subaccount: new Uint8Array(principalToSubAccount(acc.owner)),
          type: AccountType.SESSION,
        };
      });

      return {
        owner: principal,
        subaccount: principalToSubAccount(principal),
        hasDelegation: false,
      };

    } catch (error) {
      console.error("[Oisy] Connection error:", error);
      await this.disconnect();
      throw error;
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

    if (anon) {
      return this.createAnonymousActor<T>(canisterId, idlFactory);
    }

    if (!this.signerAgent) {
      throw new Error("No signer agent available. Please connect first.");
    }

    return Actor.createActor<T>(idlFactory, {
      agent: this.signerAgent,
      canisterId,
    });
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
    if (this.signer) {
      try {
        this.signer.closeChannel();
      } catch (error) {
        console.debug("[Oisy] Error cleaning up signer:", error);
      }
    }

    if (this.transport) {
      this.transport = null;
    }

    this.signer = null;
    this.agent = null;
    this.signerAgent = null;
    this.accounts = [];
  }

  getAccounts(): OisyAccount[] {
    return this.accounts;
  }
}
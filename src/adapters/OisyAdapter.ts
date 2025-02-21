import { Principal } from "@dfinity/principal";
import { Actor, HttpAgent, type ActorSubclass } from "@dfinity/agent";
import { type Wallet, Adapter } from "../types/index.d";
import oisyLogo from "../../assets/oisy_logo.webp";
import { PostMessageTransport } from "@slide-computer/signer-web";
import { SignerAgent } from "@slide-computer/signer-agent";
import { Signer } from "@slide-computer/signer";
import { AccountIdentifier } from "@dfinity/ledger-icp";

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
    disconnectTimeout: 45000,
    statusPollingRate: 500,
  };

  private signer: Signer | null = null;
  private agent: HttpAgent | SignerAgent<any> | null = null;
  private signerAgent: SignerAgent<Signer>;
  private accounts: OisyAccount[] = [];

  static readonly logo: string = oisyLogo;
  name: string = "Oisy Wallet";
  logo: string = OisyAdapter.logo;
  url: string = "https://oisy.com/sign";
  config: Wallet.PNPConfig;
  public info: Adapter.Info = { id: "oisy", icon: OisyAdapter.logo, name: "Oisy Wallet", adapter: OisyAdapter };
  state: Adapter.Status = Adapter.Status.INIT;

  constructor() {
    this.url = "https://oisy.com/sign";
    this.name = "Oisy Wallet";
    this.logo = OisyAdapter.logo;
    this.agent = HttpAgent.createSync({ host: this.url });
    this.signerAgent = SignerAgent.createSync({
      signer: new Signer({
        transport: new PostMessageTransport({
          url: this.url,
          ...OisyAdapter.TRANSPORT_CONFIG,
        }),
      }),
      account: Principal.anonymous(),
      agent: this.agent,
    });
    this.state = Adapter.Status.READY;
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
    return AccountIdentifier.fromPrincipal({
      principal: await this.getPrincipal(),
      subAccount: undefined, // This will use the default subaccount
    }).toHex();
  }

  async connect(config: Wallet.PNPConfig): Promise<Wallet.Account> {
    try {
      this.setState(Adapter.Status.CONNECTING);
      const accounts = await this.signerAgent.signer.accounts();
      if (!accounts || accounts.length === 0) {
        this.disconnect();
        throw new Error("No accounts returned from Oisy");
      }

      const principal = accounts[0].owner;
      if (principal.isAnonymous()) {
        this.setState(Adapter.Status.READY);
        throw new Error(
          "Failed to authenticate with Oisy - got anonymous principal",
        );
      }

      this.signerAgent.replaceAccount(principal);

      if (config.fetchRootKeys) {
        await this.signerAgent.fetchRootKey();
      }

      this.accounts = accounts.map((acc) => ({
        id: acc.owner.toText(),
        displayName: `Oisy Account ${acc.owner.toText().slice(0, 8)}...`,
        principal: acc.owner.toText(),
        subaccount: AccountIdentifier.fromPrincipal({
          principal: acc.owner,
          subAccount: undefined, // This will use the default subaccount
        }).toUint8Array(),
        type: AccountType.SESSION,
      }));

      this.setState(Adapter.Status.CONNECTED);
      return {
        owner: principal,
        subaccount: AccountIdentifier.fromPrincipal({
          principal,
          subAccount: undefined, // This will use the default subaccount
        }).toUint8Array(),
        hasDelegation: false,
      };
    } catch (error) {
      console.error("[Oisy] Connection error:", error);
      await this.disconnect();
      throw error;
    }
  }

  private setState(newState: Adapter.Status) {
    this.state = newState;
  }

  getState(): Adapter.Status {
    return this.state;
  }

  createActor<T>(
    canisterId: string,
    idlFactory: any,
    options: {
      requiresSigning?: boolean;
      anon: boolean;
    } = {
      requiresSigning: true,
      anon: false,
    },
  ): ActorSubclass<T> {
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

  async disconnect(): Promise<void> {
    this.setState(Adapter.Status.DISCONNECTING);
    if (this.signer || this.signerAgent) {
      try {
        console.log("Closing channel");
        this.signer?.closeChannel();
        this.signerAgent?.signer?.closeChannel();
      } catch (error) {
        console.debug("[Oisy] Error cleaning up signer:", error);
      }
      this.signer = null;
    }

    this.agent = null;
    this.signerAgent = null;
    this.accounts = [];
    this.setState(Adapter.Status.DISCONNECTED);
  }

  getAccounts(): OisyAccount[] {
    return this.accounts;
  }
}

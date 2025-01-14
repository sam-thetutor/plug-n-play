// src/adapters/PlugAdapter.ts
import { Principal } from "@dfinity/principal";
import {
  Actor,
  HttpAgent,
  type ActorSubclass,
} from "@dfinity/agent";
import {
  DelegationChain,
  DelegationIdentity,
  Ed25519KeyIdentity,
} from "@dfinity/identity";
import type { Wallet, Adapter } from "../types/index.d";
import plugLogo from "../../assets/plug.webp";
import { PlugTransport } from "@slide-computer/signer-transport-plug";
import { SignerAgent } from "@slide-computer/signer-agent";
import { Signer } from "@slide-computer/signer";
import {
  SignerError,
} from "@slide-computer/signer";
import { AccountIdentifier } from "@dfinity/ledger-icp";

// Account types for different session types
export enum AccountType {
  GLOBAL = "GLOBAL",
  SESSION = "SESSION",
}

export interface PlugAccount {
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

// State management for adapter
export enum AdapterState {
  READY = "READY",
  LOADING = "LOADING",
  PROCESSING = "PROCESSING",
  ERROR = "ERROR",
}

export class PlugAdapter implements Adapter.Interface {
  private static readonly STORAGE_KEY = "plug_session";
  private static readonly TRANSPORT_CONFIG = {
    windowOpenerFeatures: "width=525,height=705",
    establishTimeout: 45000,
    disconnectTimeout: 35000,
    manageFocus: false,
  };

  private agent: HttpAgent;
  private identity: DelegationIdentity | null = null;
  private delegationStorage: DelegationStorage;
  private state: AdapterState = AdapterState.READY;
  private accounts: PlugAccount[] = [];
  private actorCache: Map<string, ActorSubclass<any>> = new Map();
  private sessionKey: Ed25519KeyIdentity | null = null;
  private signerAgent: SignerAgent<Signer>;
  private signer: Signer;

  static readonly logo: string = plugLogo;
  name: string = "Plug";
  logo: string = PlugAdapter.logo;
  url: string = "https://plug.one/rpc";
  config: Wallet.PNPConfig;

  constructor() {
    this.url = "https://plug.one/rpc";
    this.name = "Plug";
    this.logo = PlugAdapter.logo;
    this.delegationStorage = new LocalDelegationStorage();

    // Initialize transport and signer like in exampleWTN.ts
    const transport = new PlugTransport();
    this.signer = new Signer({ transport });
    this.agent = HttpAgent.createSync({ host: this.url });
    this.signerAgent = SignerAgent.createSync({
      signer: this.signer,
      account: Principal.anonymous(),
      agent: this.agent,
    });
  }

  private setState(newState: AdapterState) {
    this.state = newState;
  }

  private async setDelegationChain(
    key: string,
    chain: DelegationChain
  ): Promise<void> {
    const sessionData = {
      sessionKey: this.sessionKey,
      delegationChain: chain,
    };
    await this.delegationStorage.set(key, JSON.stringify(sessionData));
  }

  async isAvailable(): Promise<boolean> {
    return true; // Plug is web-based, so it's always available
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
    return AccountIdentifier.fromPrincipal({
      principal: await this.getPrincipal(),
      subAccount: undefined  // This will use the default subaccount
    }).toHex();
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
    this.config = config;

    try {
      this.setState(AdapterState.LOADING);

      // Request permissions like in exampleWTN.ts
      await this.signer.requestPermissions([
        { method: "icrc27_accounts" },
        {
          method: "icrc34_delegation",
          targets: config.delegationTargets?.map((p) => p.toText()),
        },
        { method: "icrc49_call_canister" },
      ]);

      // Get accounts
      const accounts = await this.signer.accounts();
      const principal = accounts[0].owner;
      this.setState(AdapterState.PROCESSING);

      if (!this.sessionKey) {
        this.sessionKey = Ed25519KeyIdentity.generate();
      }

      const delegationChain = await this.signer.delegation({
        publicKey: this.sessionKey.getPublicKey().toDer(),
        targets: config.delegationTargets,
        maxTimeToLive:
          this.config.delegationTimeout === undefined
            ? BigInt(24 * 60 * 60 * 1000 * 1000 * 1000 * 1000)
            : BigInt(Date.now()) + this.config.delegationTimeout,
      });

      await this.setDelegationChain(PlugAdapter.STORAGE_KEY, delegationChain);

      const delegationIdentity = DelegationIdentity.fromDelegation(
        this.sessionKey,
        delegationChain
      );

      this.signerAgent = SignerAgent.createSync({
        signer: this.signer,
        account: principal,
      });

      this.identity = delegationIdentity;

      const account: PlugAccount = {
        id: principal.toText(),
        displayName: "Plug Account",
        principal: principal.toText(),
        subaccount: AccountIdentifier.fromPrincipal({
          principal,
          subAccount: undefined  // This will use the default subaccount
        }).toUint8Array(),
        type: AccountType.SESSION,
      };

      this.accounts = [account];

      try {
        if (this.identity && this.agent && this.signerAgent && this.signer) {
          this.setState(AdapterState.READY);
          return {
            owner: principal,
            subaccount: AccountIdentifier.fromPrincipal({
              principal,
              subAccount: undefined  // This will use the default subaccount
            }).toUint8Array(),
            hasDelegation: true,
          };
        }
      } catch (error) {
        console.error("[Plug] New session verification failed:", error);
      }

      // If we get here, something went wrong during verification
      console.error("[Plug] Session establishment failed, cleaning up");
      this.identity = null;
      this.agent = null;
      this.signerAgent = null;
      this.accounts = [];
      await this.delegationStorage.remove(PlugAdapter.STORAGE_KEY);
      this.setState(AdapterState.ERROR);
      throw new Error("Failed to establish session");
    } catch (error) {
      console.error("Error connecting to Plug:", error);
      this.setState(AdapterState.ERROR);
      throw error;
    }
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
    }
  ): ActorSubclass<T> {
    const { requiresSigning = true, anon = false } = options;
    try {
      // check if canister id is in the delegation targets
      const inTargets = this.identity
        .getDelegation()
        .delegations.some((d) =>
          d.delegation.targets?.some((p) => p.toText() === canisterId)
        );

      const isUndelegated =
        (inTargets && !requiresSigning) ||
        (!inTargets && requiresSigning) ||
        (!inTargets && !requiresSigning);
      const cacheKey = `${canisterId}-${inTargets}-${requiresSigning}-${isUndelegated}-${this.identity
        .getPrincipal()
        .toText()}`;
      const cachedActor = this.actorCache.get(cacheKey);

      if (cachedActor) {
        return cachedActor;
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
          this.disconnect();
          throw new Error("No signer agent available. Please connect first.");
        }

        const finalActor = Actor.createActor<T>(idlFactory, {
          agent: this.signerAgent,
          canisterId,
        });

        this.actorCache.set(cacheKey, finalActor);
        return finalActor;
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

  undelegatedActor<T>(canisterId: string, idlFactory: any): ActorSubclass<T> {
    const agent = HttpAgent.createSync({
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
    await this.delegationStorage.remove(PlugAdapter.STORAGE_KEY);
    this.setState(AdapterState.READY);
  }

  getState(): AdapterState {
    return this.state;
  }

  getAccounts(): PlugAccount[] {
    return this.accounts;
  }
}

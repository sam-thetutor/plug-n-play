import { Principal } from "@dfinity/principal";
import { Actor, HttpAgent, type ActorSubclass } from "@dfinity/agent";
import {
  DelegationIdentity,
  Ed25519KeyIdentity,
  JsonnableDelegationChain
} from "@dfinity/identity";
import { type Wallet, Adapter } from "../types/index.d";
import nfidLogo from "../../assets/nfid.webp";
import { PostMessageTransport } from "@slide-computer/signer-web";
import { SignerAgent } from "@slide-computer/signer-agent";
import { Signer } from "@slide-computer/signer";
import { SignerError } from "@slide-computer/signer";
import {
  DelegationStorage,
  LocalDelegationStorage,
} from "../storage/DelegationStorage";
import { AccountIdentifier } from "@dfinity/ledger-icp";

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

export class NFIDAdapter implements Adapter.Interface {
  private static readonly STORAGE_KEY = "nfid_session";
  private static readonly TRANSPORT_CONFIG = {
    windowOpenerFeatures: "width=525,height=705",
    establishTimeout: 45000,
    disconnectTimeout: 45000,
    statusPollingRate: 500,
    detectNonClickEstablishment: false, // Allow connection outside of click handler for auto-connect
  };

  private agent: HttpAgent;
  private identity: DelegationIdentity | null = null;
  private delegationStorage: DelegationStorage;
  private state: Adapter.Status = Adapter.Status.INIT;
  private actorCache: Map<string, ActorSubclass<any>> = new Map();
  private sessionKey: Ed25519KeyIdentity | null = null;
  private signerAgent: SignerAgent<Signer>;
  private signer: Signer;
  private transport: PostMessageTransport;

  static readonly logo: string = nfidLogo;
  name: string = "NFID";
  logo: string = NFIDAdapter.logo;
  url: string = "https://nfid.one/rpc";
  config: Wallet.PNPConfig;
  public info: Adapter.Info = { id: "nfid", icon: NFIDAdapter.logo, name: "NFID", adapter: NFIDAdapter };

  constructor() {
    this.url = "https://nfid.one/rpc";
    this.name = "NFID";
    this.logo = NFIDAdapter.logo;
    this.delegationStorage = new LocalDelegationStorage();
    
    // Create transport with non-click detection disabled for auto-connect support
    this.transport = new PostMessageTransport({
      url: this.url,
      ...NFIDAdapter.TRANSPORT_CONFIG,
    });
    
    // Create signer with the transport
    this.signer = new Signer({
      transport: this.transport
    });
    
    this.signerAgent = SignerAgent.createSync({
      signer: this.signer,
      account: Principal.anonymous(),
      agent: HttpAgent.createSync({ host: this.url }),
    });
    
    this.agent = HttpAgent.createSync({ host: this.url });
    this.setState(Adapter.Status.READY);
  }

  private setState(newState: Adapter.Status) {
    this.state = newState;
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
    return AccountIdentifier.fromPrincipal({
      principal: this.identity.getPrincipal(),
      subAccount: undefined, // This will use the default subaccount
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
    this.setState(Adapter.Status.CONNECTING);
    this.config = config;

    try {
      // Explicitly open the channel first - this ensures we're in a click handler context
      await this.signer.openChannel();
      
      // Check if we have a stored delegation first
      const stored = await this.delegationStorage.get(NFIDAdapter.STORAGE_KEY);
      
      if (stored) {
        try {
          // Attempt to restore from storage
          this.sessionKey = typeof stored.sessionKey === 'string' 
            ? Ed25519KeyIdentity.fromJSON(stored.sessionKey)
            : stored.sessionKey as Ed25519KeyIdentity;
            
          // Convert from JsonnableDelegationChain to DelegationChain
          const delegationIdentity = DelegationIdentity.fromDelegation(
            this.sessionKey,
            this.unwrapDelegation(stored.delegationChain)
          );
          
          // Verify the delegation hasn't expired
          const isValid = delegationIdentity.getDelegation().delegations.every(
            d => d.delegation.expiration > BigInt(Date.now()) * BigInt(1000000)
          );
          
          if (isValid) {
            this.identity = delegationIdentity;
            const principal = this.identity.getPrincipal();
            
            // If delegation is valid, initialize using stored delegation
            this.signerAgent = SignerAgent.createSync({
              signer: this.signer,
              account: principal,
            });
            
            if (config.fetchRootKeys) {
              await this.agent.fetchRootKey();
            }
            
            this.setState(Adapter.Status.CONNECTED);
            
            return {
              owner: principal,
              subaccount: AccountIdentifier.fromPrincipal({
                principal,
                subAccount: undefined,
              }).toUint8Array(),
              hasDelegation: true,
            };
          }
        } catch (error) {
          console.warn("Failed to restore session, creating new one:", error);
          // Clear the invalid stored session
          await this.delegationStorage.remove(NFIDAdapter.STORAGE_KEY);
        }
      }
      
      // If we get here, either there was no stored session or it was invalid
      // Generate a new session key if needed
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

      const delegationIdentity = DelegationIdentity.fromDelegation(
        this.sessionKey,
        delegationChain,
      );

      this.signerAgent.replaceAccount(delegationIdentity.getPrincipal());

      if (config.fetchRootKeys) {
        await this.agent.fetchRootKey();
      }

      const principal = delegationIdentity.getPrincipal();

      if (principal.isAnonymous()) {
        this.setState(Adapter.Status.READY);
        throw new Error(
          "Failed to authenticate with NFID - got anonymous principal",
        );
      }

      this.signerAgent = SignerAgent.createSync({
        signer: this.signer,
        account: principal,
      });

      this.identity = delegationIdentity;

      try {
        if (this.identity && this.agent && this.signerAgent && this.signer) {
          // Save the delegation for future reconnection
          // Save delegation to storage for future sessions
          await this.delegationStorage.set(NFIDAdapter.STORAGE_KEY, {
            sessionKey: this.sessionKey.toJSON(),
            delegationChain: this.wrapDelegation(delegationChain)
          });
          
          this.setState(Adapter.Status.CONNECTED);
          return {
            owner: principal,
            subaccount: AccountIdentifier.fromPrincipal({
              principal,
              subAccount: undefined, // This will use the default subaccount
            }).toUint8Array(),
            hasDelegation: true,
          };
        }
      } catch (error) {
        this.disconnect();
        this.setState(Adapter.Status.READY);
        console.error("[NFID] New session verification failed:", error);
      }

      // If we get here, something went wrong during verification
      this.identity = null;
      this.agent = null;
      this.signerAgent = null;
      await this.delegationStorage.remove(NFIDAdapter.STORAGE_KEY);
      this.disconnect();
      throw new Error("Failed to establish session");
    } catch (error) {
      console.error("Error connecting to NFID:", error);
      this.setState(Adapter.Status.READY);
      throw error;
    }
  }

  // Helper method to convert DelegationChain to JsonnableDelegationChain
  private wrapDelegation(chain: any): JsonnableDelegationChain {
    return {
      delegations: chain.delegations.map((d: any) => ({
        signature: JSON.stringify(Array.from(new Uint8Array(d.signature))),
        delegation: {
          pubkey: JSON.stringify(Array.from(new Uint8Array(d.delegation.pubkey))),
          expiration: d.delegation.expiration.toString(),
          targets: d.delegation.targets?.map((t: any) => t.toText())
        }
      })),
      publicKey: JSON.stringify(Array.from(new Uint8Array(this.sessionKey.getPublicKey().toDer())))
    };
  }
  
  // Helper method to convert JsonnableDelegationChain to DelegationChain
  private unwrapDelegation(jsonChain: JsonnableDelegationChain): any {
    return {
      delegations: jsonChain.delegations.map((d: any) => ({
        signature: new Uint8Array(typeof d.signature === 'string' ? JSON.parse(d.signature) : d.signature),
        delegation: {
          pubkey: new Uint8Array(typeof d.delegation.pubkey === 'string' ? JSON.parse(d.delegation.pubkey) : d.delegation.pubkey),
          expiration: BigInt(d.delegation.expiration),
          targets: d.delegation.targets?.map((t: string) => Principal.fromText(t))
        }
      })),
      publicKey: new Uint8Array(typeof jsonChain.publicKey === 'string' ? JSON.parse(jsonChain.publicKey) : jsonChain.publicKey)
    };
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
    const { requiresSigning = true, anon = false } = options;
    try {
      // check if canister id is in the delegation targets
      const inTargets = this.identity
        .getDelegation()
        .delegations.some((d) =>
          d.delegation.targets?.some((p) => p.toText() === canisterId),
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
        }`,
      );
    }
  }

  undelegatedActor<T>(canisterId: string, idlFactory: any): ActorSubclass<T> {
    const agent = HttpAgent.createSync({
      identity: this.identity,
      host: this.config.hostUrl,
      verifyQuerySignatures: this.config?.dfxNetwork != "local",
    });
    const actor = Actor.createActor<T>(idlFactory, {
      agent: agent,
      canisterId,
    });
    return actor;
  }

  async disconnect(): Promise<void> {
    this.setState(Adapter.Status.DISCONNECTING);
    this.identity = null;
    this.agent = null;
    this.signerAgent = null;
    await this.delegationStorage.remove(NFIDAdapter.STORAGE_KEY);
    this.setState(Adapter.Status.DISCONNECTED);
  }

  getState(): Adapter.Status {
    return this.state;
  }
}

// src/adapters/PlugAdapter.ts

import {
  Actor,
  HttpAgent,
  type ActorSubclass,
  Signature,
} from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import {
  DelegationChain,
  DelegationIdentity,
  ECDSAKeyIdentity,
  Delegation,
} from "@dfinity/identity";
import type { Adapter, Wallet } from "../types";
import { getAccountIdentifier } from "../utils/identifierUtils";
import plugLogo from "../../assets/plug.jpg";
import { Signer } from "@slide-computer/signer";
import { SignerAgent } from "@slide-computer/signer-agent";
import { IDL } from "@dfinity/candid";
import { PlugTransport } from "@slide-computer/signer-transport-plug";

export class PlugAdapter implements Adapter.Interface {
  static readonly logo: string = plugLogo;
  name: string = "Plug";
  logo: string = PlugAdapter.logo;
  url: string = "https://plugwallet.ooo/";

  private signer: Signer | null = null;
  private agent: HttpAgent | SignerAgent<any> | null = null;
  private signerAgent: SignerAgent<any> | null = null;
  private identity: DelegationIdentity | null = null;
  private sessionKey: ECDSAKeyIdentity | null = null;
  private activeActors: Map<string, { actor: ActorSubclass<any>; idl: any }> = new Map();
  private transport: PlugTransport | null = null;

  constructor() {
    this.initPlug();
  }

  private async initPlug(): Promise<void> {
    if (typeof window !== "undefined" && window.ic?.plug) {
      // Generate the session key first
      this.sessionKey = await ECDSAKeyIdentity.generate();
      
      this.transport = new PlugTransport();
      this.signer = new Signer({
        transport: this.transport,
      });
    }
  }

  private async ensurePlugConnection(): Promise<void> {
    if (!this.transport || !this.signer) {
      await this.initPlug();
      if (!this.transport || !this.signer) {
        throw new Error("Failed to initialize Plug transport");
      }
    }

    try {
      if (!window.ic?.plug) {
        throw new Error("Plug wallet not found");
      }
      const isConnected = await window.ic.plug.isConnected();
      if (!isConnected) {
        throw new Error("Plug wallet is not connected");
      }
    } catch (error) {
      console.warn("Plug connection error:", error);
      throw new Error(`Plug connection failed: ${error}`);
    }
  }

  async isAvailable(): Promise<boolean> {
    return typeof window !== "undefined" && !!window.ic?.plug;
  }

  async isConnected(): Promise<boolean> {
    return await window.ic?.plug?.isConnected() || false;
  }

  async connect(config: Wallet.AdapterConfig): Promise<Wallet.Account> {
    if (!await this.isAvailable()) {
      window.open(this.url, "_blank");
      throw new Error("Plug wallet extension not detected. Please install Plug first.");
    }

    try {
      await this.ensurePlugConnection();

      const isConnected = await window.ic!.plug!.isConnected();
      if (!isConnected) {
        const connected = await window.ic!.plug!.requestConnect({
          whitelist: config.whitelist || [],
          host: config.hostUrl || "https://icp0.io",
          timeout: config.timeout || 1000 * 60 * 2,
        });
        if (!connected) throw new Error("User rejected the connection request");
      }

      if (!this.signer || !this.sessionKey) {
        throw new Error("Signer or session key not initialized");
      }

      // Create delegation chain
      const delegationChain = await this.signer.delegation({
        publicKey: Array.from(new Uint8Array(await crypto.subtle.exportKey(
          'raw',
          this.sessionKey.getKeyPair().publicKey
        ))),
        targets: [],
        maxTimeToLive: BigInt(24 * 60 * 60 * 1000 * 1000 * 1000), // 24 hours
      });

      // Create delegation identity
      this.identity = DelegationIdentity.fromDelegation(
        this.sessionKey,
        delegationChain,
      );

      // Create agent with delegation identity
      this.agent = HttpAgent.createSync({
        host: config.hostUrl || "https://mainnet.dfinity.network",
        identity: this.identity,
      });

      if (config.hostUrl?.includes("localhost") || config.hostUrl?.includes("127.0.0.1")) {
        await this.agent.fetchRootKey().catch(console.error);
      }

      const principal = await this.agent.getPrincipal();
      if (principal.isAnonymous()) {
        throw new Error("Failed to authenticate with Plug - got anonymous principal");
      }

      // Create signer agent
      this.signerAgent = SignerAgent.createSync({
        signer: this.signer,
        account: principal,
      });

      return {
        owner: principal,
        subaccount: null,
      };
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(`Plug connection failed: ${e.message}`);
      }
      throw new Error("Unknown error occurred while connecting to Plug");
    }
  }

  async disconnect(): Promise<void> {
    if (window.ic?.plug?.disconnect) {
      await window.ic.plug.disconnect();
      this.signer = null;
      this.agent = null;
      this.signerAgent = null;
      this.identity = null;
      this.transport = null;
      this.activeActors.clear();
    }
  }

  async getPrincipal(): Promise<Principal> {
    if (!this.identity) {
      throw new Error("Not connected to Plug");
    }
    return this.identity.getPrincipal();
  }

  async getAccountId(): Promise<string | null> {
    const principal = await this.getPrincipal();
    return getAccountIdentifier(principal.toString()) || null;
  }

  private isTabClosedError(error: unknown): boolean {
    return (
      error instanceof Error && 
      (error.message === "Tab closed" || 
       error.message === "Plug channel is closed" ||
       error.message === "Plug wallet cannot be found")
    );
  }

  async createActor<T>(
    canisterId: string,
    idlFactory: any,
    options: { requiresSigning?: boolean } = {}
  ): Promise<ActorSubclass<T>> {
    if (!this.agent) {
      throw new Error("Agent not initialized");
    }

    const existingActor = this.activeActors.get(canisterId);
    if (existingActor && existingActor.idl === idlFactory) {
      return existingActor.actor as ActorSubclass<T>;
    }

    const agent = options.requiresSigning ? this.signerAgent : this.agent;
    if (!agent) {
      throw new Error("Required agent not initialized");
    }

    const retryOptions = {
      maxAttempts: 3,
      delayMs: 1000,
      shouldRetry: this.isTabClosedError,
    };

    const createActorWithRetry = async () => {
      for (let attempt = 1; attempt <= retryOptions.maxAttempts; attempt++) {
        try {
          // Ensure Plug connection before creating actor
          await this.ensurePlugConnection();

          const actor = Actor.createActor(idlFactory, {
            agent,
            canisterId,
          });

          // Create a proxy to wrap the actor with retry logic
          const proxy = new Proxy(actor, {
            get: (target: any, prop: string) => {
              if (typeof target[prop] === 'function') {
                return async (...args: any[]) => {
                  for (let attempt = 1; attempt <= retryOptions.maxAttempts; attempt++) {
                    try {
                      // Ensure Plug connection before each method call
                      await this.ensurePlugConnection();
                      return await target[prop](...args);
                    } catch (error) {
                      if (!retryOptions.shouldRetry(error) || attempt === retryOptions.maxAttempts) {
                        throw error;
                      }
                      console.warn(`Actor method ${String(prop)} failed, ${retryOptions.maxAttempts - attempt} retries left:`, error);
                      await new Promise(resolve => setTimeout(resolve, retryOptions.delayMs));
                    }
                  }
                };
              }
              return target[prop];
            }
          });

          this.activeActors.set(canisterId, { actor: proxy, idl: idlFactory });
          return proxy;
        } catch (error) {
          if (!retryOptions.shouldRetry(error) || attempt === retryOptions.maxAttempts) {
            throw error;
          }
          console.warn(`Actor creation failed, ${retryOptions.maxAttempts - attempt} retries left:`, error);
          await new Promise(resolve => setTimeout(resolve, retryOptions.delayMs));
        }
      }
      throw new Error(`Failed to create actor after ${retryOptions.maxAttempts} attempts`);
    };

    return await createActorWithRetry();
  }

  async executeActorMethod<T>(
    actor: ActorSubclass<any>,
    methodName: string,
    args: any[],
    maxRetries = 3
  ): Promise<T> {
    const retryDelay = 1000;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        // Ensure Plug connection before executing method
        await this.ensurePlugConnection();
        // @ts-ignore - we know the method exists because it's passed in
        return await actor[methodName](...args);
      } catch (error) {
        if (!this.isTabClosedError(error) || attempt === maxRetries - 1) {
          throw error;
        }

        console.warn(`Actor method ${methodName} failed, ${maxRetries - attempt - 1} retries left:`, error);
        await new Promise(resolve => setTimeout(resolve, retryDelay));
      }
    }

    throw new Error(`Failed to execute actor method ${methodName} after ${maxRetries} attempts`);
  }
}
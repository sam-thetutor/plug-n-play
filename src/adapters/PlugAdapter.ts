// src/adapters/PlugAdapter.ts

import { HttpAgent, type ActorSubclass } from "@dfinity/agent";
import type { Adapter, Wallet } from "../types";
import plugLogo from "../../assets/plug.webp";
import { principalToSubAccount } from "@dfinity/utils";
import { Principal } from "@dfinity/principal";

declare global {
  interface Window {
    ic: {
      plug: {
        agent: HttpAgent;
        principalId: string;
        accountId: string;
        requestConnect: (params?: {
          whitelist?: string[];
          host?: string;
          timeout?: number;
          onConnectionUpdate?: () => void;
        }) => Promise<string>;
        isConnected: () => Promise<boolean>;
        createActor: <T>(params: { canisterId: string; interfaceFactory: any }) => Promise<ActorSubclass<T>>;
        disconnect: () => Promise<void>;
      };
    };
  }
}

export class PlugAdapter implements Adapter.Interface {
  static readonly logo: string = plugLogo;
  name: string = "Plug";
  logo: string = PlugAdapter.logo;
  url: string = "https://plugwallet.ooo/";
  private activeActors: Map<string, { actor: ActorSubclass<any>; idl: any }> = new Map();

  async isAvailable(): Promise<boolean> {
    return typeof window !== "undefined" && !!window.ic?.plug;
  }

  async isConnected(): Promise<boolean> {
    if (!(await this.isAvailable())) return false;
    return window.ic.plug.isConnected();
  }

  async connect(config: Wallet.PNPConfig): Promise<Wallet.Account> {
    if (!(await this.isAvailable())) {
      window.open(this.url, "_blank");
      throw new Error("Plug wallet extension not detected. Please install Plug first.");
    }

    try {
      await window.ic.plug.requestConnect({
        whitelist: config.delegationTargets?.map(p => p.toText()),
        host: config.hostUrl,
        timeout: Number(config.timeout),
      });

      const principal = Principal.fromText(window.ic.plug.principalId);
      
      return {
        owner: principal,
        subaccount: principalToSubAccount(principal),
      };
    } catch (error) {
      console.error("Connection error:", error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    if (window.ic?.plug?.disconnect) {
      await window.ic.plug.disconnect();
    }
    this.activeActors.clear();
  }

  async getPrincipal(): Promise<Principal> {
    if (!(await this.isConnected())) {
      throw new Error("Not connected to Plug wallet");
    }
    return Principal.fromText(window.ic.plug.principalId);
  }

  async getAccountId(): Promise<string> {
    if (!(await this.isConnected())) {
      throw new Error("Not connected to Plug wallet");
    }
    return window.ic.plug.accountId;
  }

  async createActor<T>(
    canisterId: string,
    idlFactory: any,
  ): Promise<ActorSubclass<T>> {
    if (!(await this.isConnected())) {
      throw new Error("Not connected to Plug wallet");
    }

    const actor = await window.ic.plug.createActor<T>({
      canisterId,
      interfaceFactory: idlFactory,
    });

    this.activeActors.set(canisterId, { actor, idl: idlFactory });
    return actor;
  }
}
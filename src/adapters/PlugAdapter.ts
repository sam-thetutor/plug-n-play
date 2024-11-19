// src/adapters/PlugAdapter.ts

import { Actor, HttpAgent, type ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import type { Adapter, Wallet } from "../types";
import plugLogo from "../../assets/plug.jpg";

export class PlugAdapter implements Adapter.Interface {
  static readonly logo: string = plugLogo;
  name: string = "Plug";
  logo: string = PlugAdapter.logo;
  url: string = "https://plugwallet.ooo/";

  private readyState:
    | "NotDetected"
    | "Installed"
    | "Connected"
    | "Disconnected" = "NotDetected";

  constructor() {
    this.initPlug();
  }

  // Initialize Plug and set readyState accordingly
  private initPlug(): void {
    if (typeof window !== "undefined" && window.ic && window.ic.plug) {
      this.readyState = "Installed";
      window.ic.plug.isConnected().then((connected) => {
        this.readyState = connected ? "Connected" : "Installed";
      });
    } else {
      this.readyState = "NotDetected";
    }
  }

  // Check if the wallet is available
  async isAvailable(): Promise<boolean> {
    return this.readyState !== "NotDetected";
  }

  // Check if the wallet is connected
  async isConnected(): Promise<boolean> {
    return window.ic?.plug?.isConnected() || false;
  }

  // Connect to Plug wallet
  async connect(config: Wallet.AdapterConfig): Promise<Wallet.Account> {
    if (this.readyState === "NotDetected") {
      window.open(this.url, "_blank");
      throw new Error("Plug wallet is not available");
    }

    const isConnected = await window.ic!.plug!.isConnected();

    if (!isConnected) {
      try {
        console.log("Connecting to Plug wallet...", config);
        const connected = await window.ic!.plug!.requestConnect({
          whitelist: config.whitelist || [],
          host: config.hostUrl || "https://mainnet.dfinity.network",
          timeout: config.timeout || 1000 * 60 * 60 * 24 * 7,
          onConnectionUpdate: this.handleConnectionUpdate.bind(this),
        });
        if (!connected) {
          throw new Error("User declined the connection request");
        }
        this.readyState = "Connected";
      } catch (e) {
        console.error("Failed to connect to Plug wallet:", e);
        throw e;
      }
    } else {
      this.readyState = "Connected";
    }

    const principal = await this.getPrincipal();
    const accountId = await this.getAccountId();

    return {
      owner: principal,
      subaccount: null,
    };
  }

  // Disconnect from Plug wallet
  async disconnect(): Promise<void> {
    if (window.ic && window.ic.plug && window.ic.plug.disconnect) {
      await window.ic.plug.disconnect();
      this.readyState = "Disconnected";
    } else {
      throw new Error("Plug wallet is not available");
    }
  }

  // Get the user's principal ID
  async getPrincipal(): Promise<Principal> {
    if (window.ic && window.ic.plug && window.ic.plug.principalId) {
      return Principal.fromText(window.ic.plug.principalId);
    } else {
      throw new Error("Plug wallet is not available or principal ID is unavailable");
    }
  }

  // Get the user's account ID
  async getAccountId(): Promise<string> {
    if (window.ic && window.ic.plug && window.ic.plug.accountId) {
      return window.ic.plug.accountId;
    } else {
      throw new Error("Plug wallet is not available or account ID is unavailable");
    }
  }

  // Create an actor for interacting with a canister
  async createActor<T>(canisterId: string, idl: any): Promise<ActorSubclass<T>> {
    if (!window.ic?.plug) {
      throw new Error("Plug wallet is not available");
    }
    return window.ic.plug.createActor({
      canisterId,
      interfaceFactory: idl,
    });
  }

  // Handle connection updates
  private handleConnectionUpdate(status: { sessionExpired: boolean }): void {
    if (status.sessionExpired) {
      this.readyState = "Disconnected";
    }
  }
}
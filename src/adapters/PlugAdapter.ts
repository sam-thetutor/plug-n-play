// src/adapters/PlugAdapter.ts

import { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { Adapter, Wallet } from "../types";
import plugLogo from "../../assets/plug.webp";

export class PlugAdapter implements Adapter.Interface {
  static logo: string = plugLogo;
  logo: string = PlugAdapter.logo;
  name: string = "Plug";
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

  // Connect to Plug wallet
  async connect(config: Wallet.AdapterConfig): Promise<Wallet.Account> {
    const isConnected = await window.ic!.plug!.isConnected();

    if (!isConnected) {
      try {
        console.log("Connecting to Plug wallet...", config);
        const connected = await window.ic!.plug!.requestConnect({
          whitelist: config.whitelist || [],
          host: config.hostUrl || "https://mainnet.dfinity.network",
          timeout: config.timeout || 1000 * 60 * 60 * 24 * 7,
          onConnectionUpdate: () => console.log("Plug connection updated"),
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

  // Create an actor to interact with a canister
  async createActor<T>(
    canisterId: string,
    idlFactory: any
  ): Promise<ActorSubclass<T>> {
    if (!canisterId || !idlFactory) {
      throw new Error("Canister ID and IDL factory are required");
    }

    if (window.ic && window.ic.plug && window.ic.plug.createActor) {
      try {
        const actor = await window.ic.plug.createActor<T>({
          canisterId,
          interfaceFactory: idlFactory,
        });
        return actor;
      } catch (e) {
        console.error("Failed to create actor through Plug:", e);
        throw e;
      }
    } else {
      throw new Error("Plug wallet is not available or not connected");
    }
  }

  async isConnected(): Promise<boolean> {
    if (window.ic && window.ic.plug && window.ic.plug.isConnected) {
      return await window.ic.plug.isConnected();
    } else {
      return false;
    }
  }

  // Handle connection updates (e.g., account switching)
  private handleConnectionUpdate(): void {
    if (window.ic?.plug?.principalId && window.ic?.plug?.accountId) {
      const { principalId, accountId } = window.ic.plug;
      this.readyState = "Connected";
      
      // Emit an event that can be listened to by the application
      const event = new CustomEvent("plug-connection-update", {
        detail: {
          principalId,
          accountId,
          readyState: this.readyState
        }
      });
      window.dispatchEvent(event);
    } else {
      this.readyState = "Disconnected";
      
      // Emit disconnection event
      const event = new CustomEvent("plug-connection-update", {
        detail: {
          principalId: null,
          accountId: null,
          readyState: this.readyState
        }
      });
      window.dispatchEvent(event);
    }
    
    console.log("Plug connection updated:", {
      readyState: this.readyState,
      principalId: window.ic?.plug?.principalId,
      accountId: window.ic?.plug?.accountId
    });
  }
}
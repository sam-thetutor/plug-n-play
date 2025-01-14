// src/adapters/Adapter.template.ts

import type { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import type { Adapter, Wallet } from "../types";

/**
 * Template adapter class that implements the Adapter.Interface
 */
export class TemplateAdapter implements Adapter.Interface {
  static readonly logo: string = "";
  name: string = "Template";
  logo: string = "";
  url: string = "";
  readyState: string;

  constructor() {
    this.url = '';
    this.name = 'Template';
    this.logo = 'path_to_template_logo.svg';
    this.readyState = "NotDetected";
  }

  async isAvailable(): Promise<boolean> {
    return false;
  }

  async connect(config: Wallet.AdapterConfig): Promise<Wallet.Account> {
    return {
      subaccount: null,
      owner: null
    }
  }

  async disconnect(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async getPrincipal(): Promise<Principal | null> {
    throw new Error("Method not implemented.");
  }

  async getAccountId(): Promise<string | null> {
    throw new Error("Method not implemented.");
  }

  async isConnected(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  createActor<T>(canisterId: string, idl: any): ActorSubclass<T> {
    throw new Error("Method not implemented.");
  }

  createAnonymousActor<T>(canisterId: string, idl: any, options?: { requiresSigning?: boolean }): ActorSubclass<T> {
    throw new Error("Method not implemented.");
  }
}

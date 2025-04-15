// Path: src/adapters/index.ts
// Import adapters
import { IIAdapter } from "./IIAdapter";
import { PlugAdapter } from "./PlugAdapter";
import { NFIDAdapter } from "./NFIDAdapter";
import { OisyAdapter } from "./OisyAdapter";
import { Adapter } from "../../types";

// Common default config for adapters
const commonDefaultConfig = {
  timeout: 1000 * 60 * 60 * 24, // 1 day
  enabled: true,
};

// Define the default adapters map, now including default config
const ICAdapters: Record<string, Adapter.Info> = {
  'ii': {
    id: 'ii',
    walletName: IIAdapter.walletName,
    logo: IIAdapter.logo,
    adapter: IIAdapter,
    config: {
      ...commonDefaultConfig,
      identityProvider: "https://identity.ic0.app",
    },
  },
  'plug': {
    id: 'plug',
    walletName: PlugAdapter.walletName,
    logo: PlugAdapter.logo, 
    adapter: PlugAdapter,
    config: {
      ...commonDefaultConfig,
      identityProvider: "https://identity.ic0.app",
    },
  },
  'nfid': {
    id: 'nfid',
    walletName: NFIDAdapter.walletName,
    logo: NFIDAdapter.logo, 
    adapter: NFIDAdapter,
    config: {
      ...commonDefaultConfig,
      rpcUrl: "https://nfid.one/rpc", // Default NFID RPC endpoint
    },
  },
  'oisy': {
    id: 'oisy',
    walletName: OisyAdapter.walletName,
    logo: OisyAdapter.logo, 
    adapter: OisyAdapter,
    config: {
      ...commonDefaultConfig,
      signerUrl: "https://oisy.com/sign", // Default Oisy sign URL
    },
  },
};

export { IIAdapter, PlugAdapter, NFIDAdapter, OisyAdapter, ICAdapters };

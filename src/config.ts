import { Adapter } from './types';
import { ICAdapters } from './adapters/ic'; // Removed defaultICAdapterConfigs import

// Main configuration for the PNP library
export interface PNPConfig {
  dfxNetwork?: string; // Useful for determining dev environment
  hostUrl?: string;
  delegationTimeout?: bigint;
  delegationTargets?: string[];
  derivationOrigin?: string;
  fetchRootKeys?: boolean; // Common agent setting
  verifyQuerySignatures?: boolean; // Common agent setting
  localStorageKey?: string;
  adapters?: Record<string, Partial<Adapter.Info>>; // Use Partial as user might only override some fields
}

// Default values for the main configuration
// Update the type to reflect that 'adapters' now holds config and removed adapterConfigs
export const defaultPNPConfig: Required<Omit<PNPConfig, 'adapters'>> & {
  adapters: Record<string, Adapter.Info> // 'adapters' now holds the complete, configured adapter info
} = {
  // Global defaults
  hostUrl: "https://icp0.io",
  delegationTimeout: BigInt(24 * 60 * 60 * 1000 * 1000 * 1000), // 1 day
  delegationTargets: [],
  derivationOrigin: typeof window !== 'undefined' ? window.location.origin : "", // Default to browser origin
  dfxNetwork: "ic",
  fetchRootKeys: false,
  verifyQuerySignatures: true,
  localStorageKey: "pnpConnectedWallet",
  adapters: {
    ...ICAdapters,
  },
};

// Define the return type more explicitly to include adapters (which now contain config)
export type FullPNPConfig = typeof defaultPNPConfig;

// Function to create a complete configuration object by merging user input with defaults
export function createPNPConfig(config: PNPConfig = {}): FullPNPConfig { 
  // Merge the main adapters map (user overrides defaults including config)
  const mergedAdapters = { ...defaultPNPConfig.adapters };
  if (config.adapters) {
    for (const adapterId in config.adapters) {
        const defaultAdapterInfo = defaultPNPConfig.adapters[adapterId] || {}; // Default adapter info (includes config)
        mergedAdapters[adapterId] = {
          ...defaultAdapterInfo,
          ...(config.adapters[adapterId]), // User overrides for this adapter (can include config)
        } as Adapter.Info; // Assert type here to satisfy the linter
    }
  }

  // Determine isDev based on dfxNetwork if not explicitly provided
  const hostUrl = config.hostUrl ?? "https://icp0.io";
  const derivationOrigin = config.derivationOrigin ?? "http://localhost:5173";

  // Merge global settings and include the merged adapters map
  const mergedConfig: FullPNPConfig = {
    ...defaultPNPConfig,
    ...config, // User's global settings override defaults
    hostUrl,
    derivationOrigin,
    adapters: mergedAdapters, // Use the merged adapters map (now includes config)
  };
  
  // Adjust default II identity provider based on isDev, now checking mergedAdapters
  if (mergedAdapters.ii) {
      mergedAdapters.ii.config.identityProvider =  mergedAdapters.ii.config.identityProvider ?? "https://identity.ic0.app";
  }

  return mergedConfig;
}

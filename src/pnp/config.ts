/* New file: Configuration for PNP */
export interface PNPConfig {
  enabledWallets?: string[];
  localStorageKey?: string;
}

export interface WalletConfig {
  hostUrl?: string;
  identityProvider?: string;
  timeout?: number;
  verifyQuerySignatures?: boolean;
  delegationTimeout?: bigint;
  delegationTargets?: string[];
  derivationOrigin?: string;
}

export const defaultPNPConfig: Required<PNPConfig> = {
  enabledWallets: ['internet-identity', 'nfid', 'oisy', 'plug'],
  localStorageKey: "pnpConnectedWallet"
};

export const defaultWalletConfig: Required<WalletConfig> = {
  hostUrl: "http://localhost:4943",
  identityProvider: "https://identity.ic0.app",
  timeout: 1000 * 60 * 60 * 24, // 1 day in milliseconds
  verifyQuerySignatures: false,
  delegationTimeout: BigInt(24 * 60 * 60 * 1000 * 1000 * 1000),
  delegationTargets: [],
  derivationOrigin: "https://identity.ic0.app",
};

export function createPNPConfig(config: PNPConfig = {}): Required<PNPConfig> {
  return { ...defaultPNPConfig, ...config };
}

export function createWalletConfig(config: WalletConfig = {}): Required<WalletConfig> {
  return { ...defaultWalletConfig, ...config };
}

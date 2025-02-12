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
export declare const defaultPNPConfig: Required<PNPConfig>;
export declare const defaultWalletConfig: Required<WalletConfig>;
export declare function createPNPConfig(config?: PNPConfig): Required<PNPConfig>;
export declare function createWalletConfig(config?: WalletConfig): Required<WalletConfig>;

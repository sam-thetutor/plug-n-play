import { Adapter } from './types';
export interface PNPConfig {
    dfxNetwork?: string;
    hostUrl?: string;
    delegationTimeout?: bigint;
    delegationTargets?: string[];
    derivationOrigin?: string;
    fetchRootKeys?: boolean;
    verifyQuerySignatures?: boolean;
    localStorageKey?: string;
    adapters?: Record<string, Partial<Adapter.Info>>;
}
export declare const defaultPNPConfig: Required<Omit<PNPConfig, 'adapters'>> & {
    adapters: Record<string, Adapter.Info>;
};
export type FullPNPConfig = typeof defaultPNPConfig;
export declare function createPNPConfig(config?: PNPConfig): FullPNPConfig;

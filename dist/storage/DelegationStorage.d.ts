import { Ed25519KeyIdentity, JsonnableEd25519KeyIdentity } from '@dfinity/identity/lib/cjs/identity/ed25519';
import { JsonnableDelegationChain } from '@dfinity/identity';
export interface DelegationStorage {
    get(key: string): Promise<{
        sessionKey: JsonnableEd25519KeyIdentity | Ed25519KeyIdentity | JsonnableEd25519KeyIdentity;
        delegationChain: JsonnableDelegationChain;
    } | null>;
    set(key: string, value: {
        sessionKey: JsonnableEd25519KeyIdentity | Ed25519KeyIdentity | JsonnableEd25519KeyIdentity;
        delegationChain: JsonnableDelegationChain;
    }): Promise<void>;
    remove(key: string): Promise<void>;
}
export declare class LocalDelegationStorage implements DelegationStorage {
    get(key: string): Promise<{
        sessionKey: JsonnableEd25519KeyIdentity | Ed25519KeyIdentity | JsonnableEd25519KeyIdentity;
        delegationChain: JsonnableDelegationChain;
    } | null>;
    set(key: string, value: {
        sessionKey: JsonnableEd25519KeyIdentity | Ed25519KeyIdentity | JsonnableEd25519KeyIdentity;
        delegationChain: JsonnableDelegationChain;
    }): Promise<void>;
    remove(key: string): Promise<void>;
}

import { Ed25519KeyIdentity, JsonnableEd25519KeyIdentity } from "@dfinity/identity/lib/cjs/identity/ed25519";
import { JsonnableDelegationChain } from "@dfinity/identity";

// Storage interface for delegation
export interface DelegationStorage {
  get(
    key: string
  ): Promise<{
    sessionKey: JsonnableEd25519KeyIdentity | Ed25519KeyIdentity | JsonnableEd25519KeyIdentity;
    delegationChain: JsonnableDelegationChain;
  } | null>;
  set(
    key: string,
    value: {
      sessionKey: JsonnableEd25519KeyIdentity | Ed25519KeyIdentity | JsonnableEd25519KeyIdentity;
      delegationChain: JsonnableDelegationChain;
    }
  ): Promise<void>;
  remove(key: string): Promise<void>;
}

// Local storage implementation
export class LocalDelegationStorage implements DelegationStorage {
  async get(
    key: string
  ): Promise<{
    sessionKey: JsonnableEd25519KeyIdentity | Ed25519KeyIdentity | JsonnableEd25519KeyIdentity;
    delegationChain: JsonnableDelegationChain;
  } | null> {
    const storedData = localStorage.getItem(key);
    if (!storedData) return null;
    return JSON.parse(storedData);
  }

  async set(
    key: string,
    value: {
      sessionKey: JsonnableEd25519KeyIdentity | Ed25519KeyIdentity | JsonnableEd25519KeyIdentity;
      delegationChain: JsonnableDelegationChain;
    }
  ): Promise<void> {
    localStorage.setItem(key, JSON.stringify(value));
  }

  async remove(key: string): Promise<void> {
    localStorage.removeItem(key);
  }
}

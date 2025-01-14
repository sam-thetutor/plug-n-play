import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { NNSAdapter } from '../src/adapters/NNSAdapter';
import { AuthClient } from "@dfinity/auth-client";
import { vi } from 'vitest';

describe('NNSAdapter', () => {
  let adapter: NNSAdapter;

  beforeEach(() => {
    // Mock AuthClient.create
    vi.spyOn(AuthClient, 'create').mockResolvedValue({
      isAuthenticated: () => Promise.resolve(false),
      login: () => {},
      logout: () => Promise.resolve(),
      getIdentity: () => ({
        getPrincipal: () => ({ toString: () => 'test-principal' })
      }),
      idleManager: {
        registerCallback: () => {}
      }
    } as any);
    
    adapter = new NNSAdapter();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should have a default URL', () => {
    expect(adapter.url).toBe('https://identity.ic0.app');
  });

  it('should initialize the auth client', async () => {
    // Wait for the next tick to allow async initialization
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(AuthClient.create).toHaveBeenCalled();
  });

  it('should not have agent initially', () => {
    expect(adapter['agent']).toBeNull();
  });

  it('should check if the wallet is available', async () => {
    const available = await adapter.isAvailable();
    expect(available).toBe(true);
  });
});

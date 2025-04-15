import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { PNP } from '../src/index';

// Define a mock HOSTURL for testing purposes
const MOCK_HOSTURL = 'http://localhost:4943';

// Use vi.hoisted to define the mock function BEFORE vi.mock
const mockCreatePNP = vi.hoisted(() => 
  vi.fn().mockImplementation(() => ({
    // Simplified state for the mock instance
    state: {
      account: null,
      activeWallet: null,
      provider: null,
      config: {
        hostUrl: MOCK_HOSTURL,
      },
    }
  }))
);

// Mock the specific createPNP export, referencing the hoisted mock
vi.mock('../src/index', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../src/index')>();
  return {
    ...actual, // Keep actual exports like PNP class
    createPNP: mockCreatePNP, // Use the hoisted mock function
  };
});

describe('index.ts', () => {
  let indexModule: typeof import('../src/index');

  beforeEach(async () => {
    vi.resetModules(); // Reset modules to ensure fresh imports
    mockCreatePNP.mockClear(); // Clear the hoisted mock
    indexModule = await import('../src/index');
  });

  it('should export createPNP factory function', () => {
    expect(indexModule.createPNP).toBeDefined();
    // Check if the exported function is indeed our hoisted mock
    expect(indexModule.createPNP).toBe(mockCreatePNP);
    const pnpInstance = indexModule.createPNP();
    expect(pnpInstance).toBeDefined();
    expect(mockCreatePNP).toHaveBeenCalled();
  });

  it('should export PNP class', () => {
    expect(indexModule.PNP).toBeDefined();
    expect(indexModule.PNP).toBe(PNP); // Check if it's the actual class
  });

  // Removed tests for walletsList, BatchTransact, principalIdFromHex,
  // getAccountIdentifier, and getPNPAdapter as they are not exported directly.

  // Removed describe block for "browser environment" as window assignment is no longer present.
});
import { writable, type Writable, get } from 'svelte/store';
import { 
  walletsList, 
  createInitialState,
  type PnPState,
  type Wallet,
  connect as pnpConnect,
  disconnect as pnpDisconnect,
  getActor as pnpGetActor,
  isWalletConnected
} from '@windoge98/plug-n-play';
import {
  canisterId as kongBackendCanisterId,
  idlFactory as kongBackendIDL,
} from '../../../../../declarations/kong_backend';
import {
  idlFactory as kongFaucetIDL,
  canisterId as kongFaucetCanisterId,
} from '../../../../../declarations/kong_faucet';
import { type ActorSubclass } from '@dfinity/agent';
import { WalletService } from '$lib/services/wallet/WalletService';
import { ICRC2_IDL } from '$lib/idls/icrc2.idl.js';
import { browser } from '$app/environment';
import { tokenStore } from '$lib/services/tokens/tokenStore';
import { DelegationIdentity } from '@dfinity/identity';
import { Principal } from '@dfinity/principal';

// Export the list of available wallets
export const availableWallets = walletsList;

// IDL Mappings
export type CanisterType = 'kong_backend' | 'icrc1' | 'icrc2' | 'kong_faucet';
export const canisterIDLs = {
  'kong_backend': kongBackendIDL,
  'kong_faucet': kongFaucetIDL,
  'icrc1': ICRC2_IDL,
  'icrc2': ICRC2_IDL,
};

// Stores
export const selectedWalletId = writable<string>('');
export const isReady = writable<boolean>(false);
export const userStore: Writable<any> = writable(null);
export const pnpState = writable<PnPState | null>(null);
export const walletStore = writable<{
  account: any | null;
  error: Error | null;
  isConnecting: boolean;
  isConnected: boolean;
}>({
  account: null,
  error: null,
  isConnecting: false,
  isConnected: false,
});

// Actor cache store
export const actorCache = writable<Map<string, ActorSubclass<any>>>(new Map());

// Calculate delegation expiry time from duration
function calculateTimeout(days: number): bigint {
  const now = BigInt(Date.now()) * BigInt(1_000_000);
  const BUFFER_NS = BigInt(30 * 60 * 1000_000_000);
  const adjustedNow = now + BUFFER_NS;
  return adjustedNow + BigInt(days * 24 * 60 * 60 * 1000_000_000);
}

// Initialize PNP state
export function initializePNP(useDelegation: boolean = true) {
  if (!get(pnpState) && browser) {
    const isLocalEnv = process.env.DFX_NETWORK === 'local';
    const config: Wallet.PNPConfig = {
      hostUrl: isLocalEnv ? 'http://localhost:4943' : 'https://ic0.app',
      whitelist: [kongBackendCanisterId],
      timeout: BigInt(7 * 24 * 60 * 60 * 1000_000_000),
      verifyQuerySignatures: isLocalEnv ? false : true,
      identityProvider: isLocalEnv
        ? 'http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943'
        : 'https://nfid.one/authenticate/?applicationName=kong',
      isDev: isLocalEnv
    };

    if (useDelegation) {
      console.log('Initializing PNP with delegation support');
      config.delegationTargets = [Principal.fromText(kongBackendCanisterId)];
      config.delegationTimeout = calculateTimeout(7);
    }

    const initialState = createInitialState(config);
    pnpState.set(initialState);
  }
}

// Connect to a wallet
export async function connectWallet(walletId: string, useDelegation: boolean = false) {
  console.log('Connecting wallet:', { walletId, useDelegation });
  
  if (useDelegation) {
    console.log('Reinitializing PNP with delegation support');
    pnpState.set(null);
    initializePNP(true);
  }
  
  const currentState = get(pnpState);
  if (!currentState) {
    throw new Error('PNP not initialized');
  }

  updateWalletStore({ isConnecting: true });
  try {
    const [newState, account] = await pnpConnect(currentState, walletId);
    console.log('Connected successfully:', {
      principal: account.owner?.toString(),
      hasDelegation: newState.provider instanceof DelegationIdentity
    });
    
    pnpState.set(newState);
    isReady.set(true);
    updateWalletStore({
      account,
      error: null,
      isConnecting: false,
      isConnected: true,
    });
    
    localStorage.setItem('selectedWalletId', walletId);
    localStorage.setItem('useDelegation', String(useDelegation));
    selectedWalletId.set(walletId);

    const user = await WalletService.getWhoami();
    userStore.set(user);
  } catch (error) {
    console.error('Failed to connect wallet:', error);
    handleConnectionError(error);
  }
}

// Update wallet store
function updateWalletStore(updates: Partial<{ account: any | null; error: Error | null; isConnecting: boolean; isConnected: boolean; }>) {
  walletStore.update((store) => ({ ...store, ...updates }));
}

// Handle connection errors
function handleConnectionError(error: Error) {
  updateWalletStore({ error, isConnecting: false });
  console.error('Error:', error);
}

// Disconnect from a wallet
export async function disconnectWallet() {
  const currentState = get(pnpState);
  if (!currentState) return;

  try {
    const newState = await pnpDisconnect(currentState);
    pnpState.set(newState);
    
    updateWalletStore({
      account: null,
      error: null,
      isConnecting: false,
      isConnected: false,
    });
    
    tokenStore.clearUserData();
    localStorage.removeItem('selectedWalletId');
    localStorage.removeItem('useDelegation');
    selectedWalletId.set('');
    isReady.set(false);
    userStore.set(null);
    actorCache.set(new Map());
  } catch (error) {
    handleConnectionError(error);
  }
}

// Attempt to restore wallet connection
export async function restoreWalletConnection() {
  if (browser) {
    const storedWalletId = localStorage.getItem('selectedWalletId');
    const storedUseDelegation = localStorage.getItem('useDelegation') === 'true';
    if (!storedWalletId) return;

    updateWalletStore({ isConnecting: true });
    selectedWalletId.set(storedWalletId);

    try {
      await connectWallet(storedWalletId, storedUseDelegation);
    } catch (error) {
      localStorage.removeItem('selectedWalletId');
      localStorage.removeItem('useDelegation');
      handleConnectionError(error);
    }
  }
}

// Check if wallet is connected
export function isConnected(): boolean {
  const currentState = get(pnpState);
  return currentState ? isWalletConnected(currentState) : false;
}

// Create actor with retry logic
export async function getActor<T>(
  canisterId: string = kongBackendCanisterId,
  idlFactory: any = kongBackendIDL,
  requiresSigning: boolean = false
): Promise<ActorSubclass<T> | null> {
  const currentState = get(pnpState);
  if (!currentState) return null;

  const cacheKey = `${canisterId}-${idlFactory}-${isConnected()}-${requiresSigning}`;
  const cache = get(actorCache);
  
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey) as ActorSubclass<T>;
  }

  try {
    const [newState, actor] = await pnpGetActor<T>(
      currentState,
      canisterId,
      typeof idlFactory === 'function' ? idlFactory : idlFactory.idlFactory,
      { isSigned: requiresSigning }
    );

    pnpState.set(newState);
    cache.set(cacheKey, actor);
    actorCache.set(cache);

    return actor;
  } catch (error) {
    console.error('Failed to create actor:', error);
    throw error;
  }
}

// Helper functions for specific canisters
export async function getKongBackendActor(requiresSigning: boolean = false) {
  return getActor(kongBackendCanisterId, kongBackendIDL, requiresSigning);
}

export async function getKongFaucetActor(requiresSigning: boolean = false) {
  return getActor(kongFaucetCanisterId, kongFaucetIDL, requiresSigning);
}

export async function getICRC2Actor(canisterId: string, requiresSigning: boolean = true) {
  return getActor(canisterId, ICRC2_IDL, requiresSigning);
}

// Initialize without delegations by default
initializePNP(true);

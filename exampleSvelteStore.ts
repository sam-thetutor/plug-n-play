import { writable, type Writable } from 'svelte/store';
import { walletsList, createPNP, type Wallet } from '@windoge98/plug-n-play';
import {
  canisterId as kongBackendCanisterId,
  idlFactory as kongBackendIDL,
} from '../../../../../declarations/kong_backend'; 
import {
  idlFactory as kongFaucetIDL,
  canisterId as kongFaucetCanisterId,
} from '../../../../../declarations/kong_faucet';
import { HttpAgent, Actor, type ActorSubclass } from '@dfinity/agent';
import { WalletService } from '$lib/services/wallet/WalletService';
import { ICRC2_IDL } from '$lib/idls/icrc2.idl.js';
import { browser } from '$app/environment';
import { tokenStore } from '$lib/services/tokens/tokenStore';
import { Principal } from '@dfinity/principal';
import { DelegationIdentity } from '@dfinity/identity';

// Export the list of available wallets
export const availableWallets = walletsList;

// IDL Mappings
export type CanisterType = 'kong_backend' | 'icrc1' | 'icrc2' | 'kong_faucet';
export const canisterIDLs = {
  'kong_backend': kongBackendIDL,
  'kong_faucet': kongFaucetIDL,
  'icrc1': ICRC2_IDL,
  'icrc2': ICRC2_IDL,
}

// Stores
export const selectedWalletId = writable<string>('');
export const isReady = writable<boolean>(false);
export const userStore: Writable<any> = writable(null);
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

// PNP instance
let pnp: ReturnType<typeof createPNP> | null = null;
let actorCache: { [key: string]: Actor } = {};

// Calculate delegation expiry time from duration
function calculateDelegationExpiry(durationNs: bigint): bigint {
  // Get current time in nanoseconds
  const now = BigInt(Date.now()) * BigInt(1_000_000); // Convert ms to ns
  // Add a much larger buffer for clock skew (30 minutes)
  const BUFFER_NS = BigInt(30 * 60 * 1000_000_000); // 30 minute buffer
  // First add the buffer to current time to account for clock skew
  const adjustedNow = now + BUFFER_NS;
  // Then add the requested duration
  return adjustedNow + durationNs;
}

// Initialize PNP
export function initializePNP(useDelegation: boolean = false) {
  if (pnp === null && browser) {
    const isLocalEnv = process.env.DFX_NETWORK === 'local';
    const config: Wallet.PNPConfig = {
      hostUrl: isLocalEnv ? 'http://localhost:4943' : 'https://ic0.app',
      whitelist: [kongBackendCanisterId, kongFaucetCanisterId],
      identityProvider: isLocalEnv
        ? 'http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943'
        : 'https://nfid.one/authenticate/?applicationName=kong',
    };

    // Only add delegation configuration if explicitly enabled
    if (useDelegation) {
      console.log('Initializing PNP with delegation support');
      const delegationDuration = BigInt(30 * 24 * 60 * 60 * 1000_000_000); // 30 days in nanoseconds
      config.delegationTargets = [Principal.fromText(kongBackendCanisterId)];
      config.delegationTimeout = calculateDelegationExpiry(delegationDuration);
      console.log('Delegation config:', {
        targets: config.delegationTargets.map(p => p.toString()),
        timeout: config.delegationTimeout.toString()
      });
    }
    
    pnp = createPNP(config);
  }
}

// Connect to a wallet with optional delegation
export async function connectWallet(walletId: string, useDelegation: boolean = false) {
  console.log('Connecting wallet:', { walletId, useDelegation });
  
  if (useDelegation && pnp) {
    console.log('Reinitializing PNP with delegation support');
    pnp = null;
    initializePNP(true);
  }
  
  updateWalletStore({ isConnecting: true });
  try {
    const account = await pnp.connect(walletId);
    console.log('Connected successfully:', {
      principal: account.owner?.toString(),
      hasDelegation: pnp.state.provider instanceof DelegationIdentity
    });
    
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
  try {
    await pnp.disconnect();
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
  } catch (error) {
    handleConnectionError(error);
  }
}

// Attempt to restore wallet connection on page load
export async function restoreWalletConnection() {
  if(browser) {
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
  return pnp ? pnp.isWalletConnected() : false;
}

// Track reconnection attempts
let isReconnecting = false;

// Create actor with retry logic for expired delegations
async function createActor(canisterId: string, idlFactory: any, requiresSigning: boolean = false): Promise<ActorSubclass<any>> {
  if(requiresSigning) {
    console.log('Creating actor:', { canisterId, requiresSigning });

  }  
    
    const isAuthenticated = isConnected();
    const cacheKey = `${canisterId}-${idlFactory}-${isAuthenticated}-${requiresSigning}`;
    
    // Return cached actor if available
    if (actorCache[cacheKey]) {
      return actorCache[cacheKey];
    }

    const isLocalEnv = process.env.DFX_NETWORK === 'local';
    const host = isLocalEnv ? 'http://localhost:4943' : 'https://ic0.app';

    if (isAuthenticated && pnp) {
      try {
        // If signing is required, ensure we're using delegations
        if (requiresSigning && !pnp.state.config.delegationTargets?.length) {
          console.log('Signing required but no delegation targets set, reinitializing');
          const storedWalletId = localStorage.getItem('selectedWalletId');
          if (!storedWalletId) {
            throw new Error('No stored wallet ID found');
          }
          pnp = null;
          initializePNP(true);
          await connectWallet(storedWalletId, true);
        }

        // Get actor with appropriate identity
        const actor = await pnp.getActor(canisterId, idlFactory);
        console.log('Actor created successfully');
        actorCache[cacheKey] = actor;
        return actor;
      } catch (error) {
        console.error('Error creating authenticated actor:', error);
        
        if (!requiresSigning) {
          console.log('Falling back to anonymous actor');
          const agent = HttpAgent.createSync({ host });
          if (isLocalEnv) {
            await agent.fetchRootKey();
          }
          const actor = Actor.createActor(idlFactory, { agent, canisterId });
          actorCache[cacheKey] = actor;
          return actor;
        }
        
        // Handle delegation expiry for signed actors
        const errorMessage = error.toString().toLowerCase();
        if (errorMessage.includes('delegation') && errorMessage.includes('expired') && !isReconnecting) {
          console.log('Delegation expired, attempting to reconnect');
          
          const storedWalletId = localStorage.getItem('selectedWalletId');
          if (!storedWalletId) {
            throw new Error('No stored wallet ID found');
          }

          try {
            isReconnecting = true;
            delete actorCache[cacheKey];
            await disconnectWallet();
            
            await connectWallet(storedWalletId, true);
            const actor = await pnp.getActor(canisterId, idlFactory);
            actorCache[cacheKey] = actor;
            return actor;
          } catch (reconnectError) {
            console.error('Reconnection failed:', reconnectError);
            throw new Error('Failed to reconnect after delegation expiry');
          } finally {
            isReconnecting = false;
          }
        }
        throw error;
      }
    }

    const agent = HttpAgent.createSync({ host });
    if (isLocalEnv) {
      await agent.fetchRootKey();
    }
    const actor = Actor.createActor(idlFactory, { agent, canisterId });
    actorCache[cacheKey] = actor;
    return actor;
}

// Export function to get the actor
export async function getActor(canisterId = kongBackendCanisterId, canisterType: CanisterType = 'kong_backend', requiresSigning: boolean = false): Promise<ActorSubclass<any>> {
  const idl = canisterIDLs[canisterType];
  if (!idl) throw new Error(`No IDL found for canister type: ${canisterType}`);
  return createActor(canisterId, idl, requiresSigning);
}

// Example functions for different actor types
export async function getKongBackendActor(requiresSigning: boolean = true) {
  return getActor(kongBackendCanisterId, 'kong_backend', requiresSigning);
}

export async function getKongFaucetActor(requiresSigning: boolean = false) {
  return getActor(kongFaucetCanisterId, 'kong_faucet', requiresSigning);
}

export async function getICRC2Actor(canisterId: string, requiresSigning: boolean = true) {
  return getActor(canisterId, 'icrc2', requiresSigning);
}

// Initialize without delegations by default
initializePNP();

import { writable, type Writable, get, derived } from "svelte/store";
import { walletsList, type PNP } from "@windoge98/plug-n-play";
import {
  canisterId as kongBackendCanisterId,
  idlFactory as kongBackendIDL,
} from "../../../../declarations/kong_backend";
import {
  idlFactory as kongFaucetIDL,
  canisterId as kongFaucetCanisterId,
} from "../../../../declarations/kong_faucet";
import { idlFactory as icrc1idl } from "../../../../declarations/ckbtc_ledger";
import { idlFactory as icrc2idl } from "../../../../declarations/ckusdt_ledger";
import { Actor, HttpAgent } from "@dfinity/agent";
import { getPnpInstance, initializePNP } from "./pnp/PnpInitializer";

// Export the list of available wallets
export const availableWallets = walletsList;

// Create a store for the selected wallet ID
export const selectedWalletId = writable<string | null>(null);

// IDL Mappings
export type CanisterType = "kong_backend" | "icrc1" | "icrc2" | "kong_faucet";
export const canisterIDLs = {
  kong_backend: kongBackendIDL,
  kong_faucet: kongFaucetIDL,
  icrc1: icrc1idl,
  icrc2: icrc2idl,
};

// Track initialization status
let isInitialized = false;

// Global PNP instance - only initialize if not already done
let globalPnp: PNP = getPnpInstance();

// Helper function to create anonymous actor
const createAnonymousActorHelper = async (canisterId: string, idl: any) => {
  const agent = new HttpAgent({
    host: process.env.DFX_NETWORK !== "ic" ? "http://localhost:4943" : "https://icp0.io",
    verifyQuerySignatures: false,
    callTimeout: 1000 * 60 * 5, // 5 minute timeout for calls
    queryTimeout: 1000 * 60 * 5, // 5 minute timeout for queries
  });

  // Always fetch root key in local development
  if (process.env.DFX_NETWORK !== "ic") {
    await agent.fetchRootKey().catch(console.error);
  }

  // Invalidate any existing query cache
  await agent.invalidateIdentity?.();
  await agent.invalidateQueryCache?.();

  return Actor.createActor(idl, {
    agent,
    canisterId,
  });
};

function createAuthStore() {
  const { subscribe, set, update } = writable<PNP>(globalPnp);
  
  // Create a proxy to intercept and handle PNP method calls
  const store = {
    subscribe,
    set: (value: PNP) => {
      globalPnp = value;
      set(value);
    },
    update,
    async connect(walletId: string) {
      try {
        const result = await globalPnp.connect(walletId);
        // Only update store if connection was successful
        if (result?.account?.owner) {
          store.set(globalPnp);
          // Force a refresh of the userStore by getting the user data
          if (store.isWalletConnected()) {
            const actor = await store.getActor(kongBackendCanisterId, kongBackendIDL, { anon: false });
            const userData = await actor.get_user();
            console.log("User data after connect:", userData);
          }
        }
        return result;
      } catch (error) {
        console.error('Connection error:', error);
        throw error;
      }
    },
    async disconnect() {
      try {
        const result = await globalPnp.disconnect();
        store.set(globalPnp);
        return result;
      } catch (error) {
        console.error('Disconnect error:', error);
        throw error;
      }
    },
    async getActor(canisterId: string, idlOrType: any, options: { anon?: boolean, forceNew?: boolean } = { anon: false }): Promise<any> {
      try {
        console.log(`Getting actor for canister ${canisterId}, anon: ${options.anon}, forceNew: ${options.forceNew}, wallet connected: ${this.isWalletConnected()}`);
        
        // Add timeout to prevent infinite waiting
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Actor creation timeout')), 10000); // 10 second timeout
        });

        // If we're not connected or explicitly requesting anonymous actor, create anonymous
        if (options.anon || !this.isWalletConnected()) {
          console.log('Creating anonymous actor...');
          const idl = typeof idlOrType === 'string' ? canisterIDLs[idlOrType] : idlOrType;
          const actorPromise = createAnonymousActorHelper(canisterId, idl);
          const actor = await Promise.race([actorPromise, timeoutPromise]);
          console.log(`Successfully created anonymous actor for ${canisterId}`);
          return actor;
        }

        // For non-anonymous actors, use the PNP instance
        console.log('Creating actor with identity...');
        const idl = typeof idlOrType === 'string' ? canisterIDLs[idlOrType] : idlOrType;
        
        if (options.forceNew) {
          // Create a new PNP instance for this specific call
          const tempPnp = getPnpInstance();
          const actor = await tempPnp.getActor(canisterId, idl);
          console.log('Created new actor with fresh identity:', actor);
          return actor;
        }
        
        const actor = await globalPnp.getActor(canisterId, idl);
        console.log('Actor created with identity:', actor);
        return actor;
      } catch (error) {
        console.error('Error getting actor:', error);
        throw error;
      }
    },
    isWalletConnected() {
      return globalPnp?.isWalletConnected() || false;
    }
  };

  return store;
}

export type AuthStore = ReturnType<typeof createAuthStore>;
export const auth = createAuthStore();

export async function reinitializePNPWithTokens(): Promise<PNP> {
  if (globalPnp) {
    console.log('PNP already initialized with tokens, skipping...');
    return globalPnp;
  }

  try {
    globalPnp = initializePNP();
    console.log('PNP initialized');
    
    return globalPnp;
  } catch (error) {
    console.error('Error initializing PNP:', error);
    throw error;
  }
}

export const anonymousActor = async (canisterId: string, canisterType: CanisterType) => {
  try {
    return await createAnonymousActorHelper(canisterId, canisterIDLs[canisterType]);
  } catch (error) {
    console.error('Error creating anonymous actor:', error);
    throw error;
  }
};

// Create a writable store for user data
const userDataStore = writable<any>(null);

// Function to fetch user data
async function fetchUserData() {
  try {
    if (!auth.isWalletConnected()) {
      console.log("No wallet connected, setting user data to null");
      userDataStore.set(null);
      return;
    }
    
    console.log("Fetching user data with authenticated actor...");
    const actor = await auth.getActor(kongBackendCanisterId, kongBackendIDL, { anon: false });
    console.log("Got authenticated actor, fetching user...");
    const result = await actor.get_user();
    console.log("User data result:", result);
    
    if ('Ok' in result) {
      console.log("Setting user data:", result.Ok);
      userDataStore.set(result.Ok);
    } else {
      console.log("No Ok result in response, setting user data to null");
      userDataStore.set(null);
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    userDataStore.set(null);
  }
}

// Subscribe to auth changes
auth.subscribe(($auth) => {
  console.log("Auth changed, wallet connected:", $auth.isWalletConnected());
  fetchUserData();
});

// Export the readable user store
export const userStore = {
  subscribe: userDataStore.subscribe
};

// add auth to window object
if (typeof window !== 'undefined') {
  window.auth = auth;
  window.$auth = get(auth);
}
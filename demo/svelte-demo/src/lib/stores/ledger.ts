import { writable, get } from 'svelte/store';
import { Principal } from '@dfinity/principal';
import { pnpInstance, principalId } from './pnp';
import { ICRC2_IDL } from '../idls/icrc2.idl';
import type { ActorSubclass } from '@dfinity/agent';

// Define the expected interface for the ICRC2 actor
interface ICRC2Account {
  owner: Principal;
  subaccount?: Uint8Array;
}

interface ICRC2Actor extends ActorSubclass<any> {
  icrc1_balance_of: (args: ICRC2Account) => Promise<bigint>;
}

// ICP Ledger canister ID
const LEDGER_CANISTER_ID = 'ryjl3-tyaaa-aaaaa-aaaba-cai';

export const balance = writable<bigint | null>(null);

export const fetchBalance = async () => {
  const pnp = get(pnpInstance);
  const owner = get(principalId);
  
  if (!pnp) {
    throw new Error('PNP not initialized');
  }
  
  if (!owner) {
    throw new Error('No principal ID available');
  }

  try {
    const actor = await pnp.getActor<ICRC2Actor>(
      LEDGER_CANISTER_ID, 
      ICRC2_IDL,
      { anon: false, requiresSigning: false } 
    );
    
    const result = await actor.icrc1_balance_of({
      owner: owner,
    });
    console.log('Fetched balance:', result);
    balance.set(result);
    return result;
  } catch (error) {
    console.error('Failed to fetch balance:', error);
    throw error;
  }
};

import { writable, get } from 'svelte/store';
import { get as getStore } from 'svelte/store';
import { Principal } from '@dfinity/principal';
import { pnpInstance, principalId } from './pnp';
import { ICRC2_IDL } from '../idls/icrc2.idl';

// ICP Ledger canister ID
const LEDGER_CANISTER_ID = 'ryjl3-tyaaa-aaaaa-aaaba-cai';

export const balance = writable<bigint | null>(null);

export const fetchBalance = async () => {
    const pnp = getStore(pnpInstance);
    const owner = getStore(principalId);
    
    if (!pnp) {
        throw new Error('PNP not initialized');
    }
    
    if (!owner) {
        throw new Error('No principal ID available');
    }

    try {
        const actor = await pnp.getActor(LEDGER_CANISTER_ID, ICRC2_IDL as any, { anon: false });
        const result = await actor.icrc1_balance_of({
            owner: Principal.fromText(owner),
            subaccount: [],
        });
        console.log('Fetched balance:', result);
        balance.set(result);
        return result;
    } catch (error) {
        console.error('Failed to fetch balance:', error);
        throw error;
    }
};

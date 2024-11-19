import { AnonymousIdentity } from './@dfinity/agent';
import { Principal } from './@dfinity/principal';
import { createPNP, walletsList, PnPState, createInitialState, getAccountId, getPrincipalId, connect, disconnect, callCanister, getActor, isWalletConnected } from './pnp';
import { BatchTransact } from './utils/batchTransact';
import { HOSTURL, NNS_CANISTER_ID } from './constants';
import { Wallet, Adapter } from './types';
declare const principalIdFromHex: (principalId: string, subAccount?: string | number) => string | false;
export { createPNP, walletsList, BatchTransact, principalIdFromHex, AnonymousIdentity, Principal, HOSTURL, NNS_CANISTER_ID, type Wallet, type Adapter, type PnPState, createInitialState, getAccountId, getPrincipalId, connect, disconnect, callCanister, getActor, isWalletConnected, };

import { AnonymousIdentity } from './@dfinity/agent';
import { Principal } from './@dfinity/principal';
import { createPNP, walletsList } from './pnp';
import { BatchTransact } from './utils/batchTransact';
import { HOSTURL, NNS_CANISTER_ID } from './constants';
import { Wallet, Adapter, PNP } from './types';
declare const principalIdFromHex: (principalId: string, subAccount?: string | number) => string | false;
export { createPNP, walletsList, BatchTransact, principalIdFromHex, AnonymousIdentity, Principal, HOSTURL, NNS_CANISTER_ID, type Wallet, type Adapter, type PNP };

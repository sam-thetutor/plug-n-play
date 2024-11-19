import type { Adapter, Wallet } from "../types/index";
import {
  Actor,
  HttpAgent,
  type ActorSubclass,
  AnonymousIdentity,
} from "@dfinity/agent";
import { walletList } from "../adapters";
import { Principal } from "@dfinity/principal";
import { getAccountIdentifier } from "../utils/identifierUtils";
import { ICRC1_IDL } from "../did/icrc1.idl.js";

export type PnPState = {
  readonly account: Wallet.Account | null;
  readonly activeWallet: string | null;
  readonly provider: Adapter.Interface | null;
  readonly config: Wallet.PNPConfig;
  readonly actorCache: ReadonlyMap<string, ActorSubclass<any>>;
};

export const createInitialState = (config: Wallet.PNPConfig = {}): PnPState => ({
  account: null,
  activeWallet: null,
  provider: null,
  actorCache: new Map(),
  config: {
    hostUrl: config.hostUrl || "http://localhost:4943",
    localStorageKey: config.localStorageKey || "pnpConnectedWallet",
    identityProvider: config.identityProvider,
    timeout: config.timeout || 1000 * 60 * 60 * 24 * 7, // 7 days
    verifyQuerySignatures: config.verifyQuerySignatures,
    ...config,
  },
});

export const getAccountId = (state: PnPState): string | null => {
  if (!state.provider || !state.account) return null;
  const principalId = state.account.owner.toString();
  return getAccountIdentifier(principalId) || null;
};

export const getPrincipalId = (state: PnPState): Principal | null => 
  state.provider && state.account ? state.account.owner : null;

export const connect = async (
  state: PnPState,
  walletId: string
): Promise<[PnPState, Wallet.Account]> => {
  const selectedWallet = walletList.find((w) => w.id === walletId);
  if (!selectedWallet) {
    throw new Error(`Wallet with ID "${walletId}" not found.`);
  }

  const walletInstance = new selectedWallet.adapter();
  const isAvailable = await walletInstance.isAvailable();

  if (!isAvailable) {
    throw new Error(
      `Wallet "${walletId}" is not available. Please install or enable it.`
    );
  }

  const connectionResult = await walletInstance.connect(state.config);
  if (!connectionResult || typeof connectionResult === "boolean") {
    throw new Error(`Failed to connect to wallet "${walletId}".`);
  }

  localStorage.setItem(state.config.localStorageKey, walletId);

  const newState: PnPState = {
    ...state,
    account: connectionResult,
    activeWallet: walletId,
    provider: walletInstance,
  };

  return [newState, connectionResult];
};

export const disconnect = async (state: PnPState): Promise<PnPState> => {
  if (state.provider) {
    await state.provider.disconnect();
  }
  localStorage.removeItem(state.config.localStorageKey);
  
  return {
    ...state,
    provider: null,
    account: null,
    activeWallet: null,
    actorCache: new Map(),
  };
};

export const callCanister = async <T>(
  state: PnPState,
  canisterId: string,
  methodName: string,
  args: any[] = [],
  idl?: any,
  options?: {
    isAnon?: boolean;
    isSigned?: boolean;
  }
): Promise<[PnPState, T]> => {
  const { isAnon = false, isSigned = false } = options || {};

  if (!state.provider && !isAnon) {
    throw new Error("Wallet not connected");
  }

  try {
    const [newState, actor] = await getActor<any>(state, canisterId, idl || ICRC1_IDL, {
      isAnon,
      isSigned,
    });

    if (typeof actor[methodName] !== "function") {
      throw new Error(
        `Method "${methodName}" not found on canister "${canisterId}"`
      );
    }

    const result = await actor[methodName](...args);
    return [newState, result];
  } catch (error) {
    console.error(
      `Error calling method "${methodName}" on canister "${canisterId}":`,
      error
    );
    throw error;
  }
};

export const getActor = async <T>(
  state: PnPState,
  canisterId: string,
  idl: any,
  options?: {
    isAnon?: boolean;
    isForced?: boolean;
    isSigned?: boolean;
  }
): Promise<[PnPState, ActorSubclass<T>]> => {
  const { isAnon = false, isForced = false, isSigned = false } = options || {};

  const cacheKey = `${state.account?.owner.toString() || 'anonymous'}-${canisterId}-${isAnon}-${isSigned}`;

  if (!isForced && state.actorCache.has(cacheKey)) {
    return [state, state.actorCache.get(cacheKey) as ActorSubclass<T>];
  }

  let actor: ActorSubclass<T>;

  if (isAnon) {
    actor = await createAnonymousActor<T>(state, canisterId, idl);
  } else if (!state.provider) {
    actor = await createAnonymousActor<T>(state, canisterId, idl);
  } else if (isSigned) {
    actor = await createSignedActor<T>(state, canisterId, idl);
  } else {
    actor = await state.provider.createActor<T>(canisterId, idl);
  }

  const newCache = new Map(state.actorCache);
  newCache.set(cacheKey, actor);

  const newState = {
    ...state,
    actorCache: newCache,
  };

  return [newState, actor];
};

const createAnonymousActor = async <T>(
  state: PnPState,
  canisterId: string,
  idl: any
): Promise<ActorSubclass<T>> => {
  const agent = HttpAgent.createSync({
    identity: new AnonymousIdentity(),
    host: state.config.hostUrl,
    verifyQuerySignatures: state.config.verifyQuerySignatures
  });
  
  if (state.config.hostUrl?.includes("localhost") && state.provider?.name !== "NFID") {
    await agent.fetchRootKey();
  }
  
  return Actor.createActor<T>(idl, { agent, canisterId });
};

const createSignedActor = async <T>(
  state: PnPState,
  canisterId: string,
  idl: any
): Promise<ActorSubclass<T>> => {
  if (!state.provider) throw new Error("Wallet not connected");
  return state.provider.createActor<T>(canisterId, idl);
};

export const isWalletConnected = (state: PnPState): boolean =>
  !!state.activeWallet;

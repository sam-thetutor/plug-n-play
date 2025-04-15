# Plug N Play for the Internet Computer

Plug N Play simplifies the integration of Internet Computer wallets into your decentralized applications (dApps). It provides a standardized interface for connecting to various wallets, managing transactions, and interacting with the Internet Computer blockchain.

## Features

- Seamless integration with multiple Internet Computer wallets
- Simplified wallet connection, disconnection, and other functions
- Supports ICRC wallet standards
- Lightweight and easy to use

## Supported Wallets

- Internet Identity
- NFID
- Plug
- Oisy
- More to be added

## Installation

Install Plug N Play using npm:

```bash
npm install @windoge98/plug-n-play
```

## Basic Usage

Here's a minimal example of how to use Plug N Play:

```typescript
import { createPNP } from "@windoge98/plug-n-play";
import { ICAdapters } from "@windoge98/plug-n-play/adapters/ic"; // Optional: If you want to customize specific adapters

// Get available wallet info (IDs, names, logos)
// The actual list comes from the initialized pnp instance

// Initialize PNP with global and adapter-specific settings
const pnp = createPNP({
  // Global settings
  hostUrl: "http://localhost:4943", // Defaults to https://icp0.io, set to your local replica for local dev
  fetchRootKeys: false, // Default is false, set true for local dev
  verifyQuerySignatures: false, // Default is true, set false for local dev
  derivationOrigin: "http://localhost:5173", // Optional: Set for local dev
  dfxNetwork: "local", // Optional: Set for local dev

  // Adapter-specific configurations are nested within the 'adapters' object
  adapters: {
    oisy: {
      // Settings specific to Oisy
      enabled: true,
      config: {
        // Oisy specific config options, e.g.
        // signerUrl: "https://oisy.com/sign",
      },
    },
    nfid: {
      // Settings specific to NFID
      enabled: true,
      config: {
        // rpcUrl: "https://nfid.one/rpc",
      },
    },
    ii: {
      // Settings specific to Internet Identity
      enabled: true, // Explicitly enable (default is true)
      config: {
        // Configuration specific to the II adapter
        identityProvider: "https://identity.ic0.app", // Optional: Default is derived
      },
    },
    plug: {
      // Settings specific to Plug
      enabled: true,
      config: {
        // Plug-specific config, often less needed as it uses browser extension
      },
    },
  },
});

// Get the list of enabled wallets AFTER initialization
const availableWallets = pnp.getEnabledWallets();
console.log("Available wallets:", availableWallets);
// Returns an array of Adapter.Info objects for enabled wallets

// Connect to a wallet
async function connectWallet(walletId: string) {
  try {
    const account = await pnp.connect(walletId);
    console.log("Connected account:", account);
    return account;
  } catch (error) {
    console.error("Failed to connect wallet:", error);
    throw error;
  }
}

// Interact with a canister
async function interactWithCanister(canisterId: string, idl: any) {
  try {
    const actor = await pnp.getActor(canisterId, idl);
    // Now you can call methods on your actor
    return actor;
  } catch (error) {
    console.error("Failed to get canister actor:", error);
    throw error;
  }
}

// Disconnect wallet
async function disconnectWallet() {
  try {
    await pnp.disconnect();
    console.log("Wallet disconnected");
  } catch (error) {
    console.error("Failed to disconnect wallet:", error);
    throw error;
  }
}
```

## Working with the ICP Ledger

Example of interacting with the ICP ledger:

```typescript
import { Principal } from "@dfinity/principal";
import { ICRC2_IDL } from "./idls/icrc2.idl";

const LEDGER_CANISTER_ID = "ryjl3-tyaaa-aaaaa-aaaba-cai";

// Get account balance
async function getBalance(principal: string) {
  const actor = await pnp.getActor(LEDGER_CANISTER_ID, ICRC2_IDL);
  const balance = await actor.icrc1_balance_of({
    owner: Principal.fromText(principal),
    subaccount: [],
  });
  return balance;
}

// Transfer ICP
async function transfer(to: string, amount: bigint) {
  const actor = await pnp.getActor(LEDGER_CANISTER_ID, ICRC2_IDL);
  const result = await actor.icrc1_transfer({
    to: {
      owner: Principal.fromText(to),
      subaccount: [],
    },
    amount,
    fee: [],
    memo: [],
    from_subaccount: [],
    created_at_time: [],
  });
  return result;
}
```

## Best Practices

1. Always initialize PNP before attempting to connect to a wallet
2. Use try-catch blocks when calling PNP methods
3. Set appropriate delegation timeouts based on your security requirements
4. Implement proper error handling for all wallet operations
5. Clean up resources by calling disconnect when appropriate
6. For local development, make sure to use the correct `hostUrl`

## License

This project is licensed under the [MIT License](https://github.com/microdao-corporation/plug-n-play/blob/main/LICENSE.txt).

## Support

If you encounter any issues or have questions, please file an issue on our [GitHub issue tracker](https://github.com/microdao-corporation/plug-n-play/issues).

---

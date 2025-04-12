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
import { createPNP, walletsList } from "@windoge98/plug-n-play";

// Get available wallets
console.log("Available wallets:", walletsList);
// Returns: [
//   { id: "ii", name: "Internet Identity", logo: "..." },
//   { id: "nfid", name: "NFID", logo: "..." },
//   { id: "plug", name: "Plug", logo: "..." },
//   { id: "oisy", name: "Oisy", logo: "..." }
// ]

// Initialize PNP
const pnp = createPNP({
  hostUrl: "https://icp0.io",
  isDev: false,
});

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

## Identity Delegation

Example of using identity delegation (required for oisy, plug, and nfid):

```typescript
// Initialize PNP with delegation support
const pnp = createPNP({
  hostUrl: "https://icp0.io",
  isDev: false,
  delegationTargets: [Principal.fromText('your-canister-id')],
  delegationTimeout: BigInt(7 * 24 * 60 * 60 * 1000_000_000), // 7 days
});

// Connect with delegation
await pnp.connect('nfid', true); // Second parameter enables delegation
```

## Best Practices

1. Always initialize PNP before attempting to connect to a wallet
2. Use try-catch blocks when calling PNP methods
3. Keep your canister whitelist up-to-date
4. Set appropriate delegation timeouts based on your security requirements
5. Implement proper error handling for all wallet operations
6. Check connection status before making canister calls
7. Clean up resources by calling disconnect when appropriate
8. Use library-level delegation configuration for consistent settings
9. For local development, make sure to use the correct `hostUrl`

## License

This project is licensed under the [MIT License](https://github.com/microdao-corporation/plug-n-play/blob/main/LICENSE.txt).

## Support

If you encounter any issues or have questions, please file an issue on our [GitHub issue tracker](https://github.com/microdao-corporation/plug-n-play/issues).

---

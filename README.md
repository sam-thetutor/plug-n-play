# Plug N Play for the Internet Computer

Plug N Play simplifies the integration of Internet Computer wallets into your decentralized applications (dApps). It provides a standardized interface for connecting to various wallets, managing transactions, and interacting with the Internet Computer blockchain.

## Features

- Seamless integration with multiple Internet Computer wallets
- Simplified wallet connection, disconnection, and other functions
- Built-in support for signatures
- Batch transaction support for complex operations
- Robust error handling and delegation refresh mechanisms
- Identity delegation support for enhanced security
- Lightweight and easy to use

## Supported Wallets

- Internet Identity
- NFID
- Plug
- More to be added

## Installation

Install Plug N Play using npm:

```bash
npm install @windoge98/plug-n-play
```

## Basic Usage

Here's how to initialize and use Plug N Play in your application:

```typescript
import { createPNP, getPNPAdapter } from "@windoge98/plug-n-play";
import { Principal } from "@dfinity/principal";

// Initialize PNP with basic configuration
const pnp = createPNP({
  hostUrl: "https://ic0.app",
  whitelist: ['ryjl3-tyaaa-aaaaa-aaaba-cai'], // ICP Ledger canister
  identityProvider: "https://identity.ic0.app",
});

// Or initialize with delegation configuration
const pnpWithDelegation = createPNP({
  hostUrl: "https://ic0.app",
  whitelist: ['ryjl3-tyaaa-aaaaa-aaaba-cai'],
  identityProvider: "https://identity.ic0.app",
  // Optional: Configure default delegation settings
  delegationTargets: [Principal.fromText('your-canister-id')],
  delegationTimeout: BigInt(24 * 60 * 60 * 1000 * 1000 * 1000), // 1 day in nanoseconds
});

// Connect to a wallet
async function connect(walletId: string) {
  const account = await pnp.connect(walletId);
  console.log("Connected to wallet:", account);
  return account;
}

// Get balance
async function getBalance(account: Account) {
  const balance = await pnp.icrc1BalanceOf(ledgerPrincipal, account);
  console.log("Balance:", balance.toString());
  return balance;
}

// Transfer tokens
async function transfer(to: string, amount: bigint) {
  account = {
    owner: Principal.fromText('principal-id'),
    subaccount: []
  }
  const result = await pnp.icrc1_transfer(ledgerPrincipal, amount, account);
  console.log("Transfer result:", result);
  return result;
}
```

## Working with Canisters

Plug N Play allows you to easily interact with canisters. Here's an example:

```typescript
import { idlFactory } from 'path/to/your/canister/did.js';

async function interactWithCanister(canisterId: string) {
  const actor = await pnp.getCanisterActor(canisterId, idlFactory);
  // Now you can call methods on your actor
  const result = await actor.someMethod();
  console.log(result);
}
```

## Identity Delegation

Plug N Play supports identity delegation, allowing you to create and manage delegated identities for enhanced security and controlled access:

```typescript
// Initialize PNP with delegation support
const pnp = createPNP({
  hostUrl: "https://ic0.app",
  whitelist: ['your-canister-id'],
  // Configure delegation
  delegationTargets: [Principal.fromText('your-canister-id')],
  delegationTimeout: BigInt(7 * 24 * 60 * 60 * 1000_000_000), // 7 days in nanoseconds
});

// Connect with delegation
await pnp.connect('nfid', true); // Second parameter enables delegation

// The delegation will be automatically requested when:
// 1. Connecting with delegation enabled
// 2. Calling methods that require signing
// 3. When the delegation expires
```

### Session Management

Plug N Play automatically handles session persistence for supported wallets. Sessions are managed differently depending on the wallet:

#### NFID
- Sessions persist across page reloads
- Delegation chains are stored securely
- Default session timeout is 7 days
- Auto-refresh of delegations when needed

#### Internet Identity
- Sessions persist based on II configuration
- Supports standard II delegation
- Compatible with II session management

#### Plug
- Uses Plug's native session management
- Integrates with Plug wallet's security model

### Best Practices

1. **Session Initialization**
   ```typescript
   // Initialize with appropriate timeout
   const pnp = createPNP({
     timeout: 1000 * 60 * 60 * 24 * 7, // 7 days in milliseconds
     // ... other config
   });
   ```

2. **Handling Session Restoration**
   ```typescript
   // In your app initialization
   async function initializeWallet() {
     const storedWalletId = localStorage.getItem('selectedWalletId');
     const storedUseDelegation = localStorage.getItem('useDelegation') === 'true';
     
     if (storedWalletId) {
       try {
         await pnp.connect(storedWalletId, storedUseDelegation);
       } catch (error) {
         // Handle connection error
         localStorage.removeItem('selectedWalletId');
         localStorage.removeItem('useDelegation');
       }
     }
   }
   ```

3. **Delegation Management**
   ```typescript
   // Request new delegation
   const result = await pnp.requestPermissions({
     targets: [Principal.fromText('your-canister-id')],
   });

   // Check delegation status
   const hasDelegation = pnp.state.provider instanceof DelegationIdentity;
   ```

### Security Considerations

1. **Session Duration**: Configure appropriate session timeouts based on your security requirements
2. **Delegation Scope**: Only request delegation for necessary canisters
3. **Error Handling**: Implement proper error handling for session expiration
4. **Storage**: Use secure storage methods for session data
5. **Renewal**: Implement proper delegation renewal strategies

## Best Practices

1. Always initialize PNP before attempting to connect to a wallet.
2. Use try-catch blocks when calling PNP methods to handle potential errors.
3. Keep your canister whitelist up-to-date to ensure smooth interactions.
4. Set appropriate delegation expiration times based on your security requirements.
5. Consider using targeted delegations for enhanced security.
6. Use library-level delegation configuration for consistent settings across your app.
7. Override delegation settings only when necessary for specific use cases.
8. Regularly check for updates to the Plug N Play library to benefit from new features and improvements.
9. For local development, make sure to use the correct `hostUrl` and `identityProvider`.

## License

This project is licensed under the [MIT License](https://github.com/microdao-corporation/plug-n-play/blob/main/LICENSE.txt).

## Support

If you encounter any issues or have questions, please file an issue on our [GitHub issue tracker](https://github.com/microdao-corporation/plug-n-play/issues).

---
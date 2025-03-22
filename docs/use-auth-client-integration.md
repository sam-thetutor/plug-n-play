# Using NNSAdapter with @dfinity/use-auth-client

This guide explains how to integrate the `NNSAdapter` from the @windoge98/plug-n-play library with the @dfinity/use-auth-client React hook.

## Overview

The @dfinity/use-auth-client package provides React hooks for handling Internet Identity authentication. While the @windoge98/plug-n-play library already handles authentication natively, you may want to use the React hooks for a more React-friendly approach.

## Installation

Make sure you have both packages installed:

```bash
npm install @windoge98/plug-n-play @dfinity/use-auth-client
```

## Basic Integration

Here's a basic example of how to use the NNSAdapter with the useAuthClient hook:

```jsx
import React, { useEffect, useState } from 'react';
import { useAuthClient } from '@dfinity/use-auth-client';
import { NNSAdapter } from '@windoge98/plug-n-play';

function MyComponent() {
  // Create an instance of the NNSAdapter
  const [adapter] = useState(() => new NNSAdapter({
    isDev: process.env.NODE_ENV === 'development',
    derivationOrigin: window.location.origin,
  }));
  
  // Get configuration for useAuthClient from the adapter
  const authClientConfig = adapter.getUseAuthClientConfig();
  
  // Use the hook with the adapter's configuration
  const { isAuthenticated, login, logout, identity } = useAuthClient(authClientConfig);

  // Use identity to create a wallet account when authenticated
  const [account, setAccount] = useState(null);
  
  useEffect(() => {
    if (isAuthenticated && identity) {
      const principal = identity.getPrincipal();
      const walletAccount = NNSAdapter.createAccountFromPrincipal(principal);
      setAccount(walletAccount);
      
      // You can also create an actor
      // Replace with your canister ID and interface factory
      const actor = Actor.createActor(idlFactory, {
        agent: new HttpAgent({ identity }),
        canisterId,
      });
    }
  }, [isAuthenticated, identity]);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Connected as: {account?.owner?.toString()}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>Login with Internet Identity</button>
      )}
    </div>
  );
}
```

## Advanced Usage

### Using Multiple Actors

If you're working with multiple canisters, you can use the `actors` option in `useAuthClient`:

```jsx
const { isAuthenticated, login, logout, actors } = useAuthClient({
  ...adapter.getUseAuthClientConfig(),
  actors: {
    myCanister1: {
      canisterId: 'aaaaa-aa',
      idlFactory: myCanister1IdlFactory,
    },
    myCanister2: {
      canisterId: 'bbbbb-bb',
      idlFactory: myCanister2IdlFactory,
    },
  },
});

// Now you can access your actors
const { myCanister1, myCanister2 } = actors;
```

### Creating a Context Provider

For larger applications, you might want to create a context provider:

```jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuthClient } from '@dfinity/use-auth-client';
import { NNSAdapter } from '@windoge98/plug-n-play';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [adapter] = useState(() => new NNSAdapter({
    isDev: process.env.NODE_ENV === 'development',
    derivationOrigin: window.location.origin,
  }));
  
  const { isAuthenticated, login, logout, identity } = useAuthClient(
    adapter.getUseAuthClientConfig()
  );
  
  const [account, setAccount] = useState(null);
  
  useEffect(() => {
    if (isAuthenticated && identity) {
      const principal = identity.getPrincipal();
      const walletAccount = NNSAdapter.createAccountFromPrincipal(principal);
      setAccount(walletAccount);
    } else {
      setAccount(null);
    }
  }, [isAuthenticated, identity]);
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, identity, account }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
```

Then in your components:

```jsx
import { useAuth } from './path-to-auth-provider';

function MyComponent() {
  const { isAuthenticated, login, logout, account } = useAuth();
  
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Connected as: {account?.owner?.toString()}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>Login with Internet Identity</button>
      )}
    </div>
  );
}
```

## Benefits

Using the NNSAdapter with useAuthClient provides:

1. React-friendly state management with hooks
2. Integration with React's component lifecycle
3. Simplified actor creation for multiple canisters
4. Automatic identity management
5. Consistent authentication experience across your application

## Compatibility

This integration is compatible with:

- React 16.8+ (requires hooks support)
- @dfinity/use-auth-client 2.3.0+
- @windoge98/plug-n-play 0.0.46+ 
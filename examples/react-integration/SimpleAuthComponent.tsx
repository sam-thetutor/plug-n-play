import React, { useEffect, useState } from 'react';
import { useAuthClient } from '@dfinity/use-auth-client';
import { NNSAdapter } from '@windoge98/plug-n-play';
import { Actor, HttpAgent } from '@dfinity/agent';

// Replace with your canister ID and interface factory
const canisterId = 'YOUR_CANISTER_ID';
const idlFactory = /* your IDL factory */;

export function SimpleAuthComponent() {
  // Create the adapter instance
  const [adapter] = useState(() => new NNSAdapter({
    isDev: process.env.NODE_ENV === 'development',
    derivationOrigin: window.location.origin,
  }));

  // Get the config for useAuthClient
  const authClientConfig = adapter.getUseAuthClientConfig();

  // Use the hook with the adapter's configuration
  const { isAuthenticated, login, logout, identity } = useAuthClient(authClientConfig);

  // State for storing the account and principal
  const [principal, setPrincipal] = useState(null);
  const [account, setAccount] = useState(null);
  const [actor, setActor] = useState(null);

  // Update state when authentication changes
  useEffect(() => {
    if (isAuthenticated && identity) {
      const userPrincipal = identity.getPrincipal();
      setPrincipal(userPrincipal);
      
      // Create a wallet account from the principal
      const walletAccount = NNSAdapter.createAccountFromPrincipal(userPrincipal);
      setAccount(walletAccount);
      
      // Create an actor for your canister
      const agent = new HttpAgent({ identity });
      
      // Fetch root key in development only
      if (process.env.NODE_ENV !== 'production') {
        agent.fetchRootKey().catch(console.error);
      }
      
      // Create actor
      const newActor = Actor.createActor(idlFactory, {
        agent,
        canisterId,
      });
      
      setActor(newActor);
    } else {
      setPrincipal(null);
      setAccount(null);
      setActor(null);
    }
  }, [isAuthenticated, identity]);

  // Handle login button click
  const handleLogin = () => {
    login();
  };

  // Handle logout button click
  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="auth-container">
      <h2>Internet Computer Authentication</h2>
      
      {isAuthenticated ? (
        <div className="authenticated">
          <p>You are authenticated!</p>
          <p>Principal: {principal?.toString()}</p>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      ) : (
        <div className="unauthenticated">
          <p>You are not authenticated.</p>
          <button onClick={handleLogin} className="login-button">
            Login with Internet Identity
          </button>
        </div>
      )}
    </div>
  );
}

// Advanced example with multiple actors
export function AdvancedAuthComponent() {
  const [adapter] = useState(() => new NNSAdapter({
    isDev: process.env.NODE_ENV === 'development',
    derivationOrigin: window.location.origin,
  }));

  // Using multiple actors configuration
  const { isAuthenticated, login, logout, actors } = useAuthClient({
    ...adapter.getUseAuthClientConfig(),
    actors: {
      myCanister1: {
        canisterId: 'aaaaa-aa',
        idlFactory: /* your IDL factory for canister 1 */,
      },
      myCanister2: {
        canisterId: 'bbbbb-bb',
        idlFactory: /* your IDL factory for canister 2 */,
      },
    },
  });

  // Destructure your actors for convenience
  const { myCanister1, myCanister2 } = actors || {};

  // Call your canister methods when needed
  const callCanisterMethod = async () => {
    if (myCanister1) {
      try {
        // Replace with your actual method
        const result = await myCanister1.yourMethod();
        console.log('Result:', result);
      } catch (error) {
        console.error('Error calling canister:', error);
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>Advanced Authentication Example</h2>
      
      {isAuthenticated ? (
        <div className="authenticated">
          <p>You are authenticated!</p>
          <button onClick={callCanisterMethod} className="call-button">
            Call Canister Method
          </button>
          <button onClick={logout} className="logout-button">
            Logout
          </button>
        </div>
      ) : (
        <div className="unauthenticated">
          <button onClick={login} className="login-button">
            Login with Internet Identity
          </button>
        </div>
      )}
    </div>
  );
} 
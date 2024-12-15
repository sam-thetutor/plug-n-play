<script lang="ts">
  import {
    availableWallets,
    isConnected,
    principalId,
    connectWallet,
    disconnectWallet,
    pnpInstance,
    selectedWalletId,
  } from "../stores/pnp";
  import { balance, fetchBalance } from "../stores/ledger";
  import { get } from "svelte/store";

  let connecting = false;
  let error: string | null = null;
  let userBalance: bigint | null = null;

  function formatICPBalance(balance: bigint | null): string {
    if (!balance) return "...";
    const decimals = 8;
    const balanceStr = balance.toString().padStart(decimals + 1, "0");
    const integerPart = balanceStr.slice(0, -decimals) || "0";
    const decimalPart = balanceStr.slice(-decimals);
    // Remove trailing zeros from decimal part
    const trimmedDecimalPart = decimalPart.replace(/0+$/, "");
    return trimmedDecimalPart 
      ? `${integerPart}.${trimmedDecimalPart}`
      : integerPart;
  }

  async function handleConnect(walletId: string) {
    connecting = true;
    error = null;
    try {
      const pnp = get(pnpInstance);
      if (!pnp) {
        throw new Error('PNP not initialized');
      }

      // Prepare connection and connect in click handler context
      const { connect } = await pnp.prepareConnection(walletId);
      const account = await connect();
      
      // Update stores after successful connection
      selectedWalletId.set(walletId);
      isConnected.set(true);
      principalId.set(account.owner.toString());
      
      await fetchBalance();
    } catch (e) {
      error = e.message;
      console.error('Failed to connect:', e);
    } finally {
      connecting = false;
    }
  }

  balance.subscribe((value) => {
    if (value) {
      userBalance = value;
    }
  });
</script>

<div class="sign-in">
  {#if $isConnected}
    <div class="connected-info">
      <div class="status connected">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>Connected</span>
      </div>
      <div class="principal">
        <h3>Principal ID</h3>
        <code>{$principalId}</code>
      </div>
      <div class="balance">
        <h3>ICP Balance</h3>
        <code>{formatICPBalance(userBalance)} ICP</code>
      </div>
      <button class="disconnect" on:click={disconnectWallet}>
        Disconnect Wallet
      </button>
    </div>
  {:else}
    <div class="wallet-options">
      <h2>Connect Wallet</h2>
      <p class="subtitle">Choose your preferred wallet to sign in</p>

      <div class="wallet-list">
        <h2>Connect your wallet</h2>
        <div class="wallets">
          {#each availableWallets as wallet}
            <button
              class="wallet-button"
              disabled={connecting}
              on:click|preventDefault={(event) => handleConnect(wallet.id)}
            >
              <img src={wallet.logo} alt={wallet.name} />
            </button>
          {/each}
        </div>
        {#if error}
          <div class="error">{error}</div>
        {/if}
      </div>
    </div>
  {/if}
</div>

<style>
  .sign-in {
    max-width: 480px;
    margin: 0 auto;
    padding: 2rem;
  }

  .wallet-options {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #1a202c;
  }

  .subtitle {
    margin: 0.5rem 0 1.5rem;
    color: #4a5568;
    font-size: 0.875rem;
  }

  .wallet-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .wallet-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.75rem 1rem;
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    color: #2d3748;
    cursor: pointer;
    transition: all 0.2s;
  }

  .wallet-button:hover:not(:disabled) {
    background: #edf2f7;
    border-color: #cbd5e0;
  }

  .wallet-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .wallet-arrow {
    color: #718096;
  }

  .error {
    margin-top: 1rem;
    padding: 0.75rem;
    background: #fff5f5;
    border: 1px solid #feb2b2;
    border-radius: 6px;
    color: #c53030;
    font-size: 0.875rem;
  }

  .connected-info {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  .status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .status.connected {
    color: #2f855a;
  }

  .principal {
    background: #f7fafc;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }

  .principal h3 {
    margin: 0 0 0.5rem;
    font-size: 0.875rem;
    color: #4a5568;
  }

  code {
    display: block;
    word-break: break-all;
    font-size: 0.875rem;
    color: #2d3748;
  }

  .disconnect {
    width: 100%;
    padding: 0.75rem 1rem;
    background: #fff5f5;
    border: 1px solid #feb2b2;
    border-radius: 8px;
    color: #c53030;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .disconnect:hover {
    background: #fed7d7;
    border-color: #fc8181;
  }
</style>

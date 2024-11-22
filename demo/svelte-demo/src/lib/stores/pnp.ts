import { writable, derived, get } from 'svelte/store';
import { walletsList, createPNP, type PNP } from '@windoge98/plug-n-play';

// Export available wallets
export const availableWallets = walletsList;

// Create stores
export const selectedWalletId = writable<string | null>(null);
export const pnpInstance = writable<PNP | null>(null);
export const isConnected = writable(false);
export const principalId = writable<string | null>(null);

// Initialize PNP
export const initializePNP = () => {
    const pnp = createPNP({
        hostUrl: 'https://icp0.io',
        isDev: false,
    });
    pnpInstance.set(pnp);
    return pnp;
};

// Connect wallet
export const connectWallet = async (walletId: string) => {
    const pnp = get(pnpInstance);
    if (!pnp) {
        throw new Error('PNP not initialized');
    }

    try {
        const account = await pnp.connect(walletId);
        selectedWalletId.set(walletId);
        isConnected.set(true);
        // Convert Principal object to string
        principalId.set(account.owner.toString());
        return account;
    } catch (error) {
        console.error('Failed to connect wallet:', error);
        throw error;
    }
};

// Disconnect wallet
export const disconnectWallet = async () => {
    const pnp = get(pnpInstance);
    if (!pnp) return;

    try {
        await pnp.disconnect();
        selectedWalletId.set(null);
        isConnected.set(false);
        principalId.set(null);
    } catch (error) {
        console.error('Failed to disconnect wallet:', error);
        throw error;
    }
};

// Initialize PNP on load
initializePNP();

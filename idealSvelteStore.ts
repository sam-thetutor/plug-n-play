import { writable, type Writable } from 'svelte/store';
import { createPNP, type PNP } from '@windoge98/plug-n-play';

function  createAuthStore() {
    const pnp = createPNP({ hostUrl: 'https://icp0.io' });
    const { subscribe, set } = writable<PNP>(pnp);

    return {
        subscribe,
        connect: async (walletId: string) => {
            const account = await pnp.connect(walletId);
            localStorage.setItem('pnp-wallet', walletId);
            return account;
        },
        disconnect: async () => {
            await pnp.disconnect();
            localStorage.removeItem('pnp-wallet');
        },
        createUndelegatedActor: async (actorId: string) => {
            const actor = await pnp.createUndelegatedActor(actorId);
            return actor;
        },
        getActor: async (canisterId: string, type: string) => {
            const actor = await pnp.getActor(actorId);
            return actor;
        }
    };
}

// Export singleton
export const auth = createAuthStore();

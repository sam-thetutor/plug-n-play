import { ActorSubclass, HttpAgent } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import { Adapter, Wallet } from "../types";
import { principalToSubAccount, uint8ArrayToHexString } from '@dfinity/utils';
import astroLogo from "../../assets/astroxme.webp";

// Initialize AstroX WebView handler
let webviewInitPromise: Promise<void> | null = null;

const ASTROX_CONFIG = {
  providerUrl: 'https://63k2f-nyaaa-aaaah-aakla-cai.raw.ic0.app',
  delegationModes: ["global"],
  ledgerHost: "https://icp0.io/",
};

// Initialize web extension
async function waitForAstroX(timeout = 10000): Promise<void> {
  const startTime = Date.now();
  
  while (Date.now() - startTime < timeout) {
    if (window.ic?.astrox) return;
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  throw new Error('AstroX extension not detected after timeout');
}

if (typeof window !== 'undefined') {
  webviewInitPromise = (async () => {
    try {
      const { IC } = await import('@astrox/sdk-web');
      await IC.create({
        useFrame: !(window.innerWidth < 768),
        signerProviderUrl: `${ASTROX_CONFIG.providerUrl}/#signer`,
        walletProviderUrl: `${ASTROX_CONFIG.providerUrl}/#transaction`,
        identityProvider: `${ASTROX_CONFIG.providerUrl}/#authorize`,
        host: ASTROX_CONFIG.ledgerHost,
        ledgerHost: ASTROX_CONFIG.ledgerHost,
        ledgerCanisterId: "ryjl3-tyaaa-aaaaa-aaaba-cai",
        permissions: ["permissions-identity", "permissions-wallet"],
        noUnify: false,
      });
      
      // Wait for extension to be properly initialized
      if (!window.ic?.astrox) {
        await waitForAstroX();
      }
    } catch (e) {
      console.warn("Failed to initialize AstroX web extension:", e);
      localStorage.removeItem("astrox");
    }
  })();
}

export class AstroXAdapter implements Adapter.Interface {
  static logo: string = astroLogo;
  logo: string = AstroXAdapter.logo;
  name: string = "AstroX";
  url: string = ASTROX_CONFIG.providerUrl;
  private agent: HttpAgent | null = null;

  private readyState:
    | "NotDetected"
    | "Installed"
    | "Connected"
    | "Disconnected" = "NotDetected";

  constructor() {
    this.initAstroX();
  }

  private async initAstroX(): Promise<void> {
    try {
      // Wait for web extension initialization
      if (webviewInitPromise) {
        await webviewInitPromise;
      }

      // Only try WebView if we're not already initialized
      if (!window.icx && !window.ic?.astrox) {
        // Initialize WebView handler with retry
        const maxRetries = 3;
        for (let i = 0; i < maxRetries; i++) {
          try {
            const { AstroXWebViewHandler } = await import('@astrox/sdk-webview');
            window.icx = new AstroXWebViewHandler() as any;
            await window.icx.init();
            break;
          } catch (e) {
            if (i === maxRetries - 1) {
              console.warn("Not in AstroX mobile app, falling back to web extension");
              window.icx = undefined;
            } else {
              await new Promise(resolve => setTimeout(resolve, 1000));
            }
          }
        }
      }

      // Check if either mobile or web version is available
      const isWebExtension = Boolean(window.ic?.astrox);
      const isMobileApp = Boolean(window.icx?._isReady);
      
      if (isWebExtension || isMobileApp) {
        this.readyState = "Installed";
      } else {
        this.readyState = "NotDetected";
      }
    } catch (e) {
      console.error("Failed to initialize AstroX:", e);
      this.readyState = "NotDetected";
    }
  }

  async isAvailable(): Promise<boolean> {
    try {
      await this.initAstroX();
      return this.readyState === "Installed";
    } catch (e) {
      console.warn("AstroX availability check failed:", e);
      return false;
    }
  }

  async connect(config: Wallet.AdapterConfig): Promise<Wallet.Account> {
    try {
      await this.initAstroX();

      // Try mobile app first
      if (window.icx?._isReady) {
        console.log("Using AstroX mobile flow");
        const isConnected = await window.icx.isConnected();
        if (!isConnected) {
          await window.icx.connect({
            ...ASTROX_CONFIG,
            delegationTargets: config.whitelist,
            ledgerHost: config.hostUrl || ASTROX_CONFIG.ledgerHost
          });
        }

        this.agent = HttpAgent.createSync({
          identity: window.icx.identity,
          host: config.hostUrl || ASTROX_CONFIG.ledgerHost
        });

        return {
          owner: Principal.fromText(window.icx.wallet.principal),
          subaccount: null,
        };
      }

      // Web extension flow
      console.log("Using AstroX web flow");
      const ic = window.ic as any;
      if (!ic?.astrox) {
        throw new Error("AstroX web extension not available. Please install the extension or use the AstroX mobile app.");
      }

      const isConnected = await ic.astrox.isAuthenticated();
      if (!isConnected) {
        await ic.astrox.connect({
          ...(ic.astrox.connectOptions || {}),
          delegationTargets: config.whitelist,
          ledgerHost: config.hostUrl || ASTROX_CONFIG.ledgerHost
        });
      }

      this.agent = HttpAgent.createSync({
        identity: ic.astrox.identity,
        host: config.hostUrl || ASTROX_CONFIG.ledgerHost
      });

      return {
        owner: ic.astrox.principal,
        subaccount: null,
      };
    } catch (e) {
      console.error("Failed to connect to AstroX wallet:", e);
      throw new Error(`Failed to connect to AstroX wallet: ${e.message}`);
    }
  }

  async disconnect(): Promise<void> {
    if (window.icx?._isReady) {
      await window.icx.disconnect();
    } else if ((window.ic as any)?.astrox) {
      await (window.ic as any).astrox.disconnect();
    }
    this.readyState = "Disconnected";
  }

  async getPrincipal(): Promise<Principal> {
    if (window.icx?._isReady) {
      return Principal.fromText(window.icx.wallet.principal);
    } else if ((window.ic as any)?.astrox) {
      return (window.ic as any).astrox.principal;
    }
    throw new Error("AstroX wallet is not connected");
  }

  async getAccountId(): Promise<string> {
    const principal = await this.getPrincipal();
    const subaccount = principalToSubAccount(principal);
    return uint8ArrayToHexString(subaccount);
  }

  async createActor<T>(
    canisterId: string,
    idlFactory: any
  ): Promise<ActorSubclass<T>> {
    if (!canisterId || !idlFactory) {
      throw new Error("Canister ID and IDL factory are required");
    }

    if (window.icx?._isReady) {
      return await window.icx.createActor(canisterId, idlFactory);
    } else if ((window.ic as any)?.astrox) {
      return await (window.ic as any).astrox.createActor(idlFactory, canisterId);
    }
    throw new Error("AstroX wallet is not available or not connected");
  }

  async isConnected(): Promise<boolean> {
    if (window.icx?._isReady) {
      return await window.icx.isConnected();
    } else if ((window.ic as any)?.astrox) {
      return await (window.ic as any).astrox.isAuthenticated();
    }
    return false;
  }
}
// Path: src/adapters/index.ts
// Import adapters
import { NNSAdapter } from "./NNSAdapter";
import { PlugAdapter } from "./PlugAdapter";
import { NFIDAdapter } from "./NFIDAdapter";
import { Wallet } from '../types/index';

export const walletList: Wallet.AdapterInfo[] = [
  {
    id: "nns",
    name: "Internet Identity",
    icon: NNSAdapter.logo,
    adapter: NNSAdapter,
  },
  {
    id: "plug",
    name: "Plug Wallet",
    icon: PlugAdapter.logo,
    adapter: PlugAdapter,
  },
  {
    id: "nfid",
    name: "NFID",
    icon: NFIDAdapter.logo,
    adapter: NFIDAdapter,
  },
];

export {
  NNSAdapter,
  PlugAdapter,
  NFIDAdapter,
};
// Path: src/adapters/index.ts
// Import adapters
import { NNSAdapter } from "./NNSAdapter";
import { PlugAdapter } from "./PlugAdapter";
import { NFIDAdapter } from "./NFIDAdapter";
import { Adapter } from '../types/index';

export const walletList: Adapter.Info[] = [
  {
    id: "nfid",
    name: "NFID",
    icon: NFIDAdapter.logo,
    adapter: NFIDAdapter,
  },
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
  }
];

export {
  NNSAdapter,
  PlugAdapter,
  NFIDAdapter,
};
// Path: src/adapters/index.ts
// Import adapters
import { NNSAdapter } from "./NNSAdapter";
import { PlugAdapter } from "./PlugAdapter";
import { NFIDAdapter } from "./NFIDAdapter";
import { Adapter } from '../types/index';
import { OisyAdapter } from "./OisyAdapter";

export const walletList: Adapter.Info[] = [
  {
    id: "nfid",
    name: "NFID",
    icon: NFIDAdapter.logo,
    adapter: NFIDAdapter,
  },
  {
    id: "oisy",
    name: "Oisy",
    icon: OisyAdapter.logo,
    adapter: OisyAdapter,
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
  },
];

export {
  NNSAdapter,
  PlugAdapter,
  NFIDAdapter,
  OisyAdapter,
};

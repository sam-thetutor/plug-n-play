// Path: src/adapters/index.ts
// Import adapters
import { NNSAdapter } from "./NNSAdapter";
import { PlugAdapter } from "./PlugAdapter";
import { NFIDAdapter } from "./NFIDAdapter";
import { Adapter } from '../types/index';
import { OisyAdapter } from "./OisyAdapter";
import { AstroXAdapter } from "./AstroXAdapter";
import { StoicAdapter } from "./StoicAdapter";

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
  },
  // {
  //   id: "astrox",
  //   name: "AstroX",
  //   icon: AstroXAdapter.logo,
  //   adapter: AstroXAdapter,
  // },
  {
    id: "oisy",
    name: "Oisy",
    icon: OisyAdapter.logo,
    adapter: OisyAdapter,
  },
  // {
  //   id: "stoic",
  //   name: "Stoic",
  //   icon: StoicAdapter.logo,
  //   adapter: StoicAdapter,
  // }
];

export {
  NNSAdapter,
  PlugAdapter,
  NFIDAdapter,
  OisyAdapter,
  AstroXAdapter,
  StoicAdapter,
};

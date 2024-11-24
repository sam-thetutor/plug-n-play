# PnP Svelte Demo

This is a minimal demo of the PnP (Plug-n-Play) library integration with Svelte. It demonstrates how to:
- Initialize the PnP library
- Connect to various ICP wallets
- Display the connected principal ID
- Handle wallet disconnection

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Features

- Simple UI for wallet connection
- Displays available wallets from the PnP library
- Shows connected wallet's principal ID
- Error handling for connection issues
- Clean disconnection handling

## Project Structure

- `src/lib/stores/pnp.ts`: PnP integration and state management
- `src/App.svelte`: Main UI component

## Development

This demo uses:
- Vite for development and building
- Svelte for UI
- TypeScript for type safety
- PnP library for ICP wallet integration

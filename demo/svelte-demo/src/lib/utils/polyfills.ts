// Polyfill global for browser environment
if (typeof window !== 'undefined') {
    (window as any).global = window;
}

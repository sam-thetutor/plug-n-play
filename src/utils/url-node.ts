// Minimal URL shim that works in both Node and browser environments
export const URL = globalThis.URL;
export const URLSearchParams = globalThis.URLSearchParams;

export const parse = (url: string, base?: string): URL => {
  return new URL(url, base);
};

export const format = (urlOrString: URL | string): string => {
  const url = typeof urlOrString === 'string' ? new URL(urlOrString) : urlOrString;
  return url.toString();
};

export const resolve = (from: string, to: string): string => {
  return new URL(to, from).toString();
};

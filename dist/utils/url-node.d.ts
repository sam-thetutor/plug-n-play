export declare const URL: {
    new (url: string | URL, base?: string | URL): URL;
    prototype: URL;
    canParse(url: string | URL, base?: string): boolean;
    createObjectURL(obj: Blob | MediaSource): string;
    revokeObjectURL(url: string): void;
};
export declare const URLSearchParams: {
    new (init?: string | string[][] | Record<string, string> | URLSearchParams): URLSearchParams;
    prototype: URLSearchParams;
};
export declare const parse: (url: string, base?: string) => URL;
export declare const format: (urlOrString: URL | string) => string;
export declare const resolve: (from: string, to: string) => string;

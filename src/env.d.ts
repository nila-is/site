/// <reference path="../.astro/types.d.ts" />

declare global {
  interface Reb2bQueue extends Array<unknown> {
    [key: string]: unknown;
    invoked?: boolean;
    methods?: string[];
    factory?: (method: string) => (...args: unknown[]) => Reb2bQueue;
    load?: (key: string) => void;
    SNIPPET_VERSION?: string;
  }

  interface Window {
    reb2b?: Reb2bQueue;
  }
}

export {};

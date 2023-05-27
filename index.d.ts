declare module "grizzly" {
  export interface LocaleMessages {
    [key: string]: string | LocaleMessages;
  }

  export interface GrizzlyOptions {
    lang: string;
    locales: {
      [locale: string]: LocaleMessages;
    };
  }

  export interface GrizzlyInstance {
    t(key: string): string | undefined;
    useGrizzly(namespace?: string): GrizzlyInstance;
  }

  export function createGrizzly(options: GrizzlyOptions): {
    install(app: any): void;
  };

  export function useGrizzly(namespace?: string): GrizzlyInstance;
}

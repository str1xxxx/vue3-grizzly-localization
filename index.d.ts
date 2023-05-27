declare module "vue3-grizzly-localization" {
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
    changeLanguage(lang: string): void;
  }

  export function createGrizzly(options: GrizzlyOptions): {
    install(app: any): void;
  };

  export function useGrizzly(namespace?: string): GrizzlyInstance;
}

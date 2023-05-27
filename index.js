// grizzly.js
import { ref, inject } from "vue";

export function createGrizzly(options) {
  const currentLang = ref(options.lang);
  const locales = options.locales;

  function t(key) {
    const keys = key.split(".");
    let current = locales[currentLang.value];
    for (let i = 0; i < keys.length; i++) {
      current = current[keys[i]];
      if (current === undefined) {
        return undefined;
      }
    }
    return current;
  }

  function useGrizzly(namespace = "") {
    function tNamespaced(key) {
      return t(`${namespace ? namespace + "." : ""}${key}`);
    }

    return { t: tNamespaced };
  }

  return {
    install(app) {
      app.provide("grizzly", { t, useGrizzly });
    },
  };
}

export function useGrizzly(namespace) {
  const grizzly = inject("grizzly");
  return grizzly.useGrizzly(namespace);
}

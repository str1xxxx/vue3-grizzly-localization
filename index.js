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
        return key;
      }
    }
    return current;
  }

  function changeLanguage(lang) {
    if (locales[lang]) {
      currentLang.value = lang;
    } else {
      console.warn(`The language "${lang}" is not loaded in Grizzly.`);
    }
  }

  function useGrizzly(namespace = "") {
    function tNamespaced(key) {
      return t(`${namespace ? namespace + "." : ""}${key}`);
    }

    return { t: tNamespaced, changeLanguage };
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

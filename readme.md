# Vue3 Grizzly Localization

Vue3 Grizzly Localization is a simple, lightweight, and flexible localization library for Vue 3. It allows you to easily manage your application's translations and supports features like namespacing.

## Installation

Install Vue3 Grizzly Localization using npm:

```bash
npm install vue3-grizzly-localization
```

## Usage

First, initialize Grizzly Localization in your main.js file:

```js
import { createGrizzly } from "vue3-grizzly-localization";

const grizzly = createGrizzly({
  lang: "en",
  locales: {
    en: {
      hello: "Hello",
    },
    ua: {
      hello: "Привіт",
    },
  },
});

app.use(grizzly);
```

Then, use Grizzly Localization in your components:

```js
import { useGrizzly } from "vue3-grizzly-localization";

const { t } = useGrizzly();

console.log(t("hello")); // 'Hello'
```

You can also specify a namespace when calling useGrizzly:

```js
const { t } = useGrizzly("namespace");

console.log(t("key")); // 'Translation'
```

In this case, t('key') will return the translation for the key 'namespace.key'.

To change the current language, use the changeLanguage function:

```js
const { t, changeLanguage } = useGrizzly();

changeLanguage("ua"); // Change the language to Ukrainian
console.log(t("hello")); // 'Привіт'
```

You can also get a list of available languages using the availableLanguages function:

```js
const { availableLanguages } = useGrizzly();

console.log(availableLanguages()); // ['en', 'ua']
```

## Interpolation

Grizzly Localization supports interpolation of variables within translations. You can provide an object containing placeholder-value pairs as a second argument to the `t` function:

```js
import { useGrizzly } from "vue3-grizzly-localization";

const { t } = useGrizzly();

console.log(t("welcome", { name: "John" })); // 'Welcome, John'
```

For this to work, your locales object should contain placeholders wrapped in curly braces:

```js
const grizzly = createGrizzly({
  lang: "en",
  locales: {
    en: {
      welcome: "Welcome, {name}",
    },
    ua: {
      welcome: "Привіт, {name}",
    },
  },
});

app.use(grizzly);
```

Note: The placeholders in your strings must match the keys in the provided interpolation object.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

Vue3 Grizzly Localization is licensed under the MIT license.

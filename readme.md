# Vue3 Grizzly Localization

Vue3 Grizzly Localization is a simple, lightweight, and flexible localization library for Vue 3. It allows you to easily manage your application's translations and supports features like namespacing.

## Installation

Install Vue3 Grizzly Localization using npm:

```bash
npm install vue3-grizzly-localization
```

## Usage
First, initialize Grizzly Localization in your main.js file:

```bash
import { createGrizzly } from 'vue3-grizzly-localization';

const grizzly = createGrizzly({
  lang: 'en',
  locales: {
    en: {
      hello: 'Hello',
    },
    ua: {
      hello: 'Привіт',
    },
  },
});

app.use(grizzly);
```

Then, use Grizzly Localization in your components:

```bash
import { useGrizzly } from 'vue3-grizzly-localization';

const { t } = useGrizzly();

console.log(t('hello')); // 'Hello'
```

You can also specify a namespace when calling useGrizzly:

```bash
const { t } = useGrizzly('namespace');

console.log(t('key')); // 'Translation'
```
In this case, t('key') will return the translation for the key 'namespace.key'.
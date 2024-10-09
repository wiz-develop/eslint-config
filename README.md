# `@wiz-develop/eslint-config`

[![Version](https://img.shields.io/npm/v/@wiz-develop/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@wiz-develop/eslint-config?activeTab=versions)
[![License](https://img.shields.io/github/license/wiz-develop/eslint-config.svg?style=flat-square)](https://github.com/wiz-develop/eslint-config/blob/main/LICENSE)

wiz-develop's ESLint rules as an extensible shared config.

> [!WARNING]
> As of now, it does not work with eslint 9 as most plugins haven't updated yet. Please stay with eslint 8.57.0!

## Usage

> [!IMPORTANT]
> Only ESM and ESLint FlatConfig

### 1. Install dependencies (and peer dependencies)

```bash
npm install --save-dev @wiz-develop/eslint-config eslint
```

### 2. Configure ESLint

Within your ESLint config file (`eslint.config.js`):

```js
import { essentials } from '@wiz-develop/eslint-config';

export default [...essentials];
```

If you need TypeScript Support:

```diff
-import { essentials } from '@wiz-develop/eslint-config';
+import { essentials, typescript } from '@wiz-develop/eslint-config';

 export default [
   ...essentials,
+  ...typescript,
 ];
```

Must be added after `essentials`.

We also provide various other rule sets that you can configure to suit your project.

```js
import { essentials, jsdoc, node, typescript } from '@wiz-develop/eslint-config';

export default [...essentials, ...jsdoc, ...node, ...typescript];
```

|     Rule set | Summary                                               | Dependencies                                                                                                                                                                                                                                                                                     |
| -----------: | :---------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `essentials` | Contains basic, import, and promise recommended rules | [`eslint`](https://eslint.org/) <br> [`eslint-plugin-promise`](https://github.com/eslint-community/eslint-plugin-promise) <br> [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) <br> [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) |
|      `jsdoc` | Contains JSDoc recommended rules                      | [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)                                                                                                                                                                                                                            |
|       `node` | Contains Node.js recommended rules                    | [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n)                                                                                                                                                                                                                         |
| `typescript` | Contains TypeScript recommended rules                 | [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin) <br> [`@typescript-eslint/parser`](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser)                                               |
|        `vue` | Contains Vue recommended rules                        | [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue/tree/master) <br> [`vue-eslint-parser`](https://github.com/vuejs/vue-eslint-parser/tree/master)                                                                                                                                 |
|       `nuxt` | Contains Nuxt and Vue recommended rules               | [`@nuxt/eslint-config`](https://github.com/nuxt/eslint/tree/main/packages/eslint-config)                                                                                                                                                                                                         |

## Using Prettier

If you use [Prettier](https://prettier.io/) to format your code, you must disable any rules in `@wiz-develop/eslint-config/essentials` that conflict with Prettier.

### 1. Install dependencies

```bash
npm install --save-dev eslint-config-prettier
```

### 2. Configure ESLint

Within your ESLint config file:

```diff
 import { essentials, typescript } from '@wiz-develop/eslint-config';
+import prettier from 'eslint-config-prettier';


 export default [
   ...essentials,
   ...typescript,
+  prettier,
 ];
```

By adding the `prettier` configuration to `extends` in the ESLint configuration, you can disable all rules in `essentials` that conflict with Prettier.

## Migrate from an existing configuration

@wiz-develop/eslint-config contains various plugins related to different rule sets. Therefore, users don't need to install them separately. If you have installed them in your existing configuration, we recommend uninstalling them.

```bash
npm uninstall eslint-plugin-promise eslint-plugin-import eslint-plugin-unicorn \
  eslint-plugin-jsdoc \
  eslint-plugin-n \
  @typescript-eslint/eslint-plugin @typescript-eslint/parser \
  eslint-plugin-vue vue-eslint-parser \
  @nuxt/eslint-config
```

## Versioning

- Increment major version: Changed **error** rules.
- Increment minor version: Changed **warn** rules.
- Increment patch version: Not changed **error** and **warn** rules.

## License

Open source [licensed as MIT](https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/LICENSE).

## Example usages

### Nuxt

`eslint.config.mjs`

```js
import { createConfigForNuxt, essentials } from '@wiz-develop/eslint-config';
import prettier from 'eslint-config-prettier';

export default createConfigForNuxt({}, [prettier]).prepend(...essentials);
```

### TODO: And more.

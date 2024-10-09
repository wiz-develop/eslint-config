// @ts-check

import vitest from '@vitest/eslint-plugin';

/** @type {import('eslint').Linter.FlatConfig} */
export default {
  // https://eslint.org/docs/latest/use/configure/plugins#configure-plugins
  plugins: {
    vitest,
  },

  rules: {
    ...vitest.configs.recommended.rules,

    // Disallow duplicate setup and teardown hooks
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md
    'vitest/no-duplicate-hooks': ['error'],

    // enforce valid titles
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md
    'vitest/valid-title': [
      'error',
      {
        ignoreTypeOfDescribeName: true,
      },
    ],
  },
};

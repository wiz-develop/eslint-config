// @ts-check

import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptRuleSet from '../rules/typescript.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.@(ts|tsx|cts|mts|vue)'],

    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: true,
      },
    },

    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts', '.vue'],
      },
    },

    ...typescriptRuleSet,
  },
];

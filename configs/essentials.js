// @ts-check

import globals from 'globals';
import bestPracticesRuleSet from '../rules/best-practices.js';
import errorsRuleSet from '../rules/errors.js';
import es6RuleSet from '../rules/es6.js';
import importsRuleSet, { importNoExtraneousDevelopmentDependencies } from '../rules/imports.js';
import promiseRuleSet from '../rules/promise.js';
import styleRuleSet from '../rules/style.js';
import unicornRuleSet from '../rules/unicorn.js';
import variablesRuleSet from '../rules/variables.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { ignores: ['**/node_modules'] },

  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: globals.builtin,
    },
  },

  bestPracticesRuleSet,
  errorsRuleSet,
  es6RuleSet,
  styleRuleSet,
  variablesRuleSet,

  importsRuleSet,
  {
    files: importNoExtraneousDevelopmentDependencies,
    rules: {
      'import/no-default-export': ['off'],
    },
  },

  promiseRuleSet,

  unicornRuleSet.basic,
];

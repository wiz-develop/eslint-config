// @ts-check

import jsdocRuleSet from '../rules/jsdoc.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  jsdocRuleSet.ts,

  {
    files: ['**/*.@(js|cjs|mjs)'],
    ...jsdocRuleSet.js,
  },
];

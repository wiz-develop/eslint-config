// @ts-check

import typescriptEslint from '@typescript-eslint/eslint-plugin';
import bestPractices from './best-practices.js';
import variables from './variables.js';

// HACK: The following line is a workaround for the following TS error:
/** @type any */
const typescriptEslintPlugin = typescriptEslint;

/**
 * @remarks
 * The following rules are too strict and may reduce productivity, so they are specified as 'warn'.
 *
 * - no-unsafe-assignment
 * - no-unsafe-call
 * - no-unsafe-argument
 * - no-unsafe-member-access
 */
/** @type {import('eslint').Linter.FlatConfig} */
export default {
  // https://eslint.org/docs/latest/use/configure/plugins#configure-plugins
  plugins: {
    '@typescript-eslint': typescriptEslintPlugin,
  },

  rules: {
    ...typescriptEslint.configs['eslint-recommended'].overrides?.[0].rules,
    ...typescriptEslint.configs['strict-type-checked'].rules,
    ...typescriptEslint.configs['stylistic-type-checked'].rules,

    // Enforce dot notation whenever possible.
    // https://typescript-eslint.io/rules/dot-notation/
    'dot-notation': ['off'],
    '@typescript-eslint/dot-notation': bestPractices.rules?.['dot-notation'] ?? ['off'],

    // Disallow unused expressions.
    // https://typescript-eslint.io/rules/no-unused-expressions/
    // Replace 'no-unused-expressions' rule with '@typescript-eslint' version
    'no-unused-expressions': ['off'],
    '@typescript-eslint/no-unused-expressions': bestPractices.rules?.['no-unused-expressions'] ?? [
      'off',
    ],

    // https://typescript-eslint.io/rules/prefer-promise-reject-errors/
    // require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': ['off'],
    '@typescript-eslint/prefer-promise-reject-errors': bestPractices.rules?.[
      'prefer-promise-reject-errors'
    ] ?? ['off'],

    // Disallow throwing literals as exceptions.
    // https://typescript-eslint.io/rules/only-throw-error/
    // Replace 'no-throw-literal' rule with '@typescript-eslint' version
    'no-throw-literal': ['off'],
    '@typescript-eslint/only-throw-error': bestPractices.rules?.['no-throw-literal'] ?? ['off'],

    // Enforce naming conventions for everything across a codebase.
    // https://typescript-eslint.io/rules/naming-convention/
    // Replace 'camelcase' rule with '@typescript-eslint/naming-convention'
    camelcase: ['off'],
    // The `@typescript-eslint/naming-convention` rule allows `leadingUnderscore` and `trailingUnderscore` settings.
    // However, the existing `no-underscore-dangle` rule already takes care of this.
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    // Disallow the use of variables before they are defined.
    // https://typescript-eslint.io/rules/no-use-before-define/
    // Replace 'no-use-before-define' rule with '@typescript-eslint' version.
    'no-use-before-define': ['off'],
    '@typescript-eslint/no-use-before-define': variables.rules?.['no-use-before-define'] ?? ['off'],

    // Enforce type definitions to consistently use either `interface` or `type`.
    // https://typescript-eslint.io/rules/consistent-type-definitions/
    // 'Interface' has less functionality than 'type alias', so 'type' is recommended.
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    // Enforce consistent usage of type imports.
    // https://typescript-eslint.io/rules/consistent-type-imports/
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        // It's preferable to use inline type imports to avoid redundant import lines.
        // This feature is available in TypeScript 4.5 and later.
        fixStyle: 'inline-type-imports',
      },
    ],

    // Require Promise-like statements to be handled appropriately.
    // https://typescript-eslint.io/rules/no-floating-promises/
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        // Allow use of immediate functions because this may be needed within `React.useEffect`.
        ignoreIIFE: true,
      },
    ],

    // Disallow Promises in places not designed to handle them.
    // https://typescript-eslint.io/rules/no-misused-promises/
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        // Strict checks on promises with no return value are excessive. It's' extremely rare for this to cause a bug.
        checksVoidReturn: false,
      },
    ],

    // https://typescript-eslint.io/rules/restrict-template-expressions/
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowBoolean: true,
      },
    ],

    // https://typescript-eslint.io/rules/switch-exhaustiveness-check/
    // When using union type in the conditional expression of a switch statement,
    // there must be no missing cases (it is OK if `default` is written)
    '@typescript-eslint/switch-exhaustiveness-check': ['error'],

    // Require explicit return types on functions and class methods.
    // https://typescript-eslint.io/rules/explicit-function-return-type/
    // Type inference is sufficient for return type.
    '@typescript-eslint/explicit-function-return-type': ['off'],

    // Require explicit return and argument types on exported functions' and classes' public class methods.
    // https://typescript-eslint.io/rules/explicit-module-boundary-types/
    '@typescript-eslint/explicit-module-boundary-types': ['off'],

    // Disallow the `any` type.
    // https://typescript-eslint.io/rules/no-explicit-any/
    '@typescript-eslint/no-explicit-any': ['off', { ignoreRestArgs: true }],

    // Disallow assigning a value with type `any` to variables and properties.
    // https://typescript-eslint.io/rules/no-unsafe-assignment/
    '@typescript-eslint/no-unsafe-assignment': ['warn'],

    // Disallow calling a value with type `any`.
    // https://typescript-eslint.io/rules/no-unsafe-call/
    '@typescript-eslint/no-unsafe-call': ['warn'],

    // Disallow calling a function with a value with type `any`.
    // https://typescript-eslint.io/rules/no-unsafe-argument/
    '@typescript-eslint/no-unsafe-argument': ['warn'],

    // Disallow member access on a value with type `any`.
    // https://typescript-eslint.io/rules/no-unsafe-member-access/
    '@typescript-eslint/no-unsafe-member-access': ['warn'],

    // Enforce non-null assertions over explicit type casts.
    // https://typescript-eslint.io/rules/non-nullable-type-assertion-style/
    // You should use type assertion style "as" instead of non-null assertion style.
    '@typescript-eslint/non-nullable-type-assertion-style': ['off'],
  },
};

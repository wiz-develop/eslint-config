// @ts-check

/** @type {import('eslint').Linter.FlatConfig} */
export default {
  rules: {
    // Enforce “for” loop update clause moving the counter in the right direction
    // https://eslint.org/docs/rules/for-direction
    'for-direction': ['error'],

    // Enforces that a return statement is present in property getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],

    // disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': ['error'],

    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': ['error'],

    // Disallow comparisons to negative zero
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': ['error'],

    // disallow assignment in conditional expressions
    // https://eslint.org/docs/latest/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // disallow use of console
    // https://eslint.org/docs/latest/rules/no-console
    'no-console': [
      'warn',
      {
        allow: ['info', 'warn', 'error', 'time', 'timeEnd'],
      },
    ],

    // Disallows expressions where the operation doesn't affect the value
    // https://eslint.org/docs/rules/no-constant-binary-expression
    'no-constant-binary-expression': ['error'],

    // disallow use of constant expressions in conditions
    // https://eslint.org/docs/latest/rules/no-constant-condition
    'no-constant-condition': ['error'],

    // disallow control characters in regular expressions
    // https://eslint.org/docs/latest/rules/no-control-regex
    'no-control-regex': ['error'],

    // disallow use of debugger
    // https://eslint.org/docs/latest/rules/no-debugger
    'no-debugger': ['error'],

    // disallow duplicate arguments in functions
    // https://eslint.org/docs/latest/rules/no-dupe-args
    'no-dupe-args': ['error'],

    // Disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': ['error'],

    // disallow duplicate keys when creating object literals
    // https://eslint.org/docs/latest/rules/no-dupe-keys
    'no-dupe-keys': ['error'],

    // disallow a duplicate case label.
    // https://eslint.org/docs/latest/rules/no-duplicate-case
    'no-duplicate-case': ['error'],

    // disallow empty statements
    // https://eslint.org/docs/latest/rules/no-empty
    'no-empty': ['error'],

    // disallow the use of empty character classes in regular expressions
    // https://eslint.org/docs/latest/rules/no-empty-character-class
    'no-empty-character-class': ['error'],

    // disallow assigning to the exception in a catch block
    // https://eslint.org/docs/latest/rules/no-ex-assign
    'no-ex-assign': ['error'],

    // disallow double-negation boolean casts in a boolean context
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': ['error'],

    // disallow overwriting functions written as function declarations
    // https://eslint.org/docs/latest/rules/no-func-assign
    'no-func-assign': ['error'],

    // https://eslint.org/docs/rules/no-import-assign
    'no-import-assign': ['error'],

    // disallow function or variable declarations in nested blocks
    // https://eslint.org/docs/latest/rules/no-inner-declarations
    'no-inner-declarations': ['error'],

    // disallow invalid regular expression strings in the RegExp constructor
    // https://eslint.org/docs/latest/rules/no-invalid-regexp
    'no-invalid-regexp': ['error'],

    // disallow irregular whitespace outside of strings and comments
    // https://eslint.org/docs/latest/rules/no-irregular-whitespace
    'no-irregular-whitespace': ['error'],

    // Disallow Number Literals That Lose Precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    'no-loss-of-precision': ['error'],

    // Disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': ['error'],

    // disallow the use of object properties of the global object (Math and JSON) as functions
    // https://eslint.org/docs/latest/rules/no-obj-calls
    'no-obj-calls': ['error'],

    // Disallow new operators with global non-constructor functions
    // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
    'no-new-native-nonconstructor': ['error'],

    // Disallow returning values from Promise executor functions
    // https://eslint.org/docs/rules/no-promise-executor-return
    'no-promise-executor-return': ['error'],

    // disallow use of Object.prototypes builtins directly
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': ['error'],

    // disallow multiple spaces in a regular expression literal
    // https://eslint.org/docs/latest/rules/no-regex-spaces
    'no-regex-spaces': ['error'],

    // Disallow returning values from setters
    // https://eslint.org/docs/rules/no-setter-return
    'no-setter-return': ['error'],

    // disallow sparse arrays
    // https://eslint.org/docs/latest/rules/no-sparse-arrays
    'no-sparse-arrays': ['error'],

    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': ['error'],

    // Avoid code that looks like two expressions but is actually one
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': ['error'],

    // disallow unreachable statements after a return, throw, continue, or break statement
    // https://eslint.org/docs/latest/rules/no-unreachable
    'no-unreachable': ['error'],

    // Disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/rules/no-unreachable-loop
    'no-unreachable-loop': [
      'error',
      {
        ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
      },
    ],

    // disallow return/throw/break/continue inside finally blocks
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': ['error'],

    // disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': ['error'],

    // disallow use of optional chaining in contexts where the undefined value is not allowed
    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

    // Disallow Unused Private Class Members
    // https://eslint.org/docs/rules/no-unused-private-class-members
    // TODO: enable once eslint 7 is dropped (which is semver-major)
    'no-unused-private-class-members': ['off'],

    // Disallow useless backreferences in regular expressions
    // https://eslint.org/docs/rules/no-useless-backreference
    'no-useless-backreference': ['error'],

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // https://eslint.org/docs/rules/require-atomic-updates
    // NOTE: not enabled because it is very buggy
    'require-atomic-updates': ['off'],

    // disallow comparisons with the value NaN
    // https://eslint.org/docs/latest/rules/use-isnan
    'use-isnan': ['error'],

    // ensure that the results of typeof are compared against a valid string
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
};

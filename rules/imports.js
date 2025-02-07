// @ts-check

// @ts-ignore
import importPlugin from 'eslint-plugin-import';

const importNoExtraneousDevelopmentDependencies = [
  'test/**', // tape, common npm pattern
  'tests/**', // also common npm pattern
  'spec/**', // mocha, rspec-like pattern
  '**/__tests__/**', // jest pattern
  '**/__mocks__/**', // jest pattern
  'test.{js,jsx,ts,tsx}', // repos with a single test file
  'test-*.{js,jsx,ts,tsx}', // repos with multiple top-level test files
  '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
  '**/jest.config.{js,mjs,cjs,ts,mts,cts}', // jest config
  '**/jest.setup.js', // jest setup
  '**/webpack.config.js', // webpack config
  '**/webpack.config.*.js', // webpack config
  '**/vite.config.{js,mjs,cjs,ts,mts,cts}', // Vite config
  '**/rollup.config.js', // rollup config
  '**/rollup.config.*.js', // rollup config
  '**/protractor.conf.js', // protractor config
  '**/protractor.conf.*.js', // protractor config
  '**/karma.conf.js', // karma config
  '**/stylelint.config.{js,mjs,cjs,ts,mts,cts}', // stylelint config
  '**/.stylelintrc.js', // stylelint config
  '**/eslint.config.{js,mjs,cjs,ts,mts,cts}', // eslint config
  '**/.eslintrc.js', // eslint config
  '**/prettier.config.{js,mjs,cjs,ts,mts,cts}', // prettier config
  '**/.prettierrc.js', // prettier config
  '**/eslint-rules/**',
  '**/.storybook/**', // storybook config
  '**/*.{stories,story}.{js,jsx,ts,tsx}', // storybook stories
];

export { importNoExtraneousDevelopmentDependencies };

/** @type {import('eslint').Linter.FlatConfig} */
export default {
  // https://eslint.org/docs/latest/use/configure/plugins#configure-plugins
  plugins: {
    import: importPlugin,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.json', '.ts', '.mts'],
      },
      // Resolve the problem of incorrect recognition of alias paths by TypeScript compiler options.
      // TODO: https://github.com/import-js/eslint-plugin-import/issues/1485#issuecomment-535351922
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx'],
    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      String.raw`\.(coffee|scss|css|less|hbs|svg|json|jpg|jpeg|png|webp)$`,
    ],
    // TODO: Remove this once eslint-plugin-import supports Flat Config completely.
    // https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-1419518561
    'import/parsers': {
      espree: ['.js', '.cjs', '.mjs', '.jsx'],
    },
  },

  rules: {
    ...importPlugin.configs.recommended.rules,
    ...importPlugin.configs.errors.rules,

    // Static analysis:

    // ensure imports point to files/modules that can be resolved
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

    // ensure named imports coupled with named exports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md#when-not-to-use-it
    'import/named': ['error'],

    // ensure default import coupled with default export
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md#when-not-to-use-it
    'import/default': ['off'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
    'import/namespace': ['off'],

    // Helpful warnings:

    // disallow invalid exports, e.g. multiple defaults
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
    'import/export': ['error'],

    // do not allow a default import name to match a named export
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
    'import/no-named-as-default': ['error'],

    // warn on accessing default export property names that are also named exports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': ['error'],

    // disallow use of jsdoc-marked-deprecated imports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
    'import/no-deprecated': ['off'],

    // Forbid the use of extraneous packages
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
    // paths are treated both as absolute paths, and relative to process.cwd()
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: importNoExtraneousDevelopmentDependencies,
        optionalDependencies: false,
      },
    ],

    // Forbid mutable exports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': ['error'],

    // Module systems:

    // disallow require()
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
    'import/no-commonjs': ['off'],

    // disallow AMD require/define
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
    'import/no-amd': ['error'],

    // No Node.js builtin modules
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': ['off'],

    // Style guide:

    // disallow non-import statements appearing before import statements
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
    'import/first': ['error'],

    // disallow duplicate imports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
    'import/no-duplicates': ['error'],

    // disallow namespace imports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md
    'import/no-namespace': ['off'],

    // Ensure consistent use of file extension within the import path
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': ['off'],

    // ensure absolute imports are above relative imports and that unassigned imports are ignored
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    // TODO: enforce a stricter convention in module import order?
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'never',
      },
    ],

    // Require a newline after the last import/require in a group
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
    'import/newline-after-import': ['error'],

    // Require modules with a single export to use a default export
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
    'import/prefer-default-export': ['off'],

    // Restrict which files can be imported in a given folder
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
    'import/no-restricted-paths': ['off'],

    // Forbid modules to have too many dependencies
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
    'import/max-dependencies': ['off', { max: 10 }],

    // Forbid import of modules using absolute paths
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
    'import/no-absolute-path': ['error'],

    // Forbid require() calls with expressions
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': ['error'],

    // prevent importing the submodules of other modules
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md
    'import/no-internal-modules': [
      'off',
      {
        allow: [],
      },
    ],

    // Warn if a module could be mistakenly parsed as a script by a consumer
    // leveraging Unambiguous JavaScript Grammar
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
    // this should not be enabled until this proposal has at least been *presented* to TC39.
    // At the moment, it's not a thing.
    'import/unambiguous': ['off'],

    // Forbid Webpack loader syntax in imports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': ['error'],

    // Prevent unassigned imports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md
    // importing for side effects is perfectly acceptable, if you need side effects.
    'import/no-unassigned-import': ['off'],

    // Prevent importing the default as if it were named
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
    'import/no-named-default': ['error'],

    // Reports if a module's default export is unnamed
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': [
      'off',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],

    // This rule enforces that all exports are declared at the bottom of the file.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
    'import/exports-last': ['off'],

    // Reports when named exports are not grouped together in a single export declaration
    // or when multiple assignments to CommonJS module.exports or exports object are present
    // in a single file.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
    'import/group-exports': ['off'],

    // forbid default exports. this is a terrible rule, do not use it.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
    'import/no-default-export': ['error'],

    // Prohibit named exports. this is a terrible rule, do not use it.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md
    'import/no-named-export': ['off'],

    // Forbid a module from importing itself
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
    'import/no-self-import': ['error'],

    // Forbid cyclical dependencies between modules
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
    'import/no-cycle': ['error', { maxDepth: '∞' }],

    // Ensures that there are no useless path segments
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['error', { commonjs: true }],

    // dynamic imports require a leading comment with a webpackChunkName
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md
    'import/dynamic-import-chunkname': [
      'off',
      {
        importFunctions: [],
        webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
      },
    ],

    // Use this rule to prevent imports to folders in relative parent paths.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
    'import/no-relative-parent-imports': ['off'],

    // Reports modules without any exports, or with unused exports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
    // TODO: enable once it supports CJS
    'import/no-unused-modules': [
      'off',
      {
        ignoreExports: [],
        missingExports: true,
        unusedExports: true,
      },
    ],

    // Reports the use of import declarations with CommonJS exports in any module except for the main module.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
    'import/no-import-module-exports': [
      'error',
      {
        exceptions: [],
      },
    ],

    // Use this rule to prevent importing packages through relative paths.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
    'import/no-relative-packages': ['error'],

    // enforce a consistent style for type specifiers (inline or top-level)
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],

    // Reports the use of empty named import blocks.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md
    'import/no-empty-named-blocks': ['error'],
  },
};

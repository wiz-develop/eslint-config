// @ts-check

import typescriptEslintParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';
import { importNoExtraneousDevelopmentDependencies } from '../rules/imports.js';
import vueRuleSet from '../rules/vue.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.vue'],

    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue'],
        parser: typescriptEslintParser,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },

      // This allows Vue plugin to work with auto imports
      // https://github.com/vuejs/eslint-plugin-vue/pull/2422
      globals: {
        computed: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        defineProps: 'readonly',
        onMounted: 'readonly',
        onUnmounted: 'readonly',
        reactive: 'readonly',
        ref: 'readonly',
        shallowReactive: 'readonly',
        shallowRef: 'readonly',
        toRef: 'readonly',
        toRefs: 'readonly',
        watch: 'readonly',
        watchEffect: 'readonly',
      },
    },

    ...vueRuleSet,
  },

  {
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [...importNoExtraneousDevelopmentDependencies, '**/vue.config.{js,ts}'],
          optionalDependencies: false,
        },
      ],
    },
  },
];

// @ts-check

// @ts-ignore
import eslintVue from 'eslint-plugin-vue';

/** @type any */
const eslintVueplugin = eslintVue;

/** @type {import('eslint').Linter.FlatConfig} */
export default {
  // https://eslint.org/docs/latest/use/configure/plugins#configure-plugins
  plugins: {
    vue: eslintVueplugin,
  },

  processor: eslintVueplugin.processors['.vue'],

  rules: {
    ...eslintVueplugin.configs.base.rules,
    ...eslintVueplugin.configs['vue3-essential'].rules,
    ...eslintVueplugin.configs['vue3-strongly-recommended'].rules,
    ...eslintVueplugin.configs['vue3-recommended'].rules,

    // https://eslint.vuejs.org/rules/block-order.html
    'vue/block-order': ['error', { order: ['script[setup]', 'template', 'style[scoped]'] }],

    // Disable Vue's default stylistic rules. (Because Prettier is handling them.)
    'vue/html-closing-bracket-newline': ['off'],
    'vue/html-closing-bracket-spacing': ['off'],
    'vue/html-indent': ['off'],
    'vue/html-quotes': ['off'],
    'vue/max-attributes-per-line': ['off'],
    'vue/multiline-html-element-content-newline': ['off'],
    'vue/mustache-interpolation-spacing': ['off'],
    'vue/no-multi-spaces': ['off'],
    'vue/no-spaces-around-equal-signs-in-attribute': ['off'],
    'vue/singleline-html-element-content-newline': ['off'],
  },
};

// @ts-check

import { createConfigForNuxt as createConfigForNuxtForPrivate } from '@nuxt/eslint-config/flat';
import { importNoExtraneousDevelopmentDependencies } from '../rules/imports.js';
import vueRuleSet from '../rules/vue.js';

const nuxtDevelopmentDependencies = ['**/nuxt.config.{js,ts}', '**/app.config.{js,ts}'];

/** @type {typeof import('@nuxt/eslint-config/flat').createConfigForNuxt} */
export const createConfigForNuxt = (options, ...userConfigs) =>
  createConfigForNuxtForPrivate(
    { features: { typescript: { strict: true } }, ...options },
    ...userConfigs,
  )
    .prepend(vueRuleSet)
    .append({
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              ...importNoExtraneousDevelopmentDependencies,
              ...nuxtDevelopmentDependencies,
            ],
            optionalDependencies: false,
          },
        ],
      },
    })
    .append({
      files: nuxtDevelopmentDependencies,
      rules: {
        'import/no-default-export': ['off'],
      },
    })
    .remove('nuxt/import/rules');

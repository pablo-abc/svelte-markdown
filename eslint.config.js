import globals from "globals"
import pluginJs from "@eslint/js"
import svelteParser from 'svelte-eslint-parser'
import sveltePlugin from 'eslint-plugin-svelte'

export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {    
    name: 'Svelte Marked',
    ignores: [
      'vite.config.js.*',
      'more.eslint.config.js',
    ],
  },
  {
    name: 'Svelte files',
    files: [
      'src/**/*.svelte',
      'src/routes/**/*page.js',
      'src/routes/**/*layout.js',
    ],
    languageOptions: {
      parser: svelteParser,
      globals: {...globals.browser},
    },
    plugins: {
      // '@stylistic/js': stylisticJs,
      svelte: sveltePlugin,
    },
    rules: {
      // ...pluginJs.configs.recommended.rules,
      // ...recommended.rules,
      // '@stylistic/js/max-len': ['warn', {code: 250}],
      'no-undefined': 'off',
      'svelte/no-at-html-tags': 'off',
      'svelte/valid-compile': 'off',
    },
  },
]

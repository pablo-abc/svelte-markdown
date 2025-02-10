const globals = require('globals')
const js = require('@eslint/js')
const stylisticJs = require('@stylistic/eslint-plugin-js')
const eslintPluginSvelte = require('eslint-plugin-svelte')
const svelteEslintParser = require('svelte-eslint-parser')
const vitest = require('eslint-plugin-vitest')

const rules = {
  semi: ['warn', 'never'],
  quotes: ['error', 'single'],
  'dot-location': ['warn', 'property'],
  'guard-for-in': ['warn'],
  'no-multi-spaces': ['warn'],
  yoda: ['warn', 'never'],
  camelcase: ['error'],
  'comma-style': ['warn'],
  'comma-dangle': ['warn', 'always-multiline'],
  'block-spacing': ['warn'],
  'keyword-spacing': ['warn'],
  'no-trailing-spaces': ['warn'],
  'no-unneeded-ternary': ['warn'],
  'no-whitespace-before-property': ['warn'],
  'object-curly-spacing': ['warn', 'always'],
  'space-before-blocks': ['warn'],
  'space-in-parens': ['warn'],
  'arrow-spacing': ['warn'],
  'no-duplicate-imports': ['error'],
  'no-var': ['error'],
  'prefer-const': ['warn'],
  'no-unused-vars': [
    'warn',
    {
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
}


const [sveltePlugin, recommended] = eslintPluginSvelte.configs['flat/recommended']
const {svelte} = sveltePlugin.plugins

const config = [
  {
    name: 'Svelte Marked',
    // ignores: webappIgnores,
  },
  {
    name: 'Pure javascript files',
    files: [
      'src/**/*.js',
      'tests/**/*.js',
      'e2e/**/*.*js',
      '*.cjs',
      '*.config.js',
      '*.config.cjs',
    ],
    languageOptions: {
      sourceType: 'module',
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      // security,
    },
    rules: {
      ...js.configs.recommended.rules,
      '@stylistic/js/object-curly-newline': ['warn', {
        multiline: true,
        // 'consistent': true,
        minProperties: 5,
      }],
      '@stylistic/js/max-len': ['warn', {code: 250}],
      'no-undefined': 'warn',
    },
  },
  {
    name: 'Svelte files',
    files: [
      'src/**/*.svelte',
      'src/routes/**/*page.js',
      'src/routes/**/*layout.js',
    ],
    languageOptions: {
      parser: svelteEslintParser,
      globals: {...globals.browser},
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      svelte,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...recommended.rules,
      camelcase,
      '@stylistic/js/max-len': ['warn', {code: 250}],
      'no-undefined': 'warn',
      'svelte/no-at-html-tags': 'off',
      'svelte/valid-compile': 'off',
    },
  },
  {
    files: ['tests/**/*.js'],
    plugins: {vitest},
    rules: {
      ...vitest.configs.recommended.rules,
      'vitest/max-nested-describe': ['error', {max: 3}],
      'sonarjs/slow-regex': 'off',
    },
  },
]

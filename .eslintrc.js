module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
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
  },
};

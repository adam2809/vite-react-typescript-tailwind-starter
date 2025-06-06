module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "plugin:compat/recommended"
  ],
  env: {
    node: true,
    mocha: true,
    es6: true
  },
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}

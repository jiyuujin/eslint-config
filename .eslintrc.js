module.exports = {
    extends: ['eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    root: true,
    env: { node: true, es6: true },
    rules: {
      indent: ['error', 4, { SwitchCase: 1 }],
      quotes: ['error', 'single'],
      'linebreak-style': ['error', 'unix'],
      semi: ['error', 'never'],
        'no-unused-vars': 'warn',
        'no-var': 'error'
    }
}

'use strict'

module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:prettier/recommended'
    ],
    plugins: [
        'react',
        'prettier'
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single'],
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'never'],
        'no-unused-vars': 'warn',
        'no-var': 'error'
    }
}

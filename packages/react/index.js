'use strict'

module.exports = {
    extends: [
        'react-app',
        'plugin:react/recommended'
    ],
    plugins: [
        'react',
        'import',
        'flowtype'
    ],
    parser: 'babel-eslint',
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single'],
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'never'],
        'no-unused-vars': 'warn',
        'no-var': 'error'
    }
}

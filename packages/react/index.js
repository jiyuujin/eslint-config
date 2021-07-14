'use strict'

module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended'
    ],
    plugins: [
        'react',
        'react-hooks',
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
        'no-var': 'error',
       'react-hooks/rules-of-hooks': 'error',
        'prettier/prettier': [
            'error',
            // .prettierrc.js でも設定可能
            {
                'singleQuote': true,
                'semi': false,
                'tabWidth': 4
            }
        ]
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}

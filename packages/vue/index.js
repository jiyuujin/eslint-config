'use strict'

module.exports = {
    extends: ['plugin:vue/recommended'],
    plugins: [
        'vue',
        'vue-a11y'
    ],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single'],
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'never'],
        'no-unused-vars': 'warn',
        'no-var': 'error'
    }
}

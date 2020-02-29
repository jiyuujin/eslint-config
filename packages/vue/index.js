'use strict'

module.exports = {
    extends: [
        'plugin:vue/recommended',
        'plugin:prettier/recommended'
    ],
    plugins: [
        'vue',
        'vue-a11y'
    ],
    parser: 'vue-eslint-parser',
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single'],
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'never'],
        'no-unused-vars': 'warn',
        'no-var': 'error',
        // PrettierとESLintの間にvoid elementsでのself-closingを許容するか、しないかという競合が発生
        'vue/html-self-closing': [
            'error',
            {
                'html': {
                    'void': 'always'
                }
            }
        ],
        'vue/max-attributes-per-line': 'off',
        'prettier/prettier': [
            'error',
            {
                'singleQuote': true,
                'semi': false
            }
        ]
    }
}

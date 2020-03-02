'use strict'

module.exports = {
    extends: [
        'plugin:vue/recommended',
        'plugin:prettier/recommended'
    ],
    plugins: [
        'vue',
        'vue-a11y',
        'prettier'
    ],
    parser: 'vue-eslint-parser',
    rules: {
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
            // .prettierrc.js でも設定可能
            {
                'singleQuote': true,
                'semi': false
            }
        ]
    }
}

module.exports = {
    extends: ['eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    root: true,
    env: { node: true, es6: true },
    rules: {
        indent: ['error', 4],
        quotes: [2, 'single'],
        'linebreak-style': [2, 'unix'],
        semi: [0, 'never'],
        'no-unused-vars': 1,
        'no-var': 'error'
    }
}

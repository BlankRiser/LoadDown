module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        amd: true,
        node: true,
        es6: true
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'no-nested-ternary': 'off',
        'import/prefer-default-export': 'off',
        'no-const-assign': 1,
        'no-extra-semi': 0,
        semi: 0,
        'no-fallthrough': 0,
        'no-empty': 0,
        'no-mixed-spaces-and-tabs': 1,
        'no-redeclare': 1,
        'no-this-before-super': 1,
        'no-undef': 1,
        'no-unreachable': 1,
        'no-unused-vars': 1,
        'no-use-before-define': 0,
        'constructor-super': 1,
        curly: 0,
        eqeqeq: 1,
        'func-names': 1,
        'valid-typeof': 1
    }
};

module.exports = {
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'jest',
        'react',
        '@typescript-eslint',
    ],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'linebreak-style': [0, 'error', 'windows'],
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'no-thorw-literal': 'off',
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
};

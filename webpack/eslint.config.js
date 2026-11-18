const js = require('@eslint/js');

module.exports = [
    js.configs.recommended,

    {
        files: ['src/**/*.js', 'src/**/*.ts'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'error',
        },
    },
];
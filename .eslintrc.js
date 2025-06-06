module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        es2022: true,
    },
    extends: ["vee-validate-migrator", 'plugin:vue/vue3-recommended', 'google', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        "vee-validate-migrator/validation-provider": "error",
        'no-console': import.meta.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': import.meta.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
};

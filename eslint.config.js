import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import prettierConfig from 'eslint-config-prettier'

export default [
    {
        ignores: ['dist/', 'node_modules/', '.vite/'],
    },
    js.configs.recommended,
    reactHooks.configs['recommended-latest'],
    reactRefresh.configs.vite,
    prettierPlugin,
    prettierConfig,
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        rules: {
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
            'prettier/prettier': 'error',
        },
    },
]

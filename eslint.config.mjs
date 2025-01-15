import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { react: pluginReact, prettier: pluginPrettier },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        version: 'detect', // Reactのバージョンを自動検出
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Reactをスコープに入れるルールを無効化
      'prettier/prettier': 'error', // PrettierのルールをESLintでチェック
    },
  },
  prettier, // Prettierの競合ルールを無効化
];

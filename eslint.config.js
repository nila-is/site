import eslintPluginAstro from 'eslint-plugin-astro';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    rules: {
      // Customize your rules here
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/triple-slash-reference': 'off',
      'jsx-a11y/no-redundant-roles': 'warn',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', 'public/**'],
  },
  // Keep this last: disables rules that conflict with Prettier formatting
  eslintConfigPrettier,
];

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
      // Astro components commonly have a `role` prop; avoid treating those as ARIA roles.
      'jsx-a11y/aria-role': ['error', { ignoreNonDOM: true }],
    },
  },
  {
    files: ['**/*.astro'],
    rules: {
      // Relax rules for inline scripts in Astro files
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-var': 'off',
      'prefer-rest-params': 'off',
    },
  },
  {
    // Inline scripts inside .astro get virtual filenames like `Component.astro/*.js`
    files: ['**/*.astro/*.js', '**/*.astro/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-var': 'off',
      'prefer-rest-params': 'off',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', 'public/**'],
  },
  // Keep this last: disables rules that conflict with Prettier formatting
  eslintConfigPrettier,
];

import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,
  jsdoc.configs['flat/recommended'],
  prettier,
  {
    plugins: { jsdoc },
    rules: {},
  },
];

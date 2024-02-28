import js from "@eslint/js";
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  js.configs.recommended,
  jsdoc.configs['flat/recommended'],
  {
    plugins: { jsdoc },
    rules: {}
  }
];

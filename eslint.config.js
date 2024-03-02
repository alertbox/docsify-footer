import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import prettier from 'eslint-config-prettier'
import jsdoc from 'eslint-plugin-jsdoc'

export default [
  jsdoc.configs['flat/recommended'],
  js.configs.recommended,
  prettier,
  stylistic.configs['recommended-flat'],
  {
    rules: {},
    plugins: { jsdoc },
  },
]

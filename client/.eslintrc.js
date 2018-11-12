module.exports = {
  extends: ['airbnb/base', 'eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['react', 'import', 'prettier'],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': 'webpack'
  },
  rules: {
    'no-undef': 0,
    'no-console': ['warn', { allow: ['warn'] }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ],
    'import/no-unresolved': ['error', { caseSensitive: false }],
    // React/JSX rules
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 0,
    'react/jsx-key': 'error',
    'react/no-array-index-key': 'warn',
    'react/jsx-wrap-multilines': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline'
      }
    ],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-pascal-case': ['error'],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ]
  }
};

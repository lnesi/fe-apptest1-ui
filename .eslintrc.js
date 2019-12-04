const flowRules = require('./flow.rules');
module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  ignorePatterns: ['node_modules/'],
  plugins: ['react', 'jest', 'flowtype'],
  rules: { ...flowRules },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  }
};

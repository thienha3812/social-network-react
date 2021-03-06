module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {      
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      extends : "standard",
      parser : "babel-eslint"
    },
    plugins: [
      'react',
    ],
    rules: {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "max-len": [2, 1500, 4]
    },
  };
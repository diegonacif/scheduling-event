module.exports = {
  env: { browser: true, node: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { 
    ecmaFeatures: { 
      jsx: true,
    },
    ecmaVersion: 'latest', 
    sourceType: 'module' 
  },
  settings: { react: { version: 'detect' } },
  plugins: ['react', 'react-hooks', 'react-refresh'],
  rules: {
    'react/prop-types': 'off',
    "react-refresh/only-export-components": 'warn',
    "react-hooks/exhaustive-deps": "off",
    'no-unused-vars': 'warn',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx'] },
    ],
  },
}

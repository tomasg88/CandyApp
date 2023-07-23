module.exports = {
  env: {
    'react-native/react-native': true,
  },
  extends: '@react-native-community',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-native'],
  root: true,
  rules: {
    'react/jsx-sort-props': 2,
  },
};

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
    // 0 = off, 1 = warn, 2 = error
    'react/jsx-sort-props': 2,
    'react-native/no-color-literals': 1,
    'react-native/no-inline-styles': 2,
    // text always inside <Text> component
    'react-native/no-raw-text': 2,
    'react-native/no-unused-styles': 2,
    'react-native/sort-styles': 2,
  },
};

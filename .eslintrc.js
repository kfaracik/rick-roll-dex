module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:import/errors', 'plugin:import/warnings'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  plugins: [
    'react',
    'react-native',
    'simple-import-sort',
    'check-file',
    'import',
    'jest',
  ],
};

module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native|react-native-vector-icons|@react-navigation)',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/@testing-library/jest-native/extend-expect',
  ],
};

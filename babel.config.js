module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@shared/components': './src/shared/components/index.ts',
          '@shared/utils': './src/shared/utils/index.ts',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};

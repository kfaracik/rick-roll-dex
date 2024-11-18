module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
          '@shared/components': './src/shared/components/index.ts',
          '@shared/utils': './src/shared/utils/index.ts',
        },
      },
    ],
  ],
};

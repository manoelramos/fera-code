module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    test: {
      plugins: ['react-native-config-node/transform'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '~': './src',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    test: {
      plugins: ['transform-es2015-modules-commonjs'],
    },
  },
};

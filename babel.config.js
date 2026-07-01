module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
    // NOTE: The react-native-reanimated/worklets babel plugin is injected
    // automatically by babel-preset-expo when the library is installed.
  };
};

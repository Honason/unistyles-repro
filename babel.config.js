module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo'
    ],
    plugins: [
      ['react-native-unistyles/plugin', {root: 'components'}],
      '@babel/plugin-proposal-export-namespace-from'
    ]
  };
};

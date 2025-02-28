const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const config = {
  resolver: {
    extraNodeModules: {
      assets: path.resolve(__dirname, 'assets/Images'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

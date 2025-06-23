// babel.config.js
module.exports = {
  presets: ['babel-preset-expo'], // Use this preset for Expo projects
  plugins: [
    'react-native-reanimated/plugin', // THIS LINE MUST BE LAST
  ],
};
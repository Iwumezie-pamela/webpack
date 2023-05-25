const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    beautify: path.resolve(__dirname, './dev/index.js'),
  },

  output: {
    path: path.resolve(__dirname, './build/'),
    filename: '[name].min.js',
  },
};

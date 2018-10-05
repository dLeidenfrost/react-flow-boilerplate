const webpack = require('./webpack.config');
const path = require('path');

module.exports = {
  ...webpack,
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001,
  }
}
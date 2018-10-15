const webpack = require('./webpack.config');
const path = require('path');

module.exports = {
  ...webpack,
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 3001,
    historyApiFallback: true,
  }
}
// This config is based on webpack 4 -> https://webpack.js.org/concepts/
const path = require('path');
// https://github.com/webpack-contrib/mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

// Custom style loader to create a large css file
const styleLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: path.resolve(__dirname, 'dist'),
  }
};
// Module general definition
module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devtool: 'inline-source-map',
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        // Using babel 7 https://babeljs.io/docs/en/v7-migration
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [styleLoader, 'css-loader', 'sass-loader']
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].bundle.css', chunkFilename: '[id].css' }),
    new FlowBabelWebpackPlugin(),
  ]
}
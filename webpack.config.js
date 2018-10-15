// This config is based on webpack 4 -> https://webpack.js.org/concepts/
const path = require('path');
// https://github.com/webpack-contrib/mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// https://github.com/zhirzh/flow-babel-webpack-plugin#readme
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
// https://github.com/jantimon/html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Custom style loader to create a large css file
const styleLoader = {
  loader: MiniCssExtractPlugin.loader,
};
const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    localIdentName: '[name]__[local]__[hash:base64:5]',
  }
};
// https://github.com/webpack-contrib/sass-loader
const sassLoader = {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
  }
};
// Module general definition
module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        // Using babel 7 https://babeljs.io/docs/en/v7-migration
        use: ['babel-loader'],
      },
      {
        test: /\.(s*)css$/,
        use: [styleLoader, cssLoader, sassLoader]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          }
        }]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React flow biolerplate',
      template: path.resolve(__dirname, 'src/template/index.html'),
      hash: true,
    }),
    new MiniCssExtractPlugin({ filename: '[name].bundle.css', chunkFilename: '[id].css' }),
    new FlowBabelWebpackPlugin(),
  ]
}
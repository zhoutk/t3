/**
 * Author: gaopeng
 * Date：  2017/7/7
 * Time:   16:31
 */
const { resolve } = require('path');
const webpack     = require('webpack');

var config = {
  entry: {
    vendor: [
      'react',
      'react-dom'
    ],
    app: [
      './client/index.js'
    ]
  },

  output: {
    path: resolve(__dirname, 'assets/js'),
    filename: 'app.js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
    publicPath: './assets/js/'
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = config;
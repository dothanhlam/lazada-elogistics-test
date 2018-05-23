const babelp = require('babel-polyfill')
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

  entry: ['babel-polyfill', './src/main'],

  output: {
    path: __dirname,
    filename: 'index.js'
  },

  devServer: {
    contentBase: './src/',
    inline: true,
    port: 3000
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['eslint']
      }
    ],

    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties'
          ],
          presets: ['es2015', 'react', 'react-hmre', 'stage-1']
        }
      }
    ]

  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new ExtractTextPlugin('public/style.css', {
      allChunks: true
    })
  ],

}
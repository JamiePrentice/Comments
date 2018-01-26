const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  watch: true,
  entry: './comments.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './output.js'
  },
  module: {
    loaders: [
        { test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader") }
    ]
},
  plugins: [
    new ExtractTextPlugin("./output.css"),
    new UglifyJSPlugin(),
  ]
};
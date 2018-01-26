var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './comments.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new UglifyJSPlugin({
      // compress: { warnings: false },
      // minimize: true
    })
  ]
};
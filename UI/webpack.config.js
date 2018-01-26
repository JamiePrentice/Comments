const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  watch: true,
  entry: './comments.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          alias: {
            "../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
          }
        }
      }, {
        loader: "sass-loader",
        options: {
          includePaths: [
            path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")
          ]
        }
      }]
    }
  ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};
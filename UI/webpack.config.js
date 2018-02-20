const path = require("path");
const glob = require('glob');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    watch: true,
    entry: "./webpack-targets.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./brandname_latest.js"
    },
    module: {
        rules: [{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css-loader")
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./brandname_latest.css"),
        new UglifyJSPlugin({
            uglifyOptions: {
                ie8: false,
                ecma: 8,
                mangle: true,
                compress: true,
                warnings: true,
            }
        }),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'goal.html')),
            minimize: true
        }),
        new CompressionPlugin({
            algorithm: 'gzip'
        })
    ]
};
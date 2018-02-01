const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    watch: true,
    entry: "./webpack-targets.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./output.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ['css-loader'],
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
        new ExtractTextPlugin("./output.css"),
        new UglifyJSPlugin({
            uglifyOptions: {
                ie8: false,
                ecma: 8,
                mangle: true,
                compress: true,
                warnings: true,
            }
        })
    ]
};
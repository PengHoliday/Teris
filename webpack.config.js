const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: __dirname + '/src/game.js',
    output: {
        path: __dirname + '/build/',
        filename: '[name]-[hash].js'
    },
    // devServer: {
    //     port: "9000",
    //     inline: true,
    //     historyApiFallback: true,
    //     hot: true
    // },
    module: {
        rules: [{
            test: '/\.css$/',
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader?modules!postcss-loader"
            })
        }, {
            test: /\.js$/,
            exclude: /node_modules/, //编译打包时需要排除 node_modules 文件夹
            loader: "babel-loader"
        }]
    },
    plugins: [
        new HtmlPlugin({
            template: __dirname + '/src/index.tmpl.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin(),
        // new ExtractTextPlugin("style.css")
    ]
}
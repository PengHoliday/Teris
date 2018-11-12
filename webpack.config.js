const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: __dirname + '/src/game.js',
    output: {
        path: __dirname + '/build/',
        filename: 'js/bundle.js'
    },
    module: {
        rules: [ {
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
    ]
}
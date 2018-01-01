/**
 * Created by Administrator on 2017/12/31.
 */
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(baseWebpackConfig, {
    entry: {
        index: ['webpack-hot-middleware/client?noInfo=false&reload=true', path.resolve(__dirname, '../src/index'), path.resolve(__dirname, '../src/common/css/index')]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
        sourceMapFilename: '[file].map'
    },
    devtool: "source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            "React": "react",
            "ReactDOM": "react-dom",
            "_": "lodash"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../template/index.html'),
            inject: true
        })
    ]
})
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
        index: [path.resolve(__dirname,'../src/index'),path.resolve(__dirname, '../src/common/css/index')]
    },
    output: {
        path: path.resolve(__dirname, '../server/static'),
        publicPath: '/',
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[id].[chunkhash:8].js',
        sourceMapFilename: '[file].map'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new webpack.ProvidePlugin({
            "React": "react",
            "ReactDOM": "react-dom"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../template/index.html'),
            inject: true
        })
    ]
})
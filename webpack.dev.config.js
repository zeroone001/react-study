const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const path = require('path');
const webpack = require('webpack');

console.log('test', path.join(__dirname, 'dist'));
let devConfig = webpackMerge(baseConfig, {
    output: {
        filename: '[name].[hash:7].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        port: 9000,
        host: '0.0.0.0',
        compress: true,
        inline: true,
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        overlay: true,
        disableHostCheck: true,
        historyApiFallback: true,
        stats: {
            colors: true,
            chunks: false,
            children: false,
            entrypoints: false,
            modules: false
        },
    },
    devtool: 'source-map',
    mode: 'development',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]

    // module: {
    //     rules: [

    //     ]
    // },
    
});

module.exports = devConfig;

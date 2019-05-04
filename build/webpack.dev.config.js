const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const path = require('path');

let devConfig = webpackMerge(baseConfig, {
    entry: {
        app: path.resolve(__dirname, '../src/index.jsx')
    },
    output: {
        filename: '[name].[hash:7].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: './'
    },
    devServer: {
        port: 9000,
        host: '::',
        compress: true,
        contentBase: path.resolve(__dirname, '../dist'),
        watchContentBase: true,
        overlay: true,
        disableHostCheck: true,
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
    // module: {
    //     rules: [

    //     ]
    // },
    
});

module.exports = devConfig;

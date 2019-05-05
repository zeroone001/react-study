const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

let devConfig = webpackMerge(baseConfig, {
    output: {
        filename: '[name].[hash:7].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(c|sa|sc)ss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')({
                                    'browsers': ['> 1%', 'last 10 versions']
                                })
                            ]  
                        }
                    },
                    'sass-loader'
                ]
            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
});

module.exports = devConfig;

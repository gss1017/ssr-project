
const path = require('path');
const webpackMerge = require('webpack-merge');
const config = require('./webpack.base.config.js');

const clientConfig = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]_[local]_[hash:base64:5]'
                            },
                            importLoaders: 1,
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = webpackMerge(config, clientConfig);

const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpackMerge = require('webpack-merge');
const config = require('./webpack.base.config.js');

const serverConfig = {
    target: 'node',
    entry: './server/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    externals: [
        nodeExternals()
    ],
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: [
                    'isomorphic-style-loader',
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

module.exports = webpackMerge(config, serverConfig);

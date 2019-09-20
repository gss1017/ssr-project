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
    ]
};

module.exports = webpackMerge(config, serverConfig);


const path = require('path');
const webpackMerge = require('webpack-merge');
const config = require('./webpack.base.config.js');

const clientConfig = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js'
    }
};

module.exports = webpackMerge(config, clientConfig);

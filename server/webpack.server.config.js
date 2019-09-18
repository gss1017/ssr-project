const path = require('path');
const  nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: ['react', 'stage-2',
                        ['env', {
                            targets: {
                                browsers: ['last 2 version'],
                            },
                        }]
                    ]
                }
            }
        ]
    },
    externals: [
        nodeExternals()
    ]
};

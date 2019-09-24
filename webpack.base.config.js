
module.exports = {
    mode: 'development',
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
    }
};

'use strict';

let path = require('path');

module.exports = {
    mode: 'development',
    // entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        // path: path.resolve(__dirname, 'dist/js')
    },
    watch: false,

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        targets: "defaults",
                        presets: [
                            ['@babel/preset-env', {
                                debug: true,
                                corejs: 3,
                                useBuiltIns: 'usage'
                            }]
                        ]
                    }
                }
            }
        ]
    }
};

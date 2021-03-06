const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const METADATA = require('./metadata.js');

module.exports = function (env) {
    return webpackMerge(baseConfig(), {
        devtool: 'inline-source-map',

        // Webpack Development Server config
        devServer: {
            port: METADATA.port,
            host: METADATA.host,
            historyApiFallback: true,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000,
                ignored: /node_modules/
            }
        }
    })
};
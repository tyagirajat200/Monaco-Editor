'use strict';
import * as webpack from 'webpack';
module.exports = (config: webpack.Configuration) => {
    if (config.resolve) {
        config.resolve.alias = [];
        config.resolve.fallback = {
            buffer: require.resolve('buffer'),
            crypto: require.resolve('crypto-browserify'),
            path: require.resolve('path-browserify'),
            os: require.resolve('os-browserify/browser'),
            stream: require.resolve('stream-browserify'),
            net: false,
        };
    }

    return config;
};

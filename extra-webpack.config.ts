'use strict';
import * as webpack from 'webpack';
module.exports = (config: webpack.Configuration) => {
    const item = {
        alias: require.resolve('monaco-languageclient/vscode-compatibility'),
        name: 'vscode',
    };
    if (config.resolve) {
        config.resolve.alias = [];
        config.resolve.alias.push(item);
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

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    "resolve": {
        "fallback": {
            "path": require.resolve("path-browserify")
        }
    },
    plugins: [
        new MonacoWebpackPlugin()
    ]
}
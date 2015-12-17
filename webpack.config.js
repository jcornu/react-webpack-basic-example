const path = require('path');
const webpack = require('webpack');

module.exports = {

    // Gives you sourcemaps without slowing down rebundling
    devtool: 'eval',
    entry: [
        "webpack-hot-middleware/client?reload=true",
        path.join(__dirname, 'client.js')
    ],
    resolve: {
        alias: {
            'components': path.join(__dirname, 'components'),
            'constants': path.join(__dirname, 'constants'),
            'containers': path.join(__dirname, 'containers'),
            'middleware': path.join(__dirname, 'middleware'),
            'utils': path.join(__dirname, 'utils')
        }
    },
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    }
};

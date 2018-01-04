const path = require('path');
module.exports = {
    entry: ['babel-polyfill', './src/js/index.jsx'],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: 'build'
    },
    devServer: {
        // inline: true,
        contentBase: './build',
        port: '8080'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2017', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
            },
            { // Used for Bootstrap Less Source Files
                test: /\.less/, 
                loader: 'style!css!less'
            },
            { 
                test: /\.(woff2|woff|ttf|svg|eot)$/, 
                loader: 'file-loader'
            },
            {
                test: /\.png/,
                loader: 'ignore-loader'
            }
        ]
    },
    devtool: 'source-map'
}
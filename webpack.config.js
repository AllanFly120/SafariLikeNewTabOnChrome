const path = require('path');
module.exports = {
    entry: './src/js/index.jsx',
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
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map'
    // externals: {
    //     'react': 'React'
    // }
    // resolve: {
    //     extensions: ['', '.js', '.jsx']
    // }
}
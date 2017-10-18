const path = require('path');
module.exports = {
    entry: './src/js/index.jsx',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: 'build'
    },
    devServer: {
        inline: true,
        contentBase: './src',
        port: '6666'
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
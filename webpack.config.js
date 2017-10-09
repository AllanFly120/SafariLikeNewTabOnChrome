const path = require('path');
module.exports = {
    entry: './src/js/index.jsx',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
    // externals: {
    //     'react': 'React'
    // }
    // resolve: {
    //     extensions: ['', '.js', '.jsx']
    // }
}
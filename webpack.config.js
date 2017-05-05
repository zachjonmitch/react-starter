var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './components/index.js',
    output: { path: __dirname + '/public', filename: 'bundle.js' },
    watch: true,
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'react-hmre']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        stats: 'errors-only',
        open: true
    }
}
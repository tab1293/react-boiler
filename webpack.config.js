module.exports = {
    entry: ['./index.js'],
    output: {
        path:     'dist/',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: [/\.es6$/, /\.jsx$/, /\.js$/],
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ],
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    },
}

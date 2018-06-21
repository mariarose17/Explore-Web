var config = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        historyApiFallback: true,
        port: 3200,
    },
    module: {
        rules: [
            {
                test: /\.js?$/, // search for js files 
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'] // use es2015 and react
                }
            }
        ]
    }
}

module.exports = config;
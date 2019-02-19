const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'index.js'),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};
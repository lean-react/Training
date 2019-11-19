const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            { 
                test: /\.js(x)?$/,
                exclude: /node_modules/, 
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
}
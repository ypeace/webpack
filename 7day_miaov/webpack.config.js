var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/app.js',

    output: {
        path: path.resolve(__dirname, 'dist'),//打包到哪里
        filename: 'app.js'//
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif|JPG)$/,
                use: ['file-loader'],

            },
            {
                test: /\.(jpg|png|gif|JPG)$/,
                use: ['url-loader'],
                options:{
                    limit:10000
                }
            }
        ]
    },

    devServer: {
        open: true,
        port: 9000
    }
};
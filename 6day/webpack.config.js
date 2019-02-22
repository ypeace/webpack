var webpack = require('webpack');

var path = require('path');


module.exports = {
    entry: {
        'pageA': './src/pageA',
        'pageB':'./src/pageB',
        'vendor':['lodash']//将第三方的包单独打包
    },

    output: {
        path: path.resolve(__dirname, './dist'),//输出的路径
        publicPath:'./dist/',
        filename: '[name].bundle.js',//输出的名称
        chunkFilename: '[name].chunk.js',//新的 chunk 生成
    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            async:'async-common',
            // children:true,

            minChunks:2,
        }),

        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor,webpackDuli'],
            minChunks: Infinity
        }),


    ]

};
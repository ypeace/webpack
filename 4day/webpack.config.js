var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'pageA':'./src/pageA',
        'pageB':'./src/pageB',
        'vendor':['lodash']
    },

    output: {
        path:path.resolve(__dirname,'./dist'),//输出的路径
        filename:'[name].bundle.js',//输出的名称
        chunkFilename:'[name].chunk.js',//新的 chunk 生成
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            minChunks:2,
            chunks:['pageA','pageB']
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'vendor',
        //     minChunks:Infinity
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'manifest',
        //     minChunks:Infinity
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor','manifest'],
            minChunks:Infinity
        })
    ]


};
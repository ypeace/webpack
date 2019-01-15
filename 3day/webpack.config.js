module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        filename: '[name].[hash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,//匹配规则
                // use:'babel-loader',//用什么来处理
                use: {
                    loader: 'babel-loader',//使用
                    options: {//给load指定参数
                        // presets: [
                        //     ['@babel/preset-env', {
                        //     targets: {
                        //         browsers: [
                        //             // '>1%',
                        //             'last 2 versions']
                        //         // chrome:'52'
                        //
                        //     }
                        // }]
                        // ]
                    }
                },//用什么来处理
                exclude: '/node_modules/',//排除在规则之外的


            }
        ]
    }

};
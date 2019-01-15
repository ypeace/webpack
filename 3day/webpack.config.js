module.exports = {
    entry:{
        app:'./app.js'
    },
    output:{
        filename:'[name].[hash:5].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,//匹配规则
                use:'babel-loader',//用什么来处理
                exclude:'node_modules',//排除在规则之外的

            }
        ]
    }

};
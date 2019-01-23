var path = require('path');

module.exports = {
    entry: {
        app:'./src/app.js'
    },

    output: {
        path:path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader:'css-loader'
                    }//顺序是必要的 先后面再前面 先处理import 然后吧css放在页面
                ]
            }
        ]
    }

};
module.exports = {
    entry:{
        index:'index.js',
        vendor:'vendor.js'
    },
    output:{
        filename:'[name].min'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:'css-loader'
            }
        ]
    },

    plugins:[
        new webpack.optimizee
    ]
}

module.exports = {
    entry:{
        app:'./app.js',
    },
    output:{
        filename:'[name].[hash:5].js'
    },

};
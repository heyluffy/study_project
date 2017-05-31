const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/app.js",
    output: {
        path: __dirname + "/build",
        filename: "[name][hash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname +  '/app/index.tmpl.html' // 如果不指定一个模版文件，将生成一个默认的模版
          })
    ],
    module: {
        rules: [
            {
            test: /\.json$/, //配置处理文件名的正则表达式
            use: [
              "json-loader"
            ]
          },
            {
                test: /\.js$/, //配置处理文件名的正则表达式
                use: [
                    {loader: "babel-loader"}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {loader: "css-loader",
                      options: {
                        // modules: true,
                        importLoader: 1
                      }
                    },
                    {loader: "postcss-loader",
                          options: {
  plugins: (loader) => [
    require('autoprefixer')()
                        ]
                      }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true, //跳转始终指向index.html,但页面应用非常适用
        inline: true, //热刷新
        port: 8111
    }
}
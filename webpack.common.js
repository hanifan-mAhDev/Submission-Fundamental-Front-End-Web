const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
   entry: "./src/app.js",
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [
               {
                  loader: "style-loader"
               },
               {
                  loader: "css-loader"
               }
            ]
         },
         {
            test: /\.scss$/,
            use: [
                {
                    loader: "sass-loader"
                }
            ],
        },
        {
            test: /\.(jpg|png)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'img/'
                    }
                }
            ]
        },
        {
            test: /\.html$/,
            use: ['html-loader']
        }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "./src/index.html",
         filename: "index.html"
      })
   ]
}
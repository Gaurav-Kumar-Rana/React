const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, "src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name]-[contenthash].js',
        clean: true,
        assetModuleFilename: '[name]-[contenthash][ext]'
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true

    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(webp|png|jpg|jpge)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "My webpack app",
            filename: "index.html",
            template: "src/template.html"
        })
    ]
}
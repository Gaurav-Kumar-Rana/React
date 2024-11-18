const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'src/App.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{ loader: "babel-loader", options: { presets: ["@babel/preset-react"] } }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      }
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  plugins:[
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      title: "My Context app",
      filename: "index.html",
      template: "src/template.html"
    })
    
  ]
};

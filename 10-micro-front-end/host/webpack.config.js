const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name]-[contenthash].js",
    path: __dirname + "/dist",
    clean: true,
  },
  devServer: {
    static: {
      directory: __dirname + "/dist",
    },
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      file: "index.html",
      template: "src/template.html",
    }),
    new ModuleFederationPlugin({
      name: "host",
      remote: {
        app1: "app1@http://localhost:3001/app1.js",
      },
      shared: {
        "react": { singleton: true, requiredVersion: "^19.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^19.0.0" },
      },
    }),
  ],
};

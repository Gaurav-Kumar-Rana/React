const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    filename: "[name]-[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3001,
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
    new ModuleFederationPlugin({
      name: "app1",
      filename: "app1.js",
      exposes: {
        "./App": "./src/App.js",
      },
      shared: {
        "react": { singleton: true, requiredVersion: "^19.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
      },
    }),
    new HtmlWebpackPlugin({
      file: "index.html",
      template: "src/template.html",
    }),
  ],
};

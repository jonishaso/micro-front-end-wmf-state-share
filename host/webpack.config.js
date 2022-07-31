const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3001,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  plugins: [
    new ModuleFederationPlugin({
      runtime: "web application",
      name: "webApp",
      remotes: {
        app2: "remote@http://localhost:3002/remote-main.js",
        store: "store@http://localhost:3003/1-0-0/remote-store.js",
      },
      shared: {
        "react-redux": {
          singleton: true,
          requiredVersion: deps["react-redux"],
        },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

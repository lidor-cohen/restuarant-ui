let path = require("path");
let htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: path.resolve(__dirname, "src/js/index.js"),

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },

  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
    ],
  },

  target: "web",

  devServer: {
    static: "./dist",
    open: true,
    port: 3000,
    hot: false,
  },

  optimization: {
    runtimeChunk: "single",
  },

  plugins: [
    new htmlWebpackPlugin({
      title: "Webpack Restuarant",
      template: "./src/pages/index.html",
    }),
  ],
};

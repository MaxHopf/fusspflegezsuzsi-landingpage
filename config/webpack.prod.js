// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/script.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
    }),
    new CssMinimizerPlugin(),
    new MiniCSSExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/impressum.html",
      filename: "impressum.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/datenschutz.html",
      filename: "datenschutz.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

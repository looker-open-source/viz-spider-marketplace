var path = require("path");

const TerserPlugin = require("terser-webpack-plugin");

var webpackConfig = {
  mode: "production",
  entry: {
    spider: "./src/spider.js",
  },
  devServer: {
    static: {
      directory: __dirname,
    },
  },
  output: {
    hashFunction: 'sha256',
    filename: "spider.js",
    path: path.resolve(__dirname),
    library: "[name]",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".js"],
    modules: [path.join(__dirname, "../src"), "node_modules"],
  },
  plugins: [new TerserPlugin()],
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: "babel-loader" }],
  },
  stats: {},
};

module.exports = webpackConfig;

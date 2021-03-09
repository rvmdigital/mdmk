const webpack = require("webpack");
const path = require("path");

const config = {
  mode: "development",
  entry: {
    common: "./src/js/common.js",
    otp: "./src/js/otp.js",
    filter: "./src/js/filter.js",
    mla: "./src/js/mla.js",
    report: "./src/js/report.js",
    live: "./src/js/live.js",
    "mla-detail": "./src/js/mla-detail.js",
    hamburger: "./src/js/hamburger.js",
    homesec: "./src/js/homesec.js"
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
};

module.exports = config;

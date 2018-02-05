const path = require("path");

module.exports = {
  entry: {
      main: "./docs/js/main.js"
  },
  output: {
      path: path.join(__dirname, "docs", "build"),
      filename: "[name].js"
  },
  module: {
      loaders: [
          {test: /\.js$/, loader: "babel-loader"}
      ]
  }
};
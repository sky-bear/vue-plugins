const path = require("path");
console.log(path.resolve(__dirname));
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
  mode: "production",
  entry: {
    plugins: "./src/plugins/index.ts"
    // plugins: path.join(__dirname, "../src/plugins/index.ts")
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
    libraryTarget: "umd"
  },
  devtool: false,
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
    alias: {
      src: path.resolve(__dirname, "../src/")
    }
  },
  externals: ["vue", "element-ui"],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(tsx?|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader",
            options: { appendTsxSuffixTo: [/\.vue$/] }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};

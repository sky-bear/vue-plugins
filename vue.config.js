const path = require("path");
// const VueLoaderPlugin = require("vue-loader");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
  configureWebpack: config => {
    config.module.rules.push(
      ...[
        {
          test: /\.md$/,
          use: [
            {
              loader: "vue-loader",
              options: {
                compilerOptions: {
                  preserveWhitespace: false
                }
              }
            },
            {
              loader: path.resolve(__dirname, "./build/md-loader/index.js")
            }
          ]
        },
        {
          test: /\.vue$/,
          use: [
            {
              loader: "vue-loader",
              options: {
                compilerOptions: {
                  preserveWhitespace: false
                }
              }
            }
          ]
        }
      ]
    );
    // config.resolve.alias.set("vue$", "vue/dist/vue.common.js");
    config.plugins.push(new VueLoaderPlugin());
  },
  productionSourceMap: false, // 生产环境不生成sourse map
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/styles/_var.scss";
          @import "~@/styles/_mixin.scss";
        `
      }
    }
  },
  devServer: {
    port: 9001,
    host: "0.0.0.0",
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  }
};

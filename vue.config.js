const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    host: "192.168.31.53",
    open: true,
  },

  transpileDependencies: true,

  css: {
    requireModuleExtension: true,
  },
});

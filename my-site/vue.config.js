module.exports = {
  publicPath: "/",

  css: {
    loaderOptions: {
      sass: {
        prependData: `
                    @import "@/scss/custom.scss";
                `
      }
    }
  }
};

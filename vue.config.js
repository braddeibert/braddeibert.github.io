
module.exports = {
    publicPath: '/my-site/',
    
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
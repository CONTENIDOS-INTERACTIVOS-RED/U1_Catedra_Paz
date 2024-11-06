const titulo = require('./src/config/titulo')
module.exports = {
  publicPath: process.env.NODE_ENV === '',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.sass"`,
      },
    },
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = titulo
      return args
    })
  },
}

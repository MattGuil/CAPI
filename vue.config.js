const { defineConfig } = require('@vue/cli-service')

module.exports = {
  devServer: {
    host: "localhost"
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/CAPI/' : '/',
}
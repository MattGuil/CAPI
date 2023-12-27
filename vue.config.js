const { defineConfig } = require('@vue/cli-service')

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8000,
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/CAPI/'
    : '/'
}
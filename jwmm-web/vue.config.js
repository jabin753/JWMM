module.exports = {
  productionSourceMap: true,
  transpileDependencies: ['vuetify'],
  devServer: {
    proxy: 'http://localhost:3000'
  }
}

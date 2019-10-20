const webpack =  require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const {resolve} = require('./utils')

module.exports = merge(baseConfig, {
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: resolve('dist'),
    port: 3000,
    hot: true,
    inline: true,
    compress: true,
    historyApiFallback: true
  }
})
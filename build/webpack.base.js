const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('./utils');

const config = {
  mode: process.env.NODE_ENV,
  entry: resolve('src/main.ts'),
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: true,
              configFile: resolve('tsconfig.json')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BieWen - 别问',
      template: require('html-webpack-template'),
      appMountId: 'root',
      mobile: true,
      favicon: ''
    })
  ]
};

module.exports = config;

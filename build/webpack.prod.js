const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'fireworks_api.min.js'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      extractComments: false
    })]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      API_URL: 'url',
      DEBUG: false
    }),
    new BundleAnalyzerPlugin()
  ]
})

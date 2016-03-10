var webpack = require('webpack')
var config = require('./webpack.base.js')

config.entry = './src/vue-modal.js'
config.output = {
  path: './dist',
  filename: 'vue-modal.js',
  libraryTarget: "umd"
}

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin()
]

module.exports = config

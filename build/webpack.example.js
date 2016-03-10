var webpack = require('webpack')
var config = require('./webpack.base.js')

config.entry = './example/index.js'
config.output = {
  path: __dirname,
  filename: 'build.js'
}

module.exports = config

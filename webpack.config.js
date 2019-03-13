const path = require('path')
const html_plugin = require('html-webpack-plugin')

module.exports = {
  entry: ['@babel/polyfill', './src/app.js'],
  output: {
    path: path.resolve(`${__dirname}/dist`),
    filename: './app.js'
  },
  devServer: {
    publicPath: '/dev/'
  },
  mode: 'development',
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new html_plugin({
      filename: './index.html',
      template: './src/index.html'
    })
  ]
}

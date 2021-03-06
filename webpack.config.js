var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    alias: {
      settings: path.join(__dirname, `src/settings.${process.env.NODE_ENV}.js`)
    }
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'www/wp-content/themes/arbre-integral/'),
    publicPath: '/wp-content/themes/arbre-integral/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /.jsx?$/, include: [path.resolve(__dirname, "src")], loader: 'babel-loader' },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
      })
  ],
  devServer: {
    // host: "arbre-integral.net",
    // host: "localhost",
    host: "0.0.0.0",
    port: 1234,
    historyApiFallback: true,
    proxy: {
      '/wp-json/*': {
                target: 'http://arbre-integral.net',
                secure: false,
              }
            }
          },
        };

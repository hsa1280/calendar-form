var path = require('path');
var webpack = require('webpack');

 module.exports = {
  entry: [
    '.src/app.js'
  ],
  output: {
    path: __dirname + '/src',
    filename: "bundle.js"
},
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets:['es2015', 'react']
      }
    }]
  },
  resolve: {
    root: [path.resolve(__dirname)],
    extensions: ['', '.js']
  },
  devtool: "#inline-source-map"
};

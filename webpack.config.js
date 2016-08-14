 module.exports = {
  entry: [
    './src/app.js'
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
  devtool: "#inline-source-map"
};

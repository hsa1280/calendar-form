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
  resolveLoader: {
      modulesDirectories: ["web_loaders", "web_modules", "node_loaders", "node_modules"],
      extensions: ["", ".webpack-loader.js", ".web-loader.js", ".loader.js", ".js"],
      packageMains: ["webpackLoader", "webLoader", "loader", "main"]
  },
  devtool: "#inline-source-map"
};

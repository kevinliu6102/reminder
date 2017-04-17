module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname + '/public/build/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public/',
    hot: true
  },
  watch: true,
  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
}
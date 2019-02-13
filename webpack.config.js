module.exports = {
  entry: ['./client/client.js'],
  output:{
    path: '../dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  modules: {
    loaders: [
        {
          test: /\.js$/,
        }
    ]
  }
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    clean: true
  },
  devServer: {
    static: './dist',
  },
  plugins: [

  ]
}
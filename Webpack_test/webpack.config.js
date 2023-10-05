const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve('./src/app.js')
  },
  output: {
    filename: 'main.js',
    path: path.resolve('./dist')
  },
  module: {
    rules: [

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
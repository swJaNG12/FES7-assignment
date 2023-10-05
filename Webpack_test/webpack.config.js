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
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        // asset/inline 타입의 기본값 : 8kb
        // type: 'asset/inline'

        type: 'asset',
        // asset 타입으로 조건 추가가능
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024
          }
        }
      }
    ]
  }
}
const path = require('path');
const webpack = require('webpack');
const childProcess = require('child_process');
require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
      conmmit version : ${childProcess.execSync('git rev-parse --short HEAD')}
      conmmitter : ${childProcess.execSync('git config user.name')}
      마지막 빌드 시간은 ${new Date().toLocaleString()}입니다.
      `
    }),
    new webpack.DefinePlugin({
      // pw:123456
      dev: JSON.stringify(process.env.DEV_API),
      pro: JSON.stringify(process.env.PRO_API)
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
//const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          miniCss.loader,
          'css-loader',
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          miniCss.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new miniCss({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ],
};
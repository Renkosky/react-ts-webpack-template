const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: { app: './src/index.tsx' },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: { loader: 'ts-loader' }
      },
      {
        test: /\.tsx$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: { loader: 'ts-loader' }
      },
      // JavaScript
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hulu-hooks',
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
}

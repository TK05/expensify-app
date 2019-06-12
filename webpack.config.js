const path = require('path')
const webpack = require('webpack')
const MiniCssExtraPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new MiniCssExtraPlugin({ filename: 'styles.css' })

  return {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, 'public/dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          resolve: {
            extensions: ['.js', '.jsx']
          },
          exclude: /node_modules/,
          use: [
            'babel-loader',
            'eslint-loader'
          ]
        },
        {
          test: /\.(scss|css)$/,
          use: [
            {
              loader: MiniCssExtraPlugin.loader
            },
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }
          ]
        }
      ]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      publicPath: '/dist/',
      watchContentBase: true,
      hot: true,
      host: '0.0.0.0',
      disableHostCheck: true,
      historyApiFallback: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      CSSExtract
    ]
  }
}

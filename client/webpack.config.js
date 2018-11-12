const path = require('path');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const localIP = process.env.SEQ_LOCAL_IP || 'localhost';
const disableHostCheck = localIP !== 'localhost';
const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/src/build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: [path.resolve(__dirname), 'node_modules'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new FlowBabelWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ],
  devtool: isDev ? 'inline-source-map' : false,
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    inline: true,
    hot: true,
    historyApiFallback: true,
    disableHostCheck,
    host: '0.0.0.0',
    port: 5000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        // force this loader to run first if it's not first in loaders list
        // enforce: 'pre',
        // avoid running prettier on all the files!
        // use it only on your source code and not on dependencies!
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'prettier-loader',
        // force this loader to run first if it's not first in loaders list
        // enforce: 'pre',
        // avoid running prettier on all the files!
        // use it only on your source code and not on dependencies!
        exclude: /node_modules/
      },
      {
        test: /(\.css$)/,
        loader: ['style-loader', 'css-loader', 'resolve-url-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};

/**
 * Created by jim on 2016/6/15.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry:  {
    public:[
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: [path.join(__dirname, 'src')],
        exclude: /node_modules/,
        loader: 'react-hot',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.jsx$/,
        include: [path.join(__dirname, 'src')],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.js$/,
        include: [path.join(__dirname, 'src')],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: 'es2015'
        }
      },
      {
        test: /\.less/,
        include: [path.join(__dirname, 'src')],
        loader: 'style!css!postcss!less'
      },{
        test: /\.(css)$/,
        include: [path.join(__dirname, 'src')],
        loader: 'style!css!postcss'
      }, {
        test: /\.(png|jpg)$/,
        include: [path.join(__dirname, 'src')],
        loader: 'url?limit=8192'
      }
    ]
  }
};
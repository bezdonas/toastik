import path from 'path';
import webpack from 'webpack';

export default {
  debug: false,
  devtool: 'source-map',
  noInfo: false,
  entry: './src/toastik/index',
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'toastik.min.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] }
    ]
  }
};

/* eslint-disable prefer-destructuring */
const path = require('path');
const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const CLIENT_DIR = path.join(__dirname, 'client');
const PUBLIC_DIR = path.join(__dirname, 'public');
module.exports = {
  entry: `${CLIENT_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR,
  },
  // mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: CLIENT_DIR,
        exclude: /node.modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new BrotliPlugin({
      filename: '[path].br[query]',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};

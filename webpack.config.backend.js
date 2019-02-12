const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    path: path.resolve(`${__dirname}/public`),
    filename: 'backend.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  target: 'node',
  externals: [nodeExternals()],
};

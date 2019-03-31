const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../', 'dist')
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        // include: path.join(__dirname, '../'),
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
};

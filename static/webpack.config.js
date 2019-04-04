const path = require('path');

module.exports = {
  mode: 'development',

  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.webpack.js', '.js', '.jsx', '.json'],
    modules: ['node_modules']
  },

  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        type: 'javascript/auto',
        exclude: /(node_modules)/,
        options: {
          babelrc: false,
          plugins: [
            // Stage 0
            '@babel/plugin-proposal-function-bind',
          ],
          presets: [
              '@babel/env',
              // '@babel/stage-0',
              '@babel/react',
              // '@babel/es2015',
            ],
        }
      }
    ]
  }
};

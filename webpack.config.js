const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.join(__dirname, 'dist/assets'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
};

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const extractCSS = new MiniCssExtractPlugin({
  filename: '../css/styles.css',
  chunkFilename: '[id].css',
  ignoreOrder: false // Enable to remove warnings about conflicting order
});

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist/lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    react: 'react',
    reactDOM: 'react-dom'
  },
  plugins: [extractCSS],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  }
};

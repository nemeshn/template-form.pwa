/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, 'src/index.html'),
  }),
  new MiniCssExtractPlugin({
    filename: 'styles.css',
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }));
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

// mode: 'development'  , 'production', 'none'
// sourceMapFilename: '[name].js.map',

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.jsx'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins,
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  modules: false,
                }], '@babel/react',
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|ico|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader?name=img/[name].[ext]',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  devServer: {
    // compress: true,
    publicPath: '/',
    contentBase: './dist',
    headers: { 'Cache-Control': 'max-age=600' },
  },
};

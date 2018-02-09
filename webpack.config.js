const webpack = require('webpack');
const path = require('path');

// On build runs, this plugin will create an index.html file in the dist directory that
// adds css and bundle files into the index.html template defined below under 'plugins'
const HtmlWebpackPlugin = require('html-webpack-plugin');

// // This plugin extracts modular css and outputs a bundled css file
const ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = {
  // entry: './client/index.js',
  entry: [
    'babel-polyfill',

    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',

    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',

    // entry point of our app
    './client/index.js'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  devServer: {
    port: 8080,

    // match the output path
    contentBase: path.resolve(__dirname, 'dist'),

    //enable HMR on the devServer
    hot: true,

    //match the output 'publicPath'
    publicPath: '/dist/',

    // fallback to root for other urls
    historyApiFallback: true,

    headers: { 'Access-Control-Allow-Origin': '*' },
    // proxy is required in order to make api calls to express server while using hot-reload webpack server
    // routes api fetch requests from localhost:8080/api/* (webpack dev server) to localhost:3000/api/* (where our Express server is running)
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      // tack a hash on the end of filenames to enable cache busting
      hash: true,
      // this is the template that the target is crafted from
      template: path.resolve(__dirname, './client/index.html'),
      // drop script tags at the bottom of the body
      inject: true,
    }),
    // After webpack rebuilds bundle, webpack-dev-middleware thinks that nothing has changed
    // This is because the changed module representing css has been emptied out by extractTextPlugin
    // disable ExtractTextPlugin in development to let HMR hot load styles
    // disable will cause plugin to fallback to style-loader
    new ExtractTextPlugin({
      filename: 'style.bundle.css',
      allChunks: true,
      disable: process.env.NODE_ENV !== 'production',
    }),
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    // this prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /(\.css|\.scss)$/,
        exclude: /node_modules/,
        loaders: ExtractTextPlugin.extract({
          // fallback to style-loader when css is not extracted
          // style-loader injects the css into the header wrapped in style tags
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },

  devtool: 'source-map',

  resolve: {
    extensions: [".js", ".jsx"]
  }
};
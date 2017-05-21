var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/app.js",
  module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0', 'react-hmre'],
                plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
            }
        },
        {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader?modules'],
        },
    ]
  },
  output: {
      path:  path.resolve(__dirname, './dist'),
      filename: "app.min.js",
      publicPath : '/assets/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist') ,
    port: 8080 ,
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};

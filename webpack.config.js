var path = require('path');
var webpack = require('webpack');
var debug = process.env.NODE_ENV !== 'production';
var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
];

if (!debug) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
      sourceMap: false,
      mangle: true,
      minimize: true,
    })
  );
}

module.exports = {
  cache: debug,
  debug: debug,
  devtool: 'cheap-module-source-map',
  entry: [
    './source/entry.jsx',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.(jsx|js)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg|jpeg|gif|woff|svg)$/, loader: 'file-loader' },
    ],
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx'],
    alias: {
      'redux-modules': 'source/redux-modules',
      library: 'source/library',
    },
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: plugins,
};

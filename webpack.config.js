/*
 * Helper: root(), and rootDir() are defined at the bottom
 */
var path = require('path');
/*
 * Webpack Plugins
 */
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ProvidePlugin = webpack.ProvidePlugin;
/*
 * Config
 */
module.exports = {
  devtool: 'source-map',
  debug: true,

  entry: {
    'angular2': [
      'rxjs',
      'reflect-metadata',
      'angular2/core',
      'angular2/router',
      'angular2/http'
    ],
    'app': [
      './app/boot',
      './assets/scss/master'
    ],
    'vendor': [
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/foundation-sites/dist/foundation.min.js'
    ]
  },

  output: {
    path: root('build'),
    publicPath: 'build/',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['','.ts','.js','.json', '.scss', '.css', '.html']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts', exclude: [ /node_modules/ ]},
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'], exclude: [ /node_modules/ ]}
    ]
  },

  plugins: [
    new CommonsChunkPlugin({ name: 'angular2', filename: 'angular2.js', minChunks: Infinity }),
    new CommonsChunkPlugin({ name: 'common',   filename: 'common.js' }),
    new CommonsChunkPlugin({ name: 'vendor',   filename: 'vendor.js', minChunks: Infinity }),
    /*
     * Include jQuery Library
     */
    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ],

  target: 'node-webkit'
};

// Helper functions

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

function rootNode(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}
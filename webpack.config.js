/*
 * Helper: root(), and rootDir() are defined at the bottom
 */
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
/*
 * Webpack Plugins
 */
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ProvidePlugin = webpack.ProvidePlugin;
/*
 * SASS Config
 */
const sassLoaders = [
  'css',
  'postcss',
  'sass?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './assets/scss')
]
/*
 * Config
 */
const config = {
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
    'head': [
      './app/head'
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
    extensions: ['','.ts','.js','.json', '.scss', '.css', '.styl', '.html']
  },

  module: {
    preLoaders: [
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json'},
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude: [ /node_modules/ ]},
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [ /node_modules/ ]},
      {
        test: /\.scss$/,
        //loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')),
        loaders: ['style', 'css', 'sass'],
        exclude: [ /node_modules/ ]},
      {
        test: /\.styl$/,
        loaders: ['css', 'stylus'],
        exclude: [ /node_modules/ ]
      },
      {
        test: /\.json$/,
        loader: 'json' }
    ],
    resolve: {
      modulesDirectories: ['node_modules']
    }
  },

  plugins: [
    new CommonsChunkPlugin({ name: 'angular2', filename: 'angular2.js', minChunks: Infinity }),
    new CommonsChunkPlugin({ name: 'common',   filename: 'common.js' }),
    new ExtractTextPlugin('[name].css')
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],

  target: 'node-webkit'
};

/*
 * Helper functions
 */
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

function rootNode(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}

/*
 * Export module
 */
module.exports = config
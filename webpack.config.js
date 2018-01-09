const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  entry: {
    renderer: './src/frontend/renderer.js',
    main: './src/backend/main.js'
  },
  output: {
    path: path.resolve('./app'),
    filename: '[name].js',
    pathinfo: true
  },
  watch: true,
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.runtime.js'
    },
    modules: ['./node_modules']
  },
  target: 'electron',
  module: {
    rules: [
      { test: /\.svg$/, loader: 'svg-inline-loader?classPrefix' },
      { test: /\.html$/, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                scss: 'vue-style-loader!css-loader!sass-loader',
                js: 'babel-loader'
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: [nodeExternals({
    modulesDir: './node_modules'
  })]
}

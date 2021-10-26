const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development', // development  production
  // eval-source-map 仅限在开发模式下使用
  // devtool: 'eval-source-map',
  // 生产环境下，建议关闭 SourceMap 或将 devtool 的值设置为 nosources-source-map
  // devtool: 'nosources-source-map',
  // devtool: 'source-map',
  // 指定打包的入口
  entry: path.join(__dirname, 'src', 'index.js'),
  // 指定打包的出口
  output: {
    // 表示输出文件的存放路径
    path: path.join(__dirname, 'dist'),
    // 表示输出文件的名称
    filename: 'js/bundle.js',
    assetModuleFilename: 'images/[name]_[hash].[ext]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    port: 8080,
    static: path.join(__dirname, 'dist'),
    open: true
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
}
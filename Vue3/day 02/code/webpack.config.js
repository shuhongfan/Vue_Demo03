const path = require('path')

// 1. 导入插件，得到构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 2. 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
  template: './src/index.html',
  filename: './index.html',
})

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const cleanPlugin = new CleanWebpackPlugin()

module.exports = {
  mode: 'development', // development  production
  // eval-source-map 仅限在开发模式下使用
  // devtool: 'eval-source-map',
  // 生产环境下，建议关闭 SourceMap 或将 devtool 的值设置为 nosources-source-map
  // devtool: 'nosources-source-map',
  // devtool: 'source-map',
  // 指定打包的入口
  entry: path.join(__dirname, './src/index.js'),
  // 指定打包的出口
  output: {
    // 表示输出文件的存放路径
    path: path.join(__dirname, './dist'),
    // 表示输出文件的名称
    filename: 'js/bundle.js',
  },
  plugins: [htmlPlugin, cleanPlugin], // 3. 挂载插件的实例对象
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 80,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      // { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22228' }
      {
        test: /\.jpg|png|gif$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 22228,
            outputPath: 'image',
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
}

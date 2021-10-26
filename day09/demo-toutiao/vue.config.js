const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 直接覆盖变量
          // 'nav-bar-background-color': 'orange'
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          //  ../    ./    theme.less
          // 从盘符开始的路径，叫做绝对路径   C:\\Users\liulongbin\\theme.less
          hack: `true; @import "${themePath}";`
        }
      }
    }
  }
}

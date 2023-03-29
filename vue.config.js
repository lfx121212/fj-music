var webpack = require('webpack')



// vue.config.js 配置说明
module.exports = {
  // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
  outputDir: "dist",
  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: "static",
  // webpack-dev-server 相关配置
  devServer: {
    host: "0.0.0.0",
    // 端口为闵肥啾阳历生日
    port: 10525,
    open: false,
    https: false,
    // 允许进行内网穿透
    historyApiFallback: true,
    allowedHosts:"all",
    proxy: {
      '/': { // 匹配所有以fj为开头的请求路径
        target: 'http://localhost:10409/', // 代理目标的基础路径
        ws: false,
        pathRewrite: {'^/': ''} // 路径重写
      }
    }
  },
  // 基础配置
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '肥啾Music播放器'
      return args
    })
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  }
}

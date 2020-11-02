//module.exports 是commonJS的写法
module.exports = {
    devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:3003',
            ws: true,
            changeOrigin: true,
                      pathRewrite: { // 路径重写
                          "^/api": ''
                      }
          }
        }
      }
  }
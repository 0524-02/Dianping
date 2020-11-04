module.exports = {
  lintOnSave: false,
<<<<<<< HEAD
=======
  devServer:{
      proxy: {
          "/api": {
            target: "http://182.92.128.115/",
            pathRewrite: {"^/api" : ""}
          }
        }
  }
>>>>>>> dd
}
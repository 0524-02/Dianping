<<<<<<< HEAD

  module.exports = {
    lintOnSave: false,
  }
=======
module.exports = {
  lintOnSave: false,
  devServer:{
      proxy: {
          "/api": {
            target: "http://182.92.128.115/",
            pathRewrite: {"^/api" : ""}
          }
        }
  }
}
>>>>>>> 8408796159d3fb3d0eaffd14e78e632bf8bfd288

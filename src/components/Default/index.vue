<template>
  <div class="bgRight">
    <div class="top">
      <div class="seven">APP扫码，享七天免登录</div>
      <div class="PC"><i class="iconfont iconpc3"></i></div>
    </div>
    <div class="scan">
      <img src="./images/Footer_01.png" alt="二维码" />
    </div>
    <div class="text">
      <div class="img"><i class="iconfont iconsaomiao1"></i></div>
      <div class="version">
        <p>打开<i style="color: #f63">大众点评APP</i></p>
        <p>扫描二维码登录</p>
      </div>
    </div>

    <div class="ft">
      <div class="logReg">
        <p @click="checkedSwitch(1)"><a href="javascript:;">账号登录</a></p>
        <p><router-link to="/register">快速注册</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Default",
  data() {
      return {
          checkedSwitch(type){
              
          }
      }
  },
};
</script>

<style lang="less" scoped>
.bgRight {
  background: #fff;
  width: 290px;
  height: 350px;
  position: absolute;
  right: 0;
  top: 80px;

  .top {
    // background: pink;
    height: 50px;
    width: 100%;
    display: flex;

    .seven {
      height: 30px;
      width: 160px;
      margin: 0 auto;
      margin-top: 10px;
      // background: seagreen;
      margin-bottom: 0px;
      font-size: 14px;
      color: #999;
      text-align: center;
      line-height: 50px;
    }

    .PC {
      // margin-top: 0;
      margin-right: 8px;
      //
      i {
        font-size: 40px;

        color: #f63;
      }

      // height: 40px;
      // width: 40px;
    }
  }

  .scan {
    background: pink;
    height: 150px;
    width: 150px;
    margin: 0 auto;

    img {
      display: block;
      width: 150px;
      height: 150px;
    }
  }

  .text {
    // background: palegreen;
    width: 150px;
    height: 60px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    .img {
      // background: royalblue;
      i {
        font-size: 30px;
        // font-weight: 700;
        color: #f63;
        // width: 100px;
      }
    }

    .version {
      height: 60px;
      // background: salmon;
      font-size: 14px;
      color: #999;
    }
  }

  .ft {
    // background: pink;
    height: 60px;
    width: 250px;
    margin: 0 auto;
    border-top: 1px dashed gray;

    .logReg {
      // background: chartreuse;
      margin: 25px 0px 10px 100px;
      height: 40px;
      width: 150px;
      display: flex;

      p {
        margin-right: 8px;
        a {
          text-align: right;
          font-size: 16px;
          text-align: right;
          text-decoration: none;
        }
      }
    }
  }

  .loginForm {
    font-weight: 700;
    width: 246px;
    height: 220px;
    margin: 30px auto;

    a {
      font-family: Tahoma, sans-serif;
      font-weight: 700;
      text-decoration: none;
      color: #333;
      font-size: 14px;
    }

    .loginTop {
      display: flex;
      width: 246px;
      height: 26px;
      line-height: 26px;

      .quick {
        width: 123px;
        height: 26px;
        text-align: center;
        text-decoration: none;
        color: #333;
        font-weight: 700;
        font-size: 14px;
        //   border-bottom: 1px solid #f63;
        //   border-bottom: 1px solid grey;
        border-bottom: 1px solid rgb(214, 210, 210);
      }
      .log {
        width: 123px;
        height: 26px;
        text-align: center;
        text-decoration: none;
        color: #333;
        font-weight: 700;
        font-size: 14px;
        //   border-bottom: 1px solid rgb(214, 210, 210);
        border-bottom: 1px solid #f63;
      }

      .log:active {
        border-bottom: 1px solid #f63;
      }
    }

    .loginCon {
      position: relative;
      width: 246px;
      height: 162px;
      margin-top: 30px;

      input {
        outline: medium;
      }

      .phone {
        //    background: hotpink;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-size: 18px;
        height: 30px;

        .left {
          width: 50%;
          line-height: 30px;
          //    background: gold;
          height: 30px;
        }
        .right {
          width: 50%;
          //    background: green;
          height: 30px;
          line-height: 30px;
        }
        //    input {
        //        position: absolute;
        //        right: 8px;

        //    }
      }

      .code {
        font-size: 18px;
        margin-top: 30px;

        button {
          position: absolute;
          right: 8px;
          width: 100px;
        }
      }

      .pwd {
        margin-top: 30px;
        font-size: 18px;
        width: 100%;
        height: 30px;
        line-height: 30px;
        //    background: hotpink;
      }

      .remember {
        margin-top: 30px;
        height: 30px;
        //    background: hotpink;
      }

      .auto {
        margin-top: 10px;
        height: 30px;
        //    background: hotpink;
        display: flex;
        justify-content: space-between;
        line-height: 30px;
      }

      .log {
        button {
          margin-top: 20px;
          height: 30px;
          background: #f63;
          border: none;
          color: #fff;
          width: 100%;
          font-family: 微软雅黑;
          word-spacing: 4px;
          outline: none;
          font-size: 18px;
        }
      }
    }

    .loginFoot {
      width: 100%;
      margin-top: 40px;
      display: flex;
      border-top: 1px dashed gainsboro;
      .Pic {
        margin-top: 20px;
        display: flex;
        width: 150px;
        justify-content: space-around;
        img {
          width: 30px;
        }
      }
      .toRegister {
        margin-top: 20px;
        flex: 1;
        justify-content: space-around;
        display: flex;

        p {
          margin: 0 auto;
          justify-content: space-around;
          a {
            font-size: 16px;
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>
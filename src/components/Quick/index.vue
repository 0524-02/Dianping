<template>
  <div>
    <!-- 头部区域 -->
    <!-- <div class="loginTop">
      <p class="quick"><a href="javascript:;">快捷登录</a></p>
      <p class="log"><a href="javascript:;">手机密码登录</a></p>
    </div> -->

    <!-- 1.快捷登录  中间输入区 -->
    <div class="loginCon">
      <!-- 手机号 -->
      <div class="ph">
        <div class="one">
          <el-input
            v-model="phone"
            name="phone"
            type="text"
            placeholder="请输入手机号"
            v-validate="{ required: true, regex: /^1\d{10}$/ }"
            :class="{ invalid: errors.has('phone') }"
          />

          <div class="error-msg msg">{{ errors.first("phone") }}</div>
        </div>
      </div>

      <!-- 快捷登录 动态码 -->
      <div class="code">
        <div class="autocode">
          <el-input
            v-model="code"
            placeholder="请输入验证码"
            type="text"
            name="code"
            v-validate="{ required: true, regex: /^\d{4}$/ }"
            :class="{ invalid: errors.has('code') }"
          />
          <!-- <el-input placeholder="输入动态码"></el-input> -->
          <el-button>获取动态码</el-button>
        </div>

        <div class="error-msg msg">{{ errors.first("code") }}</div>
      </div>

      <!-- 记住手机号 -->
      <div class="remember">
        <!-- <el-checkbox v-model="checked">记住手机号</el-checkbox> -->
        <input type="checkbox" /> 记住手机号
      </div>

      <div class="log">
        <el-button type="warning" @click="login">登 录</el-button>

        <!-- <button>登录</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quick",
  data() {
    return {
      phone: "",
      code: "",
    };
  },
  methods: {
    async login() {
      let { phone, pwd } = this;
      if (phone && pwd) {
        try {
          await this.$store.dispatch("userLogin", { phone, pwd });
          alert("登录成功");

          //配合导航守卫完成之前想去而没有去到的页面
          let redirect = this.$route.query.redirect;
          if (redirect) {
            this.$router.push(redirect);
          } else {
            this.$router.push("/");
          }
        } catch (error) {
          alert("登录失败" + error.message);
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
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
    // border-bottom: 1px solid rgb(214, 210, 210);
    border-bottom: 1px solid #f63;
  }
  .log {
    width: 123px;
    height: 26px;
    text-align: center;
    text-decoration: none;
    color: #333;
    font-weight: 700;
    font-size: 14px;
    border-bottom: 1px solid rgb(214, 210, 210);
    border-bottom: 1px solid #f63;
  }

  // .log:active {
  //   border-bottom: 1px solid #f63;
  // }
}
.loginCon {
  position: relative;
  width: 246px;
  height: 162px;

  input {
    outline: medium;
  }

  button {
    color: #666;
    border: 1px solid #ccc;
    font-size: 14px;
    line-height: 14px;
  }

  .ph {
    font-size: 18px;
    height: 60px;

    .one {
      width: 246px;
      height: 30px;
    }
  }

  .msg {
    height: 10px;
    width: 246px;
    color: red;
  }
  .error-msg {
    font-size: 12px;
    line-height: 30px;
    color: red;
    text-align: left;
  }

  .code {
    // display: flex;
    // justify-content: space-between;
    font-size: 18px;
    //  background: pink;
    //  height: 30px;
    height: 60px;
    width: 246px;

    .autocode {
      width: 246px;
      height: 30px;
      display: flex;
      justify-content: space-around;
      line-height: 30px;
    }

    .msg {
      height: 10px;
      width: 246px;
    }
    .error-msg {
      font-size: 12px;
      line-height: 30px;
      color: red;
      text-align: left;
    }
  }

  .pwd {
    // margin-top: 30px;
    font-size: 18px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    //    background: hotpink;
  }

  .remember {
    height: 20px;
    color: grey;
    //    background: hotpink;
  }

  .auto {
    margin-top: 10px;
    height: 30px;
    background: hotpink;
    display: flex;
    justify-content: space-between;
    line-height: 30px;
  }

  .log {
    button {
      margin-bottom: 20px;
      border: none;
      color: #fff;
      background: #f63;
      width: 100%;
      font-family: 微软雅黑;
      word-spacing: 4px;
      outline: none;
      font-size: 18px;
    }
  }
}
</style>
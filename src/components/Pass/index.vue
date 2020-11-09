<template>
  <div>
    <!--2.手机密码登录 中间输入区 -->
    <div class="loginCon">
      <!-- 手机号 -->
      <!-- <el-input placeholder="中国  + 86" suffix-icon="el-icon-arrow-down"></el-input> -->

      <!-- <el-input v-model="phone" placeholder="手机号"></el-input> -->

      <div class="phone">
        <div class="one">
          <el-input
            v-model="phone"
            name="phone"
            type="text"
            placeholder="请输入手机号"
            v-validate="{ required: true, regex: /^1\d{10}$/ }"
            :class="{ invalid: errors.has('phone') }"
          />
        </div>

        <div class="error-msg msg">{{ errors.first("phone") }}</div>
      </div>

      <!-- 手机密码登录  密码框 -->
      <div class="pwd">
        <el-input
          v-model="pwd"
          placeholder="请输入你的密码"
          type="text"
          name="password"
          v-validate="{ required: true, regex: /^\w{6,10}$/ }"
          :class="{ invalid: errors.has('password') }"
        />

        <div class="error-msg msg">{{ errors.first("password") }}</div>
      </div>

      <!-- 手机密码登录 自动登录 -->
      <div class="auto">
        <div class="checkbox"><input type="checkbox" /> 自动登录</div>
        <p class="text"><a href="javascript:;">忘记密码？</a></p>
      </div>

      <div class="log">
        <el-button type="primary" @click="login">登 录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { reqUserLogin } from "../../api/index";
export default {
  name: "Pass",
  data() {
    return {
      phone: "",
      pwd: "",
    };
  },
  mounted() {},
  methods: {
    // 手机号密码登录
    async login() {
      // 1.收集数据
      let { phone, pwd } = this;
      if (!phone || !pwd) {
        alert("手机号、密码不能为空");
        return;
      } else {
        // 2.整理数据
        let userInfo = {
          phone,
          pwd,
        };

        // 手机号密码不为空

        // 3.发请求
        const result = await reqUserLogin(userInfo);
        // 1.成功 提示用户 并跳转至home页
        if (result.code === 20000) {
          alert("登录成功");
          localStorage.setItem("USERINFO_KEY", JSON.stringify(result.data)); //存储登录成功用户信息
          this.$router.push("/home");
        } else {
          // 2.失败 提示用户输入错误,请重新输入
          alert("手机号、密码输入错误,请重新输入");
          return;
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
    border-bottom: 1px solid #f63;
  }
}
.loginCon {
  position: relative;
  width: 246px;
  height: 162px;

  input {
    outline: medium;
  }

  .phone {
    // display: flex;
    // flex-direction: row;
    // justify-content: space-around;
    font-size: 18px;
    height: 55px;

    .msg {
      height: 10px;
      width: 246px;
      // background: chartreuse;
    }
    .error-msg {
      font-size: 12px;
      line-height: 30px;
      color: red;
      text-align: left;
    }

    .left {
      width: 50%;
      line-height: 30px;
      height: 30px;
    }
    .right {
      width: 50%;
      height: 30px;
      line-height: 30px;
    }
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
    font-size: 18px;
    width: 100%;
    height: 40px;
    line-height: 30px;
    // background: hotpink;

    .msg {
      height: 10px;
      width: 246px;
      // background: chartreuse;
    }
    .error-msg {
      font-size: 12px;
      line-height: 30px;
      color: red;
      text-align: left;
    }
  }

  .remember {
    margin-top: 30px;
    height: 30px;
  }

  .auto {
    margin-top: 10px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    line-height: 30px;

    .checkbox {
      color: gray;
    }
  }

  .log {
    button {
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
</style>
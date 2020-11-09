<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- Register -->
    <div class="mainLogo">
      <div class="mainLeft">
        <router-link to="/home"
          ><img class="logo" src="./images/logo.png" alt="logo"
        /></router-link>
        <!-- <a href="javascript:;">
          <img class="logo" src="./images/logo.png" alt="logo" />
        </a> -->

        <!-- <p class="toLogin"></p> -->
      </div>
      <div class="separate">|</div>
      <div class="loginTo"><a href="javascript:;">注册</a></div>
    </div>

    <div class="background">
      <div class="bgLR">
        <div class="bgLeft"></div>
        <div class="bgRight">
          <!-- 登录框 -->
          <div class="loginForm">
            <!-- 头部区域 -->
            <div class="loginTop">
              <p class="quick"><a href="javascript:;">手机号快速注册</a></p>
            </div>

            <!-- 中间输入区 -->
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
                </div>

                <div class="error-msg msg">{{ errors.first("phone") }}</div>
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

              <div class="pwd">
                <!-- <el-input
                  v-model="pwd"
                  placeholder="密码"
                  ref="password"
                ></el-input> -->

                <el-input
                  v-model="pwd"
                  placeholder="请输入你的密码"
                  type="text"
                  name="password"
                  v-validate="{ required: true, regex: /^\w{6,10}$/ }"
                  :class="{ invalid: errors.has('password') }"
                />

                <div class="error-msg msg">{{ errors.first('password') }}</div>
              </div>
              <!-- 密码 -->

              <div class="log">
                <el-button @click="register">立 即 注 册</el-button>
              </div>

              <!-- 同意协议 -->
              <div class="controls">
                <input name="m1" type="checkbox" />
                <span> 阅读并同意大众点评网以下政策协议:</span><br />
                <span
                  ><a href="javascript:;"
                    >《美团用户服务协议》、《隐私政策》</a
                  ></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Font></Font>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Font from "@/components/Font";
import { reqUserRegister } from "../../api/index";
export default {
  name: "Register",
  data() {
    return {
      phone: "",
      pwd: "",
      code:''
    };
  },
  components: {
    Header,
    Font,
  },
  mounted() {},
  methods: {
    async register() {
      const success = await this.$validator.validateAll(); // 对所有表单项进行验证
      if (success) {
        //success为true代表验证通过
        let { phone, pwd } = this;
        try {
          await this.$store.dispatch("userRegister", {
            phone,
            pwd,
          });
          alert("恭喜注册成功，确认跳转到登录页");
          this.$router.push("/login");
        } catch (error) {
          alert("用户注册失败" + error.message);
        }
      }
    },

    // async  register(){
    //   // 1.收集·数据·
    //   let {phone,pwd} =this
    //   if(!phone  ||!pwd){
    //     alert('输入·不能·为空')
    //     return
    //   }else{
    //      // 2.整理数据
    //     let userInfo = {
    //       phone,
    //       pwd
    //     }
    //   // 3.发请求·
    //   const result = await reqUserRegister(userInfo)
    //   //   1 成功 提示用户
    //   if(result.code===200){
    //     alert('注册成功')
    //     this.$router.push('/login')
    //   }else{
    //   //   2.失败提示用户
    //     alert('密码·手机号·输入·不正确')
    //     return
    //   }
    //   }

    // }
  },
};
</script>

<style lang="less" scoped>
.mainLogo {
  display: flex;
  width: 1190px;
  margin: 0 auto;

  .mainLeft {
    height: 95px;
    display: flex;
    position: relative;
    line-height: 95px;
    width: 210px;

    .logo {
      height: 57px;
      position: absolute;
      top: 20px;
    }
  }

  .separate {
    position: absolute;
    top: 75px;
    left: 580px;
    width: 2px;
    height: 18px;
    background: #666;
  }

  .loginTo {
    position: absolute;
    top: 70px;
    left: 580px;
    font-size: 20px;
    display: inline-block;
    font-family: "Microsoft YaHei";

    margin-left: 16px;
    height: 32px;

    a {
      color: #666;
      text-decoration: none;
    }
  }
}

.background {
  width: 1190px;
  height: 510px;
  background: #f6f6f6;
  margin: 0 auto;

  .bgLR {
    display: flex;
    width: 1000px;
    height: 510px;
    margin: 0 auto;
    position: relative;
    .bgLeft {
      width: 480px;
      height: 350px;
      position: absolute;
      top: 80px;
      background-image: url(./images/login_bg.png);
      background-repeat: no-repeat;
      background-size: 480px 360px;
    }
    .bgRight {
      background: #fff;
      width: 290px;
      height: 350px;
      position: absolute;
      right: 0;
      top: 80px;

      .loginForm {
        input:focus {
          outline: none;
        }
        select:focus {
          outline: none;
        }

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
          }
        }

        .loginCon {
          position: relative;
          width: 246px;
          height: 162px;
          margin-top: 20px;

          input {
            outline: medium;
          }

          button {
            color: #666;
            border: 1px solid #ccc;
            font-size: 14px;
            line-height: 14px;
            // background-color: transparent;
            // outline: none;
          }

          .ph {
            // background: hotpink;
            // display: flex;
            // flex-direction: row;
            // justify-content: space-around;
            font-size: 18px;
            height: 50px;

            .one {
              width: 246px;
              height: 30px;
              // background: chocolate;
            }

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

          .code {
            // display: flex;
            // justify-content: space-between;
            font-size: 18px;
            //  background: pink;
            //  height: 30px;
            height: 50px;
            width: 246px;

            .autocode {
              width: 246px;
              height: 30px;
              // background: peru;
              display: flex;
              justify-content: space-around;
              line-height: 30px;
            }

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

            button {
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
            margin-top: 20px;
            height: 30px;
            color: grey;
            //    background: hotpink;
          }

          .auto {
            // margin-top: 10px;
            height: 30px;
            background: hotpink;
            display: flex;
            justify-content: space-between;
            line-height: 30px;
          }

          .log {
            button {
              margin-top: 20px;
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

        // .loginCon {
        //   position: relative;
        //   width: 246px;
        //   height: 162px;
        //   margin-top: 30px;

        //   .phone {
        //     font-size: 16px;
        //     input {
        //       position: absolute;
        //       right: 0px;
        //     }
        //   }

        //   .code {
        //     font-size: 16px;
        //     margin-top: 30px;

        //     button {
        //       position: absolute;
        //       right: 0px;
        //       width: 100px;
        //     }
        //   }

        //   .remember {
        //     margin-top: 30px;
        //     input {
        //       font-size: 18px;
        //       width: 100%;
        //     }
        //   }

        //   .log {
        //     button {
        //       margin-top: 30px;
        //       height: 30px;
        //       background: #f63;
        //       border: none;
        //       color: #fff;
        //       width: 100%;
        //       font-family: 微软雅黑;
        //       word-spacing: 4px;
        //       outline: none;
        //       font-size: 18px;
        //     }
        //   }
        // }

        .controls {
          margin-top: 20px;
          color: gray;
        }
      }
    }
  }
}
</style>
<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <!-- Register -->
         <div class="mainLogo">
            <div class="mainLeft">
            <a href="javascript:;">
                <img class="logo" src="./images/logo.png" alt="logo">
            </a>

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
                          <div class="phone">
                              <select >
                                  <option>中国  + 86</option>
                              </select>
                              <input type="text" placeholder="手机号" size="13">
                          </div>
                          <!-- 动态码 -->
                          <div class="code">
                              <input type="text" placeholder="输入动态码" size="13">
                              <button>获取动态码</button>
                          </div>
                          <!-- 记住手机号 -->
                          <div class="remember">
                              <input type="" placeholder="密码长度8-32位字符" /> 
                          </div>
                          <div class="log">
                              <button>登录</button>
                          </div>
                      </div>

                      <!-- 底部其他登录方式 -->
                      <div class="loginFoot">
                          <i class="iconfont iconWeibo"></i>
                      </div>
                   </div>

               </div>
            </div>
               
        </div>

        <Font></Font>
    </div>
</template>

<script>
import Header from '@/components/Header'
// import Logo from '@/components/Logo'
import Font from '@/components/Font'

export default {
    name:'Register',
    components:{
        Header,
        // Logo,
        Font
    }
}
</script>

<style lang="less" scoped>
    .mainLogo{
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

                a{
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

        .bgLR{
            display: flex;
            width: 1000px;
            height: 510px;
            margin: 0 auto;
            position: relative;
            .bgLeft{
                width: 480px;
                height: 350px;
                position: absolute;
                top: 80px;
                background-image:url(./images/login_bg.png);
                background-repeat: no-repeat;
                background-size: 480px 360px;
            }
            .bgRight{
                background: #fff;
                width: 290px;
                height: 350px;
                position: absolute;
                right: 0;
                top: 80px;

                .loginForm{
                   
                    font-weight: 700;
                    width:246px;
                    height: 220px;
                    margin: 30px auto;

                    a{
                        font-family: Tahoma,sans-serif;
                        font-weight: 700;
                        text-decoration: none;
                        color: #333;
                        font-size:14px ;
                    }

                   .loginTop{
                       display: flex;
                       width: 246px;
                       height: 26px;
                       line-height: 26px;

                       .quick{
                          width: 123px;
                          height: 26px;
                          text-align: center; 
                          text-decoration: none;
                          color: #333;
                          font-weight: 700;
                          font-size: 14px;
                          border-bottom: 1px solid #f63;
                       }
                       .log{
                          width: 123px;
                          height: 26px;
                          text-align: center; 
                          text-decoration: none;
                          color: #333;
                          font-weight: 700;
                          font-size: 14px;
                       }
                   }

                   .loginCon{
                       position: relative;
                       width: 246px;
                       height: 162px;
                       margin-top: 30px;

                       .phone {
                           font-size: 16px;
                           input {
                               position: absolute;
                               right: 0px;
                               
                           }
                       }

                       .code{
                           font-size: 16px;
                           margin-top: 30px;

                           button{
                               position: absolute;
                               right: 0px;
                               width: 100px;
                           }
                       }

                       .remember{
                           margin-top: 30px;
                           input{
                               font-size: 18px;
                               width: 100%;
                           }
                       }

                       .log{

                           button{
                               margin-top: 30px;
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

                   .loginFoot{

                   }
                }
            }
        }
 }
</style>
<template>
      <div class="bgRight" >
                   <!-- 登录框 -->
                   <div class="loginForm">
                      <!-- 头部区域 -->
                      <div class="loginTop">
                          <p class="quick " ><a href="javascript:;" @click="checkLogin(0)
                          ">快捷登录</a></p>
                          <p class="log "><a href="javascript:;" @click="checkLogin(1)">手机密码登录</a></p>
                      </div>
                    <Pass v-if="count===1"></Pass>
                    <Quick v-else></Quick>
                    
                 
                      <!-- 底部其他登录方式 -->
                      <div class="loginFoot">
                          <div class="Pic">
                              <img src="./images/github.png" alt="github" @click="githubLogin">
                              <img src="./images/qq.png" alt="qq">
                              <img src="./images/wechat.png" alt="wechat">
                          </div>
                          <div class="toRegister">
                              <!-- <p><a href="/register" >注 册</a></p> -->
                              <p>
                                  <router-link to="/register">注 册</router-link>
                              </p>
                          </div>
                         
                      </div>
                   </div>

               </div>
</template>

<script>
export default {
    name:"Switch",
    data() {
        return {
            count:1
        }
    },
    methods: {
        //点击切换·登陆方式
        checkLogin(type){
            this.count=type
        }
    },
}
</script>

<style lang="less" scoped>
     .bgRight{
                background: #fff;
                width: 290px;
                height: 350px;
                position: absolute;
                right: 0;
                top: 80px;

                .top{
                    // background: pink;
                    height: 50px;
                    width: 100%;
                    display: flex;

                    .seven{
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

                    .PC{
                        // margin-top: 0;
                        margin-right: 8px;
                        // 
                        i{
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

                    img{
                        display: block;
                        width: 150px;
                        height: 150px;
                    }
                }

                .text{
                    // background: palegreen;
                    width: 150px;
                    height: 60px;
                    margin: 0 auto;
                    margin-top: 20px;
                    display: flex;
                    justify-content: space-between;

                    .img{
                        // background: royalblue;
                        i{
                            font-size: 30px;
                            // font-weight: 700;
                            color: #f63;
                            // width: 100px;
                        }
                        
                    }

                    .version{
                        height: 60px;
                        // background: salmon;
                        font-size: 14px;
                        color: #999;
                    }
                }

                .ft{
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
                                text-decoration:none;
                            }
                        }

                        
                        
                    }
                }

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
                        //   border-bottom: 1px solid #f63;
                        //   border-bottom: 1px solid grey;
                        border-bottom: 1px solid rgb(214, 210, 210);
                          
                       }
                       .log{
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

                        .log:active{
                            border-bottom: 1px solid #f63;  
                       }
                   }

                   .loginCon{
                       position: relative;
                       width: 246px;
                       height: 162px;
                       margin-top: 30px;

                       input{
                           outline:medium;
                       }

                       .phone {
                        //    background: hotpink;
                           display: flex;
                           flex-direction: row;
                           justify-content: space-around;
                           font-size: 18px;
                           height: 30px;

                           .left{
                               width:50%;
                               line-height: 30px;
                            //    background: gold;
                               height: 30px;
                           }
                           .right{
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

                       .code{
                           font-size: 18px;
                           margin-top: 30px;

                           button{
                               position: absolute;
                               right: 8px;
                               width: 100px;
                           }
                       }

                       .pwd{
                           margin-top: 30px;
                           font-size: 18px;
                           width: 100%;
                           height: 30px;
                           line-height: 30px;
                        //    background: hotpink;
                       }

                       .remember{
                           margin-top: 30px;
                           height: 30px;
                        //    background: hotpink;
                       }

                       .auto{
                           margin-top: 10px;
                           height: 30px;
                        //    background: hotpink;
                           display: flex;
                           justify-content: space-between;
                           line-height: 30px;
                       }

                       .log{

                           button{
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

                   .loginFoot{
                       width: 100%;
                       margin-top: 40px;
                       display: flex;
                       border-top: 1px dashed gainsboro;
                       .Pic{
                           margin-top: 20px;
                           display: flex;
                           width: 150px;
                           justify-content: space-around;
                           img{
                               width: 30px;
                           }
                       }
                       .toRegister{
                           margin-top: 20px;
                           flex: 1;
                           justify-content: space-around;
                           display: flex;

                           p{
                               margin: 0 auto;
                               justify-content: space-around;
                               a{
                                   font-size: 16px;
                                   line-height: 30px;
                               }
                           }
                           
                       }

                   }
                }
            }
</style>
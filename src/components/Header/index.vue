<template>
    <div class="top">
                <div class="container">
                    <!-- 左侧 -->
                    <div class="left">
                        <a href="javascript:;">
                            <span class="iconfont iconicon_map iconfontC"></span>
                            <span>北京</span> 
                            <span>[更换]</span>
                        </a>
                    </div>
                    <!-- 右侧 -->
                    <div class="right">
                        <router-link to="/login" @click="toLogin">你好，请登录</router-link>
                        <!-- <a href="/login" class="hover" @click="toLogin" >你好，请登录</a> -->
                        <!-- <a href="###" class="iconfontC">免费注册</a> -->
                        <router-link to="/register" class="iconfontC">免费注册</router-link>
                        <span class="seprate">|</span>
                        <a href="###">
                            个人中心
                            <i class="iconfont iconjiantou32"></i>
                        </a>
                        
                        <span class="seprate">|</span>
                        <a href="###">
                            商户服务
                            <i class="iconfont iconjiantou32"></i>
                        </a>
                        
                        <span class="seprate">|</span>
                        <a href="###">
                            帮助中心
                            <i class="iconfont iconjiantou32"></i>
                        </a>
                        
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    name:'Header',
    methods:{
        toLogin(){
            // this.$router.push('/login')
        }
    }
}
</script>

<style lang="less" scoped>
  .top {
            background-color: #f6f6f6;
            height: 35px;
            line-height: 30px;
            font-family: PingFangSC-Regular,Microsoft YaHei,sans-serif;
            font-size: 12px;
            .iconfontC{
                color: #f63;
            }

            a{
             text-decoration: none;
             }

            .container {
                display: flex;
                flex-direction: row;
                width: 1190px;
                height: 35px;
                margin: 0 auto;
                position: relative;
                

                .left {
                    width: 106px;
                    a {
                        span {
                            padding: 4px;
                        }

                    }

                    a:hover{
                            color: #f63;
                        }
                }

                .right{
                    width: 485px;
                    position: absolute;
                    right: 0;
                    font-family: PingFangSC-Regular,Microsoft YaHei,sans-serif;

                     a {
                        margin-right: 10px;
                        padding: 0 14px;
                        margin: 0px 0;
                    }
                }

            }
        }
</style>
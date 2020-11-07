<template>
    <div>
        <div class="mainLogo">
            <div class="mainLeft">
            <!-- <a href="javascript:;">
                    <img class="logo" src="./images/logo.png" alt="logo">
            </a> -->

            <router-link to="/home">
                <img class="logo" src="./images/logo.png" alt="logo">
            </router-link>

            <!-- <p class="toLogin"></p> -->
            </div>
            <div class="separate">|</div>
            <div class="loginTo"><a href="javascript:;">登录</a></div>
        </div>

        <div class="background">
            <div class="bgLR">
                <div class="bgLeft"></div>
               <div class="bgRight"></div>
            </div>
               
        </div>
    </div>
</template>

<script>
export default {
    name:"Logo"
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
                background: pink;
                width: 290px;
                height: 350px;
                position: absolute;
                right: 0;
                top: 80px;
            }
        }
    }

</style>
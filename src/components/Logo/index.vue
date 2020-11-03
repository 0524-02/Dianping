<template>
     <div class="mainLogo">
        <div class="mainLeft">
           <a href="javascript:;">
               <img class="logo" src="./images/logo.png" alt="logo">
           </a>

           <!-- <p class="toLogin"></p> -->
        </div>
        <div class="separate">|</div>
        <div class="loginTo"><a href="javascript:;">登录</a></div>

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

</style>
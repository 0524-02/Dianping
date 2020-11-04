<template>
    <div class="footerFont">
        <p class="fontLink">
            <a href="javascript:;">关于我们</a>
            <span>|</span>
            <a href="javascript:;">商户诚信公约</a>
            <span>|</span>
            <a href="javascript:;">规则中心</a>
            <span>|</span>
            <a href="javascript:;">媒体报道</a>
            <span>|</span>
            <a href="javascript:;">商户入驻</a>
            <span>|</span>
            <a href="javascript:;">推广服务</a>
            <span>|</span>
            <a href="javascript:;">人才招聘</a>
            <span>|</span>
            <a href="javascript:;">最新咨询</a>
            <span>|</span>
            <a href="javascript:;">联系我们</a>
            <span>|</span>
            <a href="javascript:;">应用下载</a>
            <span>|</span>

        </p>

        <p class="copyright">
            <span class="copyrightInfo">©2003-2020 dianping.com, All Rights Reserved.</span>
            <span>本站发布的所有内容，未经许可，不得转载，详见 《知识产权声明》。</span>
        </p>
    </div>
</template>

<script>
export default {
    name:'Font',
}
</script>

<style lang="less" scoped>
.footerFont{
    width: 1190px;
    height: 98px;
    margin: 0 auto;
    font-size: 14px;
    .fontLink{
        margin: 0 auto;
        color: #8c8c8c;
        text-align: center;
        margin-bottom: 10px;
        
        a {
            margin: 0 10px;
            color: #8c8c8c;
        }
    }

    .copyright{
        margin: 0 auto;
        color: #8c8c8c;
        text-align: center;
        .copyrightInfo{
                margin-right: 20px;
        }
    }
}
    
</style>
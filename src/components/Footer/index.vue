<template>
  <div class="footer">
    <div class="description">
      <!-- 商务合作 -->
      <div class="cooperation">
        <p class="title">商务合作</p>
        <ul>
          <li><a href="javascript:;">餐饮代理商招募</a></li>
          <li><a href="javascript:;">商企通</a></li>
          <li><a href="javascript:;">聚宝盆商业开放平台</a></li>
          <li><a href="javascript:;">申请扫码点餐</a></li>
          <li><a href="javascript:;">美团收单代理商招募</a></li>
          <li><a href="javascript:;">美团收银分销商招募</a></li>
          <li><a href="javascript:;">美团外卖代理商招募</a></li>
          <li><a href="javascript:;">北极星商业开放平台</a></li>
          <li><a href="javascript:;">免费使用美团排队</a></li>
        </ul>
      </div>

      <!-- 公司交流 -->
      <div class="companyInformation">
        <p class="title">公司信息</p>
        <ul>
          <li><a href="javascript:;">媒体报道</a></li>
          <li><a href="javascript:;">关于我们</a></li>
          <li><a href="javascript:;">投资者关系</a></li>
          <li><a href="javascript:;">联系我们</a></li>
          <li><a href="javascript:;">商户诚信公约</a></li>
          <li><a href="javascript:;">招聘</a></li>
          <li><a href="javascript:;">餐饮安全管理办法</a></li>
        </ul>
      </div>

      <!-- 用户帮助 -->
      <div class="userHelp">
        <p class="title">用户帮助</p>
        <ul>
          <li><a href="javascript:;">客户服务中心</a></li>
          <li><a href="javascript:;">知识产权维权</a></li>
          <li><a href="javascript:;">廉正举报平台</a></li>
        </ul>
      </div>

      <!-- 应用下载 -->
      <div class="appDownload">
        <p class="title">应用下载</p>
        <ul>
          <li>
            <img src="./images/Footer_01.png" alt="二维码" />
            <p>扫码下载大众点评APP</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  margin-top: 20px;
  padding-left: 30px;
  box-sizing: border-box;
  // height: 494px;
  background: #f0f0f0;
  .description {
    width: 1190px;
    // height: 291px;
    margin: 0 auto;
    display: flex;

    .title {
      font-size: 15px;
      line-height: 20px;
      font-weight: 700;
      color: #777;
    }

    ul > li > a {
      margin-top: 10px;
      line-height: 25px;
      color: #777;
    }
    .cooperation {
      width: 27%;
    }
    .companyInformation {
      width: 27%;
    }
    .userHelp {
      width: 27%;
    }
    .appDownload {
      width: auto;

      ul > li > img {
        display: block;
        width: 100px;
        height: 100px;
        margin: 10px;
      }
    }
  }
}
</style>

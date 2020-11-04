<template>
<div class="wrap">
  <div class="wedding-wrap">
    <!-- 头部 -->
    <div class="wedding-title">
      <div class="cate-title">
          <div class="iconfont iconicon-test cateleft"></div>
          <div class="cateleft cates"><span>结婚</span></div>
          <div class="cateleft cate"><a href="">珠宝首饰</a></div>
          <div class="cateleft cate"><a href="">婚宴</a></div>
          <div class="cateleft cate"><a href="">婚庆公司</a></div>
          <div class="cateright next"><a href=""> > </a></div>
          <div class="cateright all"><a href="">全部</a></div>      
      </div>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <!-- 左侧图片 -->
      <div class="leftcontainer">
        <img src="./images/married.png" alt="">
      </div>
      <!-- 右侧图片 -->
      <div class="rightContainer">
        <!-- 上层图片 -->
        <div class="Imgtop">
          <div class="Imgleft">
            <img src="./images/married2.png" alt="">
          </div>
          <div class="Imgright">
            <img src="./images/married2.png" alt="">
          </div>
        </div>
        <!-- 下层图片 -->
        <div class="Imgtbottom">
          <div class="Imgleft">
            <img src="./images/married2.png" alt="">
          </div>
          <div class="Imgright">
            <img src="./images/married2.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- 最外层 -->
  
</template>

<script>
export default {
  name: 'Getmarry',
}
</script>

<style lang="less" scoped>
  .wrap{
    margin-top: 30px;
    .wedding-wrap {
    // margin-top: 30px;
    position: relative;
    background: #fff;
    width: 1190px;
    height: 526px ;
    margin: 0 auto;
    // 头部
      .wedding-title {
        position: absolute;
        width: 1190px;
        height: 70px;
        top: 0;
        .cate-title {
            width: 1150px;
            height: 30px;
            margin: 20px 20px;
            // border: 1px black solid;
            .cateleft{
              float: left;
              margin-right: 10px;
            }
            .cateright{
              float: right;
            }
            .turnleft {
              float: left;
            }
            .turnright {
              float: right;
            }
            .iconfont{
              width: 30px;
              height: 30px;
              line-height: 30px;
              border-radius: 50%;
              background: orange;
              text-align: center;
              opacity: 0.7;
            }
            .cates {
              height: 30px;
              line-height: 30px;
              font-size: 20px;
            }
            .cate {
              border: 1px solid #e1e1e1;
              height: 22px;
              line-height: 22px;
              cursor: pointer;
              padding: 0 5px;
              margin: 3px 10px 0 0;
              a {
                font-size: 12px;
                color: #777;
              }
            }
            .all {
              width: 24px;
              height: 16px;
              line-height: 16px;
              margin: 7px 7px  7px 0;
              a {
                color: #333;
                font-size: 12px;
                cursor: pointer;
                line-height: 14px;
              }
            }
            .next {
              margin-top: 4px;
              a {
                font-size: 16px;
                font-weight: bold;
                color: #ccc;
              }
            }


          }
      }
      
      // 底部
      .bottom {
        position: absolute;
        width: 1150px;
        height: 456px;
        margin: 0 20px 20px;
        top: 70px;
        
        // <!-- 左侧图片 -->
        .leftcontainer {
          position: absolute;
          top: -3px;
          width: 370px;
          height: 436px;
          margin-right: 20px;
          float: left;
          img {
            width: 100%;
            height: 100%;
          }
        }
        // <!-- 右侧图片 -->
        .rightContainer {
          float: right;
          width: 760px;
          height: 436px;
          .Imgtop {
            width: 760px;
            height: 208px;
            .Imgleft {
              float: left;
            }
            .Imgright {
              float: right;
            }
          }
          .Imgtbottom {
            width: 760px;
            height: 208px;
            margin-top: 20px;
            .Imgleft {
              float: left;
            }
            .Imgright {
              float: right;
            }
            
          }
        }
      }
    }
  }
</style>

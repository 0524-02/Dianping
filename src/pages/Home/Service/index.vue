<template>
  <div class="service-wrap">
        <div class="service-container">
          <!-- 头部 -->
          <div class="service-title">
            <div class="cate-title">
                <div class="iconfont iconicon-test cateleft"></div>
                <div class="cateleft cates"><span>生活服务</span></div>
                <div class="cateleft cate"><a href="">公司企业</a></div>
                <div class="cateleft cate"><a href="">房屋地产</a></div>
                <div class="cateleft cate"><a href="">便民服务</a></div>
                <div class="cateright next"><a href=""> > </a></div>
                <div class="cateright all"><a href="">全部</a></div>      
            </div>
          </div>

          <!-- 底部 -->
          <div class="service-bottom">
            <div class="imgcontainer">
              <div class="item">
                <img src="./images/service1.png" alt="">
                <div class="nav">
                  <span>快照</span>
                </div>
              </div>
              <div class="item">
                <img src="./images/service2.png" alt="">
                <div class="nav">
                  <span>洗护</span>
                </div>
              </div >
              <div class="item">
                <img src="./images/service3.png" alt="">
                <div class="nav">
                  <span>居家维修</span>
                </div>
              </div>
              <div class="item">
                <img src="./images/service4.png" alt="">
                <div class="nav">
                  <span>搬家</span>
                </div>
              </div>
              <div class="item">
                <img src="./images/service5.png" alt="">
                <div class="nav">
                  <span>家政</span>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Study',
}
</script>

<style lang="less" scoped>
   .service-wrap {
      margin-top: 30px;     
      .service-container {
        position: relative;
        width: 1190px;
        height: 308px;
        margin: 0 auto;
        background: #fff;
        // 头部
        .service-title {
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
        .service-bottom{
          position: absolute;
          width: 1190px;
          height: 238px;
          top: 70px;
          .imgcontainer{
            width: 1150px;
            height: 214px;
            margin: 0 20px 24px;
            display: flex;
            justify-content: space-between;
            .item {
              position: relative;
              width: 214px;
              height: 214px;
              float: left;
              img {
                width: 100%;
                height: 100%;
              }
              .nav {
                position: absolute;
                z-index: 99;
                width: 100%;
                height: 50px;
                bottom: 0;    
                color: #fff;
                text-align: center;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-size: 20px;
                background: rgb(61, 42, 5);
                opacity: 0.5;
                span {
                  line-height: 50px;
                }
            }
          }
        }

      }
    }
   }
</style>
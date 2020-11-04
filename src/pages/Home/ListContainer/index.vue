<template>
      <!-- 列表 -->
  <div class="list-container">
    <div class="sortList clearfix">
      
      <div class="center">
        <!-- 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./images/banner1.jpg" alt="">
              </div>
              <!-- <div class="swiper-slide">
                <img src="./images/banner2.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/banner3.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/banner4.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/banner5.jpg" alt="">
              </div> -->
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->

        </div>

        <!-- 热门 -->
        <div class="hot-container">
          <div class="classify1">
             <div class="ads">
               <span class="hot-title">
                <i class="iconfont iconhot1"></i>
                热门分类
              </span>
            </div>
            <div class="goods">
              <div class="goods-list">
                <ul>
                  <li class="item">
                    <a href="">私房菜</a>
                  </li>
                  <li class="item">
                    <a href="">水果生鲜</a>
                  </li>
                  <li class="item">
                    <a href="">食品保健</a>
                  </li>
                  <li class="item">
                    <a href="">下午茶</a>
                  </li>
                  <li class="item">
                    <a href="">人气餐厅</a>
                  </li>
                  <li class="item">
                    <a href="">早茶</a>
                  </li>
                  <li class="item">
                    <a href="">饮品店</a>
                  </li>
                  <li class="item">
                    <a href="">特色菜</a>
                  </li>
                  <li class="item">
                    <a href="">烤肉</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="classify1">
             <div class="ads">
              <span class="hot-title">
                <i class="iconfont iconarea_fill"></i>
                热门商圈
              </span>
            </div>
            <div class="goods">
              <div class="goods-list">
                <ul>
                  <li class="item">
                    <a href="">三里屯/工体</a>
                  </li>
                  <li class="item">
                    <a href="">望京</a>
                  </li>
                  <li class="item">
                    <a href="">西单</a>
                  </li>
                  <li class="item">
                    <a href="">五道口</a>
                  </li>
                  <li class="item">
                    <a href="">国贸/健外</a>
                  </li>
                  <li class="item">
                    <a href="">中关村</a>
                  </li>
                  <li class="item">
                    <a href="">王府井/东单</a>
                  </li>
                  <li class="item">
                    <a href="">崇文门</a>
                  </li>
                  <li class="item">
                    <a href="">双井</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="classify2">
            <div class="adh">
              <span class="hot-title">
                <i class="iconfont iconsubway"></i>
                地铁线
              </span>
              
            </div>
            <div class="goods">
              <div class="goods-list">
                <ul>
                  <li class="item">
                    <a href="">10号线</a>
                  </li>
                  <li class="item">
                    <a href="">4号线</a>
                  </li>
                  <li class="item">
                    <a href="">5号线</a>
                  </li>
                  <li class="item">
                    <a href="">1号线</a>
                  </li>
                  <li class="item">
                    <a href="">6号线</a>
                  </li>
                  <li class="item">
                    <a href="">2号线</a>
                  </li>
                  <li class="item">
                    <a href="">13号线</a>
                  </li>
                  <li class="item">
                    <a href="">8号线</a>
                  </li>
                  <li class="item">
                    <a href="">14号线</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 侧边栏个人信息 -->
        <div class="userinfo-vip">
         <!-- 用户信息容器 -->
         <div class="userinfo">
           <!-- 个人头部信息 -->
           <div class="info">
           <!-- 图片容器 -->
              <div class="user-pic">
                <a href="" class="user-link">
                  <img class="user" src="./images/user.png" alt="">
                </a>
              </div>

              <div class="hello-user">
                <span>Hi，上午好</span>
              </div>

               <div class="comment">
                <span>登录大众点评，发现品质生活</span>
              </div>

              <div class="choose">
                <div class="choose-item">
                   <div class="item login"><span>登录</span></div>
                    <div class="item register"><span>注册</span></div>
                </div>    
              </div>
           </div>

            <!-- 热帖 部落 -->
            <div class="vip-info">
                <div class="info-container">
                  <!-- 热帖部落 -->
                  <div class="container">
                    <div class="wrap">
                      <!-- 热帖 -->
                      <div class="host-post">
                        <div class="iconfont iconhot1"></div>
                        <div class="host current">热帖</div>
                      </div>
                      <!-- 部落 -->
                      <div class="clan-post">
                        <div class="iconfont iconicon_map"></div>
                        <div class="clan current">部落</div>
                      </div>
                    </div>
                    
                  </div>

                  <div class="bigcontainer1">

                      <!-- 部落显示内容 -->
                    <div class="itemwrap">
                        <!-- 美食厨房 -->
                        <div class="sweet">
                          <a href="">
                            <div class="kitchen-wrap">
                              <div class="img-wrap">
                                <a href="">
                                  <img src="./images/DIY.jpg" alt="">
                                </a>
                              </div>
                              <div class="context">
                                <div class="diy">
                                  <span>美食厨房DIY</span>
                                </div>
                                <div class="member">
                                  <span>成员：131978</span>
                                </div>
                              </div>
                            </div>
                          </a>
                         </div>
                      

                      <!-- 交流社 -->
                        <div class="sweet">
                          <a href="">
                            <div class="kitchen-wrap">
                              <div class="img-wrap">
                                <a href="">
                                  <img src="./images/DIY2.jpg" alt="">
                                </a>
                              </div>
                              <div class="context">
                                <div class="diy">
                                  <span>美食厨房DIY</span>
                                </div>
                                <div class="member">
                                  <span>成员：131978</span>
                                </div>
                              </div>
                          </div>
                          </a>
                        </div>
                      
                    </div>

                    <!-- 热帖显示内容 -->
                    <!-- <div class="bigcontainer1">
                      <div class="content">
                        <span>PANINO帕尼诺餐吧-闹市净土,小胖曰锣鼓洞天：南锣鼓巷网红店，三月种草|清爽一夏，这家越南菜, 鮨心屋里 粽香满堂</span>
                      </div>
                    </div> -->
                   
                  </div>
                  
                </div>
            </div>

            <!-- 专享优惠 -->
              <div class="discounts-wrap">
                <div class="discounts">
                  <!-- 二维码 -->
                  <div class="erweima">
                    <img src="./images/erweima.png" alt="">
                  </div>

                  <div class="referential-card">
                    <div class="referential">
                      <i class="iconfont iconwallet "></i>
                      <span>专享优惠</span>
                    </div>
                    <div class="referential">
                      <i class="iconfont iconshopping"></i>
                      <span>专享优惠</span>
                    </div>
                  </div>
                </div>
              </div>
         </div>
         
        </div>
    </div>
  </div>


</template>

<script>
// import Swiper from 'swiper';
// import "swiper/css/swiper.min.css";
export default {
  name: 'ListContainer',
}
</script>

<style lang="less" scoped>
.list-container {
  position: relative;
  width: 1190px;
  height: 510px;
  margin: 0 auto;
  .sortList {
    position: absolute;
    height: 510px;
    width: 980px;
    right: 0;
    .center {
      position: relative;
      width: 770px;
      height: 100%;
      margin: 10px 10px 0 10px;
      // 轮播图
      .swiper-container {
        width: 770px;
        height: 300px;
        .swiper-wrapper {
          width: 770px;
          height: 300px;
          .swiper-slide {
            width: 770px;
            height: 300px;
            float: left;
            img {
              width: 100%;
              height: 100%;
              float: left;
            }
          }
        }
      }

      // 热门
      .hot-container {
        position: absolute;
        width: 770px;
        height: 200px;
        background: #fff;
        margin-top: 10px;
        background: white;
        .classify1 {
          width: 289px;
          height: 156px;
          border-right: 1px dashed #eee;
          float: left;
          .ads {
            text-align: center;
            width: 237px;
            height: 19px;
            margin: 10px 26px 0;
            padding: 0 0 21px;
            .hot-title {
              font-size: 16px;
              font-weight: bold;
              color: #333;
              .iconfont {
                font-size: 20px;
                font-weight: bold;
                color: #ff6b37;
              }
            }
          }
          .goods {
            width: 237px;
            border-top: 1px dashed #eee;
            margin: 0 auto;
            .goods-list {
              // position: relative;
              width: 100%;
              height: 90px;
              margin-top: 20px;
              ul {
                .item {
                  float: left;
                  width: 72px;
                  height: 30px;
                  margin-right: 7px;
                  a {
                    text-decoration: none;
                    color: #333;
                    &:hover {
                      color: #ff6b37;
                    }
                  }
                }
              }
            }
          }
        }
        .classify2 {
          width: 190px;
          height: 156px;
          float: left;
          .adh {
            text-align: center;
            width: 138px;
            height: 19px;
            margin: 10px 26px 0;
            padding: 0 0 21px;
            .hot-title {
              font-size: 16px;
              font-weight: bold;
              color: #333;
              .iconfont {
                font-weight: bold;
                color: #ff6b37;
              }
            }
          }
          .goods {
            width: 138px;
            border-top: 1px dashed #eee;
            margin: 0 auto;
            .goods-list {
              width: 100%;
              height: 90px;
              margin-top: 20px;
              ul {
                .item {
                  width: 40px;
                  height: 30px;
                  margin-right: 6px;
                  float: left;
                  a {
                    text-decoration: none;
                    color: #333;
                    &:hover {
                      color: #ff6b37;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    // 侧边栏个人信息
    .userinfo-vip {
      position: absolute;
      top:10px;
      right: 0;
      width: 160px;
      height: 510px;
      padding: 0 15px;
      background: #fff;
      // 个人头部信息
      .userinfo {
        width: 160px;
        height: 166px;
        margin-top: 16px;
        border-bottom: 1px dashed #eeeeee;
        .info {
          width: 100%;
          height: 133px;
          // border-bottom: 1px dashed #eee;
          .user-pic {
            width: 61px;
            height: 61px;
            margin: 0 auto;
            border-radius: 50%;
            
            img {
              width: 100%;
              height: 100%;
            }
          }
          .hello-user {
            width: 100%;
            text-align: center;
            margin-top: 7px;
            span {
              font-size: 12px;
              color: #333;
            }
          }
          .comment {
            width: 100%;
            text-align: center;
            margin-top: 4px;
            span {
              color: #999;
              font-size: 12px;
            }
          }
          .choose {
            margin-top: 10px;
            width: 100%;
            height: 24px;
            .choose-item {
              width: 160px;
              height: 100%;
              margin: 0 auto;
              .item {
                width: 76px;
                height: 24px;
                background: #ff6633;
                text-align: center;
                span {
                  line-height: 24px;
                  font-size: 12px;
                  color: #fff;
                }
              }
              .login {
                float: left;
              }
              .register {
                float: right;
              }
            }
          }
        }
      }

      // 热帖部落
      .vip-info {
        top: 182px;
        width: 160px;
        height: 191px;
        padding: 18px 0;
        border-bottom: 1px dashed #eee;
        .info-container {
          width: 100%;
          height: 155px;
          margin-top: 30px;
          // border-bottom: 1px dashed #eee;
          //  热帖部落
          .container {
            width: 160px;
            height: 49px;
            margin-bottom: 18px;
            .wrap {
              width: 112px;
              height: 100%;
              margin: 0 auto;
              .host-post {
                float: left;
                width: 48px;
                height: 47px;
                margin-right: 8px;
                .iconfont {
                  font-size: 20px;
                  margin: 0 13px;
                }
                .host {
                  width: 24px;
                  height: 21px;
                  margin: 5px 13px 0;
                  color: #777;
                }
              }
              .clan-post {
                float: right;
                width: 48px;
                height: 47px;
                margin-left: 8px;
                .iconfont {
                  font-size: 20px;
                  margin: 0 13px;
                }
                .clan {
                  width: 24px;
                  height: 21px;
                  margin: 5px 13px 0;
                  color: #777;
                }
              }
            }
          }
          //  显示隐藏容器
          .bigcontainer1 {
            width: 160px;
            height: 100px;
            .sweet {
              margin-bottom: 10px;
              width: 100%;
              height: 43px;
              &:hover {
                background: #eee;
              }
            }
            .kitchen-wrap {
              width: 160px;
              height: 34px;
              margin-bottom: 18px;
              .img-wrap {
                float: left;
                width: 34px;
                height: 34px;
                img {
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                }
              }
              .context {
                float: right;
                width: 119px;
                height: 100%;
                // margin-left: 41px;
                .diy {
                  width: 68px;
                  span {
                    font-size: 12px;
                    color: #333;
                  }
                }
                .member {
                  width: 119px;
                  span {
                    color: #999;
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
      }

      // 专享优惠
    .discounts-wrap {
      .discounts {
        width: 160px;
        height: 76px;
        margin-top: 7px;
        // 二维码
        .erweima {
          float: left;
          width: 76px;
          height: 76px;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .referential-card {
          float: right;
          width: 84px;
          height: 52px;
          padding-top: 10px;
          .iconfont {
            color: #ff6633;
          }
          span {
            color: #999;
          }
        }
      }
     
    }
    }
  }
}
</style>

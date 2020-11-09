<template>
   <div class="box">
    <div class="wrapper">
      <!-- 导航占位置 -->
      <div class="navBar">
        <div class="warp">
          <div class="navContainer">
            <div class="logo">
              <router-link to="/">
                <img src="http://www.dpfile.com/app/pc-common/i/logo_user@2x.png" class="logoPhoto" alt="">
              </router-link>
            </div>
            <div class="navItem">
              <span class="textOne text"  >

                <span v-if="userInfo.phone "> {{userInfo.phone }}</span>
                <span v-else  @click="login"> 请登录</span>
                <span class="line">|</span>
                <div class="nickActive" v-if="userInfo.phone">
                  <div class="container">
                    <div class="topContainer">
                      <div class="leftPic">
                        <img :src="userCard.userFace"
                          alt="">
                      </div>
                      <div class="rightPersonal">
                        <div class="nickName">
                          <i class="iconfont iconfont iconmedal"></i>
                           {{userInfo.phone}}
                        </div>
                        <div class="me-container">
                          <span>评价 0</span>
                          <span>帖子 0</span>
                          <span>粉丝 {{userCard.star}}</span>
                        </div>
                      </div>

                    </div>
                    <div class="bottomContainer">
                      <div class="setContainer">
                        <span>个人设置 |</span>
                        <span @click="logout"> 退出</span>
                      </div>
                    </div>
                  </div>
                </div>


              </span>
              <span class="text">
                消息 <span class="line">|</span>
              </span>
              <span class="text">
                个人中心<i class="iconfont iconjiantou32"></i> <span class="line">|</span>
              </span>
              <span class="text">
                商户服务<i class="iconfont iconjiantou32"></i> <span class="line">|</span>
              </span>
              <span class="text">
                帮助中心 <i class="iconfont iconjiantou32"></i>
              </span>
            </div>

          </div>
        </div>
      </div>
      <!-- 换肤精灵图 -->
      <div class="skin-box">
        <div class="skin-btn">
          <i class="iconfont iconyifu"></i>
          <a href="javascript:;">换肤</a>
        </div>
      </div>
      <!-- 主内容 -->
      <div class="centerContainer" >
        <!-- 头部个人信息页面 -->
        <header>
          <!-- 头像区域 -->
          <div class="avatar">
            <div class="container">
              <img :src="userCard.userFace" alt="">
              <a href="javascript:;" class="upAvatar">上传头像</a>
            </div>
          </div>
          <!-- 昵称 navBar -->
          <div class="rightWarpper">
            <div class="nickName">
              <h2 class="nick"> {{userCard.userNickName}}</h2>
              <span>[编辑资料]</span>
            </div>
            <div class="address">
              <i class="iconfont iconmedal"></i>

              <div class="userAddress"> <i class="iconfont iconnvhai"></i>  {{ userCard.city}} </div>
            </div>
            <!-- 导航标签 -->
            <div class="navBarContainer">

              <div class="item " :class="count===0? 'active':''">
                <a class="btn  " @click="count=0":class="count===0? 'active':''" >首页</a>
              </div>
              <div class="item">
                <a class="btn" >评价</a>
              </div>
              <div class="item"  :class="count===1? 'active':''" >
                <a class="btn" @click="goCheckNav"   :class="count===1? 'active':''">收藏</a>
              </div>
              <div class="item">
                <a class="btn">签到</a>
              </div>
              <div class="item">
                <a class="btn">图片</a>
              </div>
              <div class="item">
                <a class="btn">攻略</a>
              </div>
              <div class="item">
                <a class="btn">帖子</a>
              </div>
            </div>
          </div>
        </header>
        <!-- 详情信息 -->
        <div class="detail"  v-if="count===0">
          <!-- 左边关注粉丝盒子 -->
          <div class="leftDetail">
            <div class="leftContainer">
              <!-- 关注 粉丝 -->
              <div class="itemNav">
                <div class="item">
                  <div class="title">关注</div>
                  <div class="nub">
                    {{userCard.attention}}
                  </div>
                </div>
                <div class="item">
                  <div class="title">粉丝</div>
                  <div class="nub">
                       {{userCard.fans}}
                  </div>
                </div>
                <div class="item">
                  <div class="title">获赞</div>
                  <div class="nub">
                                       {{userCard.star}}

                  </div>
                </div>
              </div>
              <!-- 社区等级 -->
              <div class="community">
                <div class="container">
                  <div class="level">社区等级: <span>  </span></div>
                  <div class="time">注册等级: <span>{{userCard.time}}</span></div>
                </div>

              </div>
              <!-- 个人简介 -->
              <div class="communitPprofile">
                <div class="container">
                  <div class="profile">简介: <span> {{userCard.introduction}}</span></div>
                </div>

              </div>
            </div>
          </div>
          <!-- 右边评价 -->
          <div class="rightContainer">
            <div class="main">
              <div class="modebox">
                <h3 class="comment">评价</h3>
                <div class="content">
               {{userCard.evaluation}}
                  <button class="commentBtn">写评论</button>
                </div>
              </div>
            </div>
            <div class="main">
              <div class="modebox">
                <h3 class="comment">图片</h3>
                <div class="content">
                  无论是摄影粉，还是验毒派，还原现场分享给更多人是最大滴美德啊~一句话，有图有真相！
                </div>


              </div>



            </div>
            <div class="main">
              <div class="modebox">
                <h3 class="comment">攻略</h3>
                <div class="content">
                  无论是摄影粉，还是验毒派，还原现场分享给更多人是最大滴美德啊~一句话，有图有真相！
                </div>


              </div>



            </div>
            <div class="main">
              <div class="modebox">
                <h3 class="comment">签到</h3>
                <div class="content">
                  人的一生，看过很多风景，遇见过很多人~用签到随时记录自己去过的地方。
                  怎么玩签到？<a class="getDianping" href="www.dianping.com/help/faq">www.dianping.com/help/faq</a>
                </div>


              </div>



            </div>
            <div class="main">
              <div class="modebox">
                <h3 class="comment">帖子</h3>
                <div class="content">
                  社区就是资深dpers的大本营，谈美食、聊游记、扯八卦、抢赠品~快去社区发个处女帖
                  <button class="commentBtn">发帖子</button>
                </div>
              </div>
            </div>
          </div>
        </div>
         <!-- tab切换的盒子 -->
      <div class="checkContainer" v-else>
        <!-- 左边盒子、、 -->
        <div class="leftWarp">
          <div class="warpContainer">
            <!-- 导航区域 -->
            <div class="navBtn">
              <div class="navItem">
                <a href="javascript:;" class="active">收藏商户</a>
                <span class="line">|</span>
              </div>
              <div class="navItem  ">
                <a href="javascript:;" >收藏攻略</a>
                <span class="line">|</span>

              </div>
              <div class="navItem">
                <a href="javascript:;">收藏帖子</a>
                <span class="line">|</span>

              </div>
              <div class="navItem">
                <a href="javascript:;">收藏评价</a>
                <span class="line">|</span>

              </div>
            </div>
            <!-- modebox p-term-list美食收藏区域 -->
            <div class="p-term-list">
              <ul class="container">
                <li>
                  <span class="footerContainer classification">
                    全部分类
                  </span>
                  <span class="footer item">
                    {{userCard.category}}
                  </span>
                </li>
                <li>
                  <span class="cityConainer classification">
                    全部城市
                  </span>
                  <span class="city item ">
                     {{userCard.city}}
                  </span>
                </li>
              </ul>
            </div>
            <!-- 优先选择xxx -->
            <div class="checkBox">
              <div class="container">

                <input type="checkbox" name="" checked id="">
                <span>优先显示有优惠的商户</span>

              </div>
            </div>
            <!-- 商家信息 -->
            <div class="merchanInfo"  v-for="(favorite, index) in favoriteMerchant" :key="favorite.id">
              <div class="container " :class="favorite.id=== '001' ?'active':''">
                <h6 class="title">
                  {{favorite.shopName}}
                </h6>
                <div class="detaiInfo">
                  <span class="star"></span>
                  <span class="city">[{{favorite.city}}]</span>
                  <span class="address"> {{favorite.address}}</span>
                  <span class="phone"> {{favorite.phone}}</span>

                </div>
                <div class="operating">
                  <span class="time">2020-01-18 02:12 收藏</span>
                  <span><i>|</i> 编辑</span>
                  <span><i>|</i> 删除</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <!-- 右边盒子 -->
        <div class="rightWarp">
          <!--收藏商户-->
          <div class="favoritesWarp">
            <div class="container">
              <h3>收藏一家商户</h3>
              <p>把平时想去的商户收集起来，想起的时候就能快速找到啦。还可以设置收藏的标签，区分不同种类的商户。</p>
              <a href="javascrpi:;">看看人气商户»</a></a></a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <!-- 底部盒子 -->
      <div class="footer-container">
        <div class="container">
          <ul class="item">
            <li>关于我们<span class="line">|</span></li>
            <li>商户诚信公约<span class="line">|</span></li>
            <li>规则中心<span class="line">|</span></li>
            <li>媒体报道<span class="line">|</span></li>
            <li>商户入驻<span class="line">|</span></li>
            <li>推广服务<span class="line">|</span></li>
            <li>人才招聘<span class="line">|</span></li>
            <li>最新咨询<span class="line">|</span></li>
            <li>联系我们<span class="line">|</span></li>
            <li>应用下载<span class="line">|</span></li>
          </ul>
          <div class="rights">
            <span class="left">©2003-2020 dianping.com, All Rights Reserved.</span>
            <span class="right">本站发布的所有内容，未经许可，不得转载，详见 《知识产权声明》。</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqUserLogout } from "@/api";
import { mapMutations, mapState } from "vuex";
export default {
  name: "",
  data() {
    return {
      count:0,
    }
  },

  mounted() {
    this.getPersonalInfo();
  },
  methods: {
    //登录
    login(){
      this.$router.push('/login')
      this.getPersonalInfo();
    },
     // 退出登录
    async logout() {
      // 发请求
       await this.$store.dispatch('userLogout')
         this.$message.success('退出登录成功')
     
    
    },
    //切换到收藏页面
    goCheckNav(){
      this.count = 1
    },
    async getPersonalInfo() {
      const result = await this.$store.dispatch("getPersonalInfoActions");
    },
  },
  computed: {
    ...mapState({
      personalInfo: (state) => state.personal.personalInfo,
      userInfo:(state)=> state.user.userInfo || {}
    }),
    
    userCard(){
      return this.personalInfo.userCard || {}
    },
    favoriteMerchant(){
      return this.personalInfo.userCard.favoriteMerchant || []
    }
  },
};
</script>

<style lang="less" scoped>
.box {
  height: 100%;
  width: 100%;
  overflow: hidden;

  .wrapper {
    height: 100%;
    width: 100%;
    background: url(http://www.dpfile.com/s/c/user/skins/default/i/bg.a1af512066266a62159b1566e19a0333.jpg)50% 30px no-repeat #fdfbef;

    // <!-- 导航占位置 -->
    .navBar {
      width: 100%;
      height: 45px;
      background-color: #313131;

      .warp {
        width: 960px;
        margin: 0 auto;
        height: 100%;

        .navContainer {
          // height: 100%;
          padding-top: 4px;
          box-sizing: border-box;

          .logo {
            float: left;
            padding-left: 5px;
            .logoPhoto {
              width: 105px;
              height: 30px;
              padding-top: 4px;
            }

          }

          .navItem {
            float: right;
            padding: 0 17px;
            line-height: 17px;
            display: flex;
            cursor: pointer;
            vertical-align: middle;
            margin: 5px 0;
            position: relative;
            .text {
              color: #999;
              padding: 5px 0 5px 17px;
              line-height:22px;
              display: block;
              // text-align: center;
              z-index: 2;
              .nickActive{
                display: none;
                position: absolute;
                left: 17px;
                top: 26px;
                border: 1px solid #e0e0e0;
              border-top: none;
                background-color: #fff;
                .container{
                  padding: 20px;
                  .topContainer{
                    display: flex;
                    .leftPic{
                      width: 60px;
                      height: 60px;
                      img{
                        display: block;
                        width: 100%;
                        height: 100%;
                      }
                    }
                    .rightPersonal{
                
                      margin-left: 20px;
                      .nickName{
                        padding-top: 10px;
                        color: #999;
                      }
                    }
                    .me-container{
                      display: flex;
                      span{
                        padding: 10px 10px 0  0;
                      }
                    }
                  }
                  .bottomContainer{
                    .setContainer{
                      float: right;
                      margin-bottom: 10px;
                    }
                  }
                }
              }
              .iconfont {
                vertical-align: text-top;
              }

              .line {
                padding: 0 10px;
                line-height: 17px;
                // margin: 0 15px;
                color: #c7c7c7;
              }
              
            }
            .textOne:hover{
              background-color: #fff;
              color: #f63;
            }
              .textOne:hover .nickActive{
              display: block;
              color: #999;
            }
            .navItem:hover .text{
              color: #f63;

            }

          }
        }
      }
    }

    // <!-- 换肤精灵图 -->
    .skin-box {
      .skin-btn {
        display: block;
        position: absolute;
        top: 55px;
        right: 263px;
        padding: 3px 10px;
        -webkit-border-radius: 15px;
        border-radius: 15px;
        font-size: 14px;
        font-weight: 700;
        text-decoration: none;
        background-color: rgba(255, 132, 0, .5);
        color: #fff;

        a {
          color: #fff;

        }
      }
    }

    //主内容
    .centerContainer {
      width: 960px;

      //  margin-bottom: -4000px;
      // padding-bottom: 4000px;
      margin: 0 auto;
      overflow: hidden;

      header {
        width: 950px;
        height: 120px;
        margin-top: 75px;
        padding: 10px 0 10px 10px;
        margin-bottom: 10px;
        display: flex;
        background: url(http://www.dpfile.com/s/c/user/i/header-bg.02aef002608d3725d5c641024b2efc19.png) no-repeat;

        //头像区域
        .avatar {
          .container {
            position: relative;
            width: 120px;
            height: 120px;
            margin-right: 10px;

            img {
              width: 100%;
              height: 100%;
            }

            .upAvatar {
              position: absolute;
              bottom: 0;
              right: 0;
              padding: 3px 5px;
              color: #fff;
              border-radius: 5px 0;
              -moz-border-radius: 5px 0;
              -webkit-border-radius: 5px 0 5px 0;
              background-color: rgba(0, 0, 0, .5);
            }
          }

        }

        .rightWarpper {
          display: flex;
          flex-direction: column;

          .nickName {

            padding: 5px 0 0 10px;
            display: flex;

            .nick {
              font-size: 20px;
              margin-right: 5px;
              color: #555;
            }

            span {
              height: 30px;
              line-height: 33px;
              color: #2595b7;
            }
          }

          .address {
            padding: 5px 0 0 10px;
            display: flex;
            vertical-align: bottom;

            .iconmedal {
              margin: 0 15px 0 0;
            }

            .userAddress {
              color: #999;
              margin-right: 10px;

            }
          }

          .navBarContainer {
            width: 820px;
            padding: 10px 0;
            margin-top: 10px;
            background-color: #fff;
            display: flex;

            .item {
              border: .2PX solid #ff8400;

              background-color: #fdfbef;
              margin-right: 5px;

              -webkit-border-radius: 2px;
              -moz-border-radius: 2px;
              -webkit-border-radius: 2px;
              border-radius: 2px;

              &.active {
                background-color: #ff8400;
                border-color: #ff8400;
              }

              &:hover {
                background-color: #ff8400;
                border-color: #ff8400;
              }


              .btn {
                color: #ff8400;
                width: 90px;
                height: 21px;
                line-height: 21px;
                display: block;
                text-align: center;
                padding: 7px 9px 7px 10px;
                font-size: 14px;
                float: left;
                vertical-align: middle;
                -webkit-border-radius: 2px;
                -moz-border-radius: 2px;
                -webkit-border-radius: 2px;
                border-radius: 2px;

                &.active {
                  color: #fff;
                  font-weight: 700;
                }

                &:hover {
                  color: #fff;
                  font-weight: 700;
                }
              }
            }
          }
        }
      }

      // <!-- 详情信息 -->
      .detail {
        margin-top: 10px;
        width: 100%;
        // height: 405px;
        display: flex;
        overflow: hidden;

        //左边关注粉丝盒子
        .leftDetail {
          width: 240px;
          background-color: rgba(255, 255, 255, .8);
          margin-right: 10px;
          margin-bottom: -4000px;
          padding-bottom: 4000px;

          .leftContainer {
            width: 240px;
            border-bottom: 1px dotted #2595b7;
            padding: 15px 0 10px;


            .itemNav {
              display: flex;
              margin: 15px;
              padding-bottom: 15px;
              border-bottom: 1px dotted #2595b7;

              .item {
                border-right: 1px solid #eaeaea;
                width: 70px;
                height: 41px;
                padding: 0 5px;
                text-align: center;
                margin-left: -1px;

                &:last-child {
                  border-right: none;
                }

                .title {

                  padding-bottom: 5px;

                }

                .nub {
                  color: #2595b7;
                }
              }
            }

            .community {
              margin: 15px;
              // padding-bottom: 15px;
              border-bottom: 1px dotted #2595b7;

              padding-bottom: 20px;

              .container {
                margin: 0 15px;
                color: #555;

                .level {
                  margin-bottom: 10px;
                }

                .level,
                .time {
                  color: #999;

                  span {
                    color: #555;
                  }
                }
              }
            }

            .communitPprofile {
              margin: 15px;

              .container {
                margin: 0 15px;
                color: #555;



              }
            }
          }
        }

        .rightContainer {
          width: 710px;
          background-color: #fff;
          margin-bottom: -4000px;
          padding-bottom: 4050px;
          min-height: 350px;
          display: table-cell;

          .main {
            position: relative;
            border-bottom: 1px dotted #e0eef6;
            padding: 20px 30px 20px 90px;

            .modebox {
              .comment {
                position: absolute;
                width: 90px;
                text-align: center;
                left: 0;
                top: 25px;
                font-size: 16px;
                text-align: center;
                color: #555;
              }

              .content {
                padding-top: 8px;
                position: relative;

                .getDianping {
                  color: #2595b7;
                }

                .commentBtn {
                  color: #666;
                  height: 22px;
                  line-height: 22px;
                  border: 1px solid gray !important;
                  padding: 0 8px 0 10px;
                  overflow: visible;
                  border: 0;
                  margin: 0;
                  cursor: pointer;
                  position: absolute;
                  right: 0;
                  top: 4px;
                }
              }
            }
          }
        }

      }
       //切换的主内容
      .checkContainer{
       
        // height: 500px;
        width: 960px;
        margin: 10px auto;
        background-color: #fff;
        display: flex;
        //左边盒子、、
        .leftWarp{
          width: 710px;
          height: 100%;
          // margin-right: 10px;
          .warpContainer{
            padding: 10px 25px;
            font-size: 14px;
            border-right: 1px solid #e0eef6;

            // <!-- 导航区域 -->
            .navBtn{
              display: flex;
              border-bottom: 1px solid #e0eef6;
              .navItem{
                padding: 5px;
                position: relative;
                top: -1px;
               a{
                 color: #2595b7;
                 padding: 5px;
                 font-size: 14px;
                 &.active{
                  color: #424242 !important;
                  font-weight: 700;
                  text-decoration: none;
                 }
                 &:hover{
                  color: #2595b7 !important; 
                 }
                 
               }
               .active{
                border-bottom: 2px solid #2595b7;

               }
               span{
                padding: 0 10px;
                color: #eaeaea;
               }
               
              }
            }
            // <!-- modebox p-term-list美食收藏区域 -->
            .p-term-list{
              .container{
                padding: 0 20px 15px;
               border-bottom: 1px dashed #e8efda;
               li{
                padding: 8px 50px 0 14px;

                display: flex;
                font-size: 12px;
                .classification{
                  width: 65px;
                  margin: 8px 0 0 6px;
                  padding-right: 5px;
                  font-weight: 700;
                }
                .item{
                  text-overflow: ellipsis;
                   white-space: nowrap;
                   line-height: 28px;
                   height: 28px;
                   margin-left: 10px;
                }
               }
              }
            }
          //优先选择xxx
          .checkBox{
            height: 42px;
            font: 12px/1.5 Helvetica,Arial,sans-serif;
            .container{
              float: right;
              padding: 12px 0 10px;
             
            }
          }
          .merchanInfo{
            padding-bottom: 20px;
            .container{
              background-color: #fff;
              padding: 18px 20px;
              &.active{
                background-color: #f8f8f8;
                }
              .title{
                margin-bottom: 10px;
                font-size: 14px;
                margin-right: 7px;
                overflow: hidden;
                color: #2595b7;
              }
              .detaiInfo{
                padding-bottom: 5px;
                display: flex;
                font-size: 12px;
                color: #555;
                .star{
                  display: block;
                  background-image: url(./images/star.png);
                  background-repeat: no-repeat;
                  width: 64px;
                  height: 12px;
                  margin: 3px 12px 0 0;
                  background-position: 0 -34px;
                }
                .address{
                  margin: 0 5px;
                }
              }
              .operating{
                margin: 4px 0 0;
                font-size: 12px;
                .time{
                  margin-right: 5px;
                  color: #999;
                }
                span{
                  color:#2595b7 ;
                  i{
                    padding: 0 10px;
                    color: #eaeaea;
                  }
                }
               
              }
            }
          }
          }
        }
        //右边盒子
        .rightWarp{
          width: 250px;
          // height: 100%;
          background-color: #FEFDF7;
          .favoritesWarp{
            padding: 20px 20px;
            .container{
              h3{
                padding: 0 0 15px;
              }
              p{
                margin-bottom: 10px;
                font: 12px/1.5 Helvetica,Arial,sans-serif;
              }
              a{
                color: #2595b7;
                &:hover{
                  text-decoration: underline;
                color: #2595b7 !important;

                }
              }
            }
          }
        }
      }
    }
   

    //底部盒子
    .footer-container {
      width: 100%;
      min-width: 1190px;
      background: #f0f0f0;
      font-size: 12px;
      margin-top: 20px;

      .container {
        width: 1190px;
        margin: 10px auto 0;
        padding: 30px 0;

        .item {
          position: relative;
          left: 186px;
          top: 0;
          text-align: center;
          font-size: 12px;
          color: #8c8c8c;
          display: flex;
          margin: 0 auto 10px;

          li {
            margin: 0 7px;

            .line {
              margin: 0 7px;
              color: #ebebeb;

            }
          }
        }

        .rights {
          text-align: center;
          color: #8c8c8c;

          .left {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>

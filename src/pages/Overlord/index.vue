<template>
   
  <div class="web">
    <div class="main-container">
      <!-- 右侧 -->
      <div class="rightcon">
        <div class="usercon">
          <a href="#" class="avatar">
            <img
              src="//p0.meituan.net/dpgroup/03f55c22dda29d74bb6290a21eb7d9f53557.png"
              alt=""
            />
          </a>
          <div class="login-info">
            <p class="l1">登录大众点评霸王餐</p>
            <p class="l2">抽免单享品质生活</p>
            <a href="#" class="l3">立即登录</a>
            <p class="l4"><span>还没有账号?</span><a href="#">立即注册</a></p>
            <p class="l5">通过第三方登录</p>
            <p class="l6">
              <a href="#">QQ</a>
              <a href="#">微信</a>
              <a href="#">微博</a>
            </p>
            <div class="leader">
              <a href="#">
                <span></span>
                <span class="info2">想吃霸王餐？试试报名聚会活动领队吧!</span>
              </a>
            </div>
          </div>
        </div>
        <div class="newscon">
          <div class="news-title">新鲜事</div>
          <div class="pmd">
            <vue-seamless-scroll :data="listData" class="seamless-warp">
              <ul class="item news-list">
                <li v-for="item in listData" :key="item.id">
                  <a href="#">
                    <img :src="item.userUrl" alt="" />

                    <div class="news-info">
                      {{ item.userName }}
                      <span class="st">{{ item.activityTitle }}</span>
                    </div>
                  </a>
                </li>
              </ul>
            </vue-seamless-scroll>
          </div>
        </div>
      </div>
      <!-- 左侧 -->
      <div class="leftcon">
        <!-- 轮播 -->
        <div class="swiper-container swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="//p0.meituan.net/dpgroup/2da40ee1022b93d49ef285a192348ce01592709.jpg"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="//p0.meituan.net/dpgroup/2da40ee1022b93d49ef285a192348ce01592709.jpg"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="//p0.meituan.net/dpgroup/2da40ee1022b93d49ef285a192348ce01592709.jpg"
                alt=""
              />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="list-wraper">
          <ul class="navList">
            <li
              v-for="(it) in nav"
              :key="it.navId"
              @click="changeShop(it.navId)"
            >
              <span href="#">{{ it.navName }}</span>
            </li>
          </ul>
        </div>
        <div class="playList">
          <ul class="paly-list">
            <li v-for="em in nextnav" :key="em.LnavId">
              <a href="#">{{ em.LnavName }}</a>
            </li>
          </ul>
        </div>
        <div class="shopList">
          <ul class="shop-list">
            <li v-for="item in shop.slice(0, a)" :key="item.offlineActivityId">
              <a href="#">
                <div class="imgwrap">
                  <img :src="item.picUrl" alt="" />
                  <div class="dzq">电子券</div>
                </div>

                <div class="shopInfos">
                  <div class="info1">{{ item.activityTitle }}</div>
                  <span class="addr">{{ item.regionName }}</span>
                  <span class="like-num">{{ item.hits }}人关注</span>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div class="lod">
          <span href="#" class="lod-1" @click="More">
            加载更多
            <div class="jiao"></div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { mapState, mapGetters } from "vuex";
import "swiper/css/swiper.min.css";
export default {
  name: "overlord",
  data() {
    return {
      a: 9,
      shop: [],
    };
  },
  mounted() {
    this.getAllList();
    this.$nextTick(() => {
      var mySwiper = new Swiper(".swiper-container", {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // 如果需要滚动条
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    });
    this.initShop();
  },

  methods: {
    initShop() {
      let shop = this.detail;
      this.$set(this.$data, "shop", shop);
    },
    getAllList() {
      this.$store.dispatch("getAllListInfo");
    },
    More() {
      this.a += 3;
    },
    changeShop(a) {
      if (a == 0) {
        this.initShop();
      } else if (a == a) {
        this.initShop();
        this.shop = this.shop.filter((item) => {
          if (item.mode == a) return item;
        });
      }
    },
  },
  computed: {
    ...mapState({
      allList: (state) => state.overlord.allList,
    }),
    ...mapState({
      listData: (state) => state.overlord.allList.pmd,
    }),
    ...mapGetters(["nav", "nextnav", "detail"]),
  },
  watch: {
    detail(v) {
      this.initShop();
    },
  },
};
</script>

<style lang="less" scoped>
.web {
  background-color: #f2f2f2;

  .main-container {
    padding-top: 20px;
    width: 1190px;
    margin: 15px auto 0;

    .rightcon {
      width: 295px;
      float: right;
      box-sizing: border-box;
      .usercon {
        box-sizing: border-box;
        margin-bottom: 40px;
        background-color: #fff;
        padding: 20px 15px 20px 17px;
        height: 350px;

        .avatar {
          display: block;
          width: 58px;
          height: 58px;
          margin: 4px auto 9px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .login-info {
          text-align: center;
          .l1 {
            font-size: 12px;
            color: #757575;
          }
          .l2 {
            font-size: 16px;
            color: #000;
            height: 20px;
            line-height: 20px;
          }
          .l3 {
            width: 80px;
            height: 25px;
            line-height: 25px;
            border-radius: 5px;
            background-color: #f63;
            color: #fff;
            font-size: 14px;
            display: block;
            margin: 0 auto;
            margin-top: 12px;
          }
          .l4 {
            font-size: 12px;
            color: #757575;
            margin-top: 35px;
            a {
              color: #49a8f1;
            }
          }
          .leader {
            margin-top: 60px;
            font-size: 12px;
            .info2 {
              color: #ff8244;
            }
          }
        }
      }
      .newscon {
        height: 309px;
        box-sizing: border-box;
        background-color: #fff;
        padding: 0 12.5px 12.5px;
        overflow: hidden;
        .news-title {
          font-size: 14px;
          color: #a1a1a1;
          border-bottom: 1px solid #cecece;
          height: 36px;
          line-height: 35.5px;
        }
        .pmd {
          height: 273px;
          overflow: hidden;
          .news-list {
            li {
              height: 40px;
              a {
                display: flex;
                margin-top: 8px;
                img {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                }
                .news-info {
                  line-height: 20px;
                  .st {
                    color: #ff6633;
                  }
                }
              }
            }
          }
        }
      }
    }
    .leftcon {
      .swiper {
        img {
          width: 870px;
          height: 350px;
        }
        .swiper-button-next {
          right: 33px !important;
        }
      }
      .navList {
        display: flex;
        width: 870px;
        margin-top: 38px;
        border-bottom: 1px solid #cecece;
        li {
          border-bottom: 4.5px solid #f63;
          min-width: 79px;
          text-align: center;
          cursor: pointer;
          span {
            height: 40px;
            line-height: 30px;
            font-size: 14px;
          }
        }
      }
      .playList {
        overflow: hidden;
        text-align: right;
        width: 870px;
        .paly-list {
          float: right;
          height: 60px;
          line-height: 57px;
          display: flex;
          font-size: 15px;
          color: #6d6d6d;
          margin-right: 80px;
          li {
            display: block;

            cursor: pointer;
            a {
              padding: 1px 6px;
            }
          }
        }
      }

      .lod {
        width: 870px;
        height: 50px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        .lod-1 {
          display: block;
          width: 100%;
          height: 100%;
          font-size: 15px;
        }
      }
    }
    .shopList {
      .shop-list {
        width: 890px;
        display: flex;
        flex-wrap: wrap;

        li {
          font-size: 16px;
          width: 280px;
          height: 310px;
          background-color: #fff;
          margin-right: 15px;
          margin-bottom: 15px;
          a {
            .imgwrap {
              position: relative;
              img {
                height: 210px;
                display: block;
                width: 100%;
              }
              .dzq {
                width: 105px;
                height: 35px;
                background-color: #f63;
                color: #fff;
                line-height: 35px;
                text-align: center;
                position: absolute;
                top: 0;
                left: 0;
              }
            }
            .shopInfos {
              padding: 8px 10px 10px 11px;
              .info1 {
                color: #141414;
                display: block;
                height: 48px;
                line-height: 23px;
                font-size: 16px;
              }
              .addr {
                display: inline-block;
                margin-top: 10px;
                font-size: 15px;
                font-weight: 500;
                color: #ababab;
              }
              .like-num {
                color: #f63;
                float: right;
                margin-top: 8px;
                font-size: 15px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

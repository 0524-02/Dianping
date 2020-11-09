<template>
  <div>
    <!-- <TypeNav></TypeNav> -->
    <div class="main">
      <div class="py-container">
        <div class="sear-result">北京生活指南</div>
        <div class="navigation">
          <!-- 频道 -->
          <div class="nav-category">
            <h4>频道:</h4>
            <a href="javascript:;" class="def cur"><span>不限</span></a>
            <div class="nc-contain">
              <div class="con">
                <div class="nc-items">
                  <a href="javascript:;"><span>家居</span></a>
                  <a
                    href="javascript:;"
                    v-for="(channels, index) in searchTagsInfo.searchChannel"
                    :key="index"
                    ><span>{{ channels }}</span></a
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- 地点 -->
          <div class="nav-category nav-tabs J_filter_region">
            <h4>地点:</h4>
            <a href="javascript:;" class="def cur"><span>不限</span></a>
            <div class="nc-contain">
              <div id="J_nav_tabs" class="tabs">
                <a
                  href="javascript:;"
                  class="cur1"
                  :class="index == idx ? 'hover' : ''"
                  @click="clk(idx)"
                  v-for="(search, idx) in searchTagsInfo.searchList"
                  :key="idx"
                  ref="bs"
                  ><span class="tit">{{ search }}</span></a
                >
              </div>
              <div id="J_nt_items" class="con">
                <div id="bussi-nav" class="nc-items " v-if="index == 0">
                  <a
                    href="javascript:;"
                    v-for="(search1, idx) in searchTagsInfo.searchItemList1"
                    :key="idx"
                    ><span>{{ search1 }}</span></a
                  >
                </div>
                <div id="bussi-nav" class="nc-items Hide" v-if="index == 1">
                  <a
                    href="javascript:;"
                    v-for="(search2, idx) in searchTagsInfo.searchItemList2"
                    :key="idx"
                    ><span>{{ search2 }}</span></a
                  >
                </div>
                <div
                  id="bussi-nav"
                  class="nc-items nc-more Hide"
                  v-if="index == 2"
                >
                  <a
                    href="javascript:;"
                    v-for="(search3, idx) in searchTagsInfo.searchItemList3"
                    :key="idx"
                    ><span>{{ search3 }}</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrap">
        <div class="shop-wrap">
          <div class="content">
            <div class="filter-box">
              <div class="filt-classify">
                <a href="javascript:;" class=" "
                  ><i class="iconfont iconfangkuang"></i>有团购<i
                    class="icon-hot"
                  ></i
                ></a>
                <a href="javascript:;" class=" "
                  ><i class="iconfont iconfangkuang"></i>可订座</a
                >
              </div>
              <div class="filt-service">
                <ul>
                  <li>
                    <a href="javascript:;" class="cur">智能</a
                    ><em class="sep">|</em>
                  </li>
                  <li>
                    <a href="javascript:;"
                      >好评<i class="iconfont icondown"></i></a
                    ><em class="sep">|</em>
                  </li>
                  <li>
                    <a href="javascript:;"
                      >人气<i class="iconfont icondown"></i></a
                    ><em class="sep">|</em>
                  </li>
                  <li>
                    <a href="javascript:;" @click="setTotalType(searchType)">
                      评价最多
                      <i class="iconfont icondown"></i></a
                    ><em class="sep">|</em>
                  </li>

                  <li class="fs-slt">
                    <a href="##" class="fs-price-tit "
                      ><span class="avgprice">
                        人均<i class="iconfont iconxiala"></i></span
                    ></a>
                    <div class="perCapita">
                      <a href="javascript:;" title="">人均最高</a>
                      <a href="javascript:;" title="">人均最低</a>
                      <div class="ipt-price J_bar-range">
                        <span class="i-box"
                          ><span class="icon">¥</span
                          ><input class="J_range-min" type="text" value=""
                        /></span>
                        <span>-</span>
                        <span class="i-box"
                          ><span class="icon">¥</span
                          ><input class="J_range-max" type="text" value=""
                        /></span>
                        <div class="btn-box">
                          <a
                            href="javascript:void(0);"
                            class="confirm J_range-btn"
                            data-url="/beijing/ch0/{0}"
                            >确定</a
                          >
                          <a
                            href="javascript:void(0);"
                            title=""
                            class="reset J_range-reset"
                            >重置</a
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <a href="javascript:;" class="map"
                ><i class="iconfont icon17"></i
              ></a>
            </div>
            <div class="shop-list">
              <ul>
                <li v-for="(detailList, index) in searchItemsSort" :key="index">
                  <div class="pic">
                    <a href="javascript:;">
                      <img :src="detailList.url" />
                    </a>
                  </div>
                  <div class="txt">
                    <div class="tit">
                      <a href="javascript:;">
                        <h4>
                          {{ detailList.name }}
                          <i class="iconfont icondaohangtuangou"></i>
                        </h4>
                      </a>

                      <div class="promo-icon J_promo_icon">
                        <a href="javascript:;" class="igroup"> </a>
                      </div>
                    </div>
                    <div class="comment">
                      <div class="nebula_star">
                        <div class="star_icon">
                          <span class="iconfont iconstart"></span>
                          <span class="iconfont iconstart"></span>
                          <span class="iconfont iconstart"></span>
                          <span class="iconfont iconstart"></span>
                          <span class="iconfont iconstart"></span>
                        </div>
                      </div>

                      <a href="javascript:;" class="review-num">
                        {{ detailList.total }}条评价</a
                      >
                      <em class="sep">|</em>
                      <a
                        href="javascript:;"
                        class="mean-price"
                        @click="setSearchType(!searchType)"
                      >
                        人均
                        <b>￥{{ detailList.price }}</b>
                      </a>
                    </div>

                    <div class="tag-addr">
                      <a href="javascript:;"
                        ><span class="tag">{{ detailList.tag1 }} </span></a
                      >
                      <em>|</em>
                      <a href="javascript:;"
                        ><span class="tag"> {{ detailList.tag2 }} </span></a
                      >
                      <a href="javascript:;"
                        ><span class="tag"> {{ detailList.tag3 }} </span></a
                      >
                    </div>
                  </div>
                  <div class="svr-info">
                    <a href="javascript:;">
                      <span class="tit">团购：</span>{{ detailList.title }}
                    </a>
                  </div>
                  <div class="masking">
                    <i class="iconfont iconstart"></i>
                    <a
                      href="javascript:void(0);"
                      class="o-favor J_o-favor favorite"
                      ><i></i><span>收藏</span></a
                    >
                    <span class="line">|</span>
                    <a href="javascript:void(0);" class="o-map J_o-map favorite"
                      >地图</a
                    >
                    <span class="line">|</span>
                    <a
                      href="javascript:void(0);"
                      class="o-nearby J_o-nearby favorite"
                      >附近</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="page">
            <el-pagination
              style="text-align:right"
              :page-size="page"
              :pager-count="limit"
              layout="prev, pager, next"
              :total="total1"
            >
              <button>下一页</button>
            </el-pagination>
          </div>

          <div class="sear-result no-result">
            <h4>商户没有被收录？</h4>
            <div class="other-way">
              <a
                href="http://www.dianping.com/addshop/2_?k="
                class=""
                id="popMbox"
                >添加商户</a
              >
            </div>
            <div class="evaluation J_evaluation">
              您对搜索结果：<a
                href="javascript:void(0);"
                rel="nofollow"
                class="y J_good choice"
                ><i class="iconfont icondianzan-copy"></i>满意</a
              ><a
                href="javascript:void(0);"
                rel="nofollow"
                class="n J_no choice"
                ><i class="iconfont iconunpraise"></i>不满</a
              >
            </div>
          </div>
        </div>
        <div class="aside">
          <div class="J_aside-qrcode">
            <a href="javascript:;">
              <div class="qrcode-aside-left">
                <p><span class="tag">券</span><span>专享优惠</span></p>
                <p><span class="tag discount">惠</span><span>手机特价</span></p>
              </div>
              <div class="qrcode-aside-right"></div
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 推荐 -->
</template>

<script>
import { mapState, mapGetters } from "vuex";
import TypeNav from "../../components/TypeNav";
export default {
  name: "Search",
  data() {
    return {
      index: 0,
      page: 5,
      limit: 7,
      total1: 100,
      searchItemsSort: [],
      // price:'',
      // total:'',
      searchType: false //0代表降序，1代表升序
    };
  },
  mounted() {
    this.getSearchTags();
  },
  methods: {
    // 初始化数据
    initSearchParams(){
      const searchItemsSort = [...this.searchItems];
      this.$set(this.$data, "searchItemsSort", searchItemsSort);
    },
    //发请求，拿数据
    async getSearchTags() {
      const result = await this.$store.dispatch("getSearchTagsInfoActions");
    },

    //根据评价实现排序
    setTotalType(searchType) {
      this.searchType = !searchType;
      setTimeout(() => {
        if (searchType) {
          this.initSearchParams()
          this.searchItemsSort.sort((a, b) => {
            return a.total - b.total;
          });
        } else {
          this.initSearchParams()
          this.searchItemsSort.sort((a, b) => {
            // console.log(a);
            return b.total - a.total;
          });
        }
      }, 500);
    },

    //点击地点实现table切换
    clk(idx) {
      this.index = idx;
      console.log(this.searchItemsSort);
    }
  },
  computed: {
    ...mapState({
      searchTagsInfo: state => state.search.searchTagsInfo
    }),
    ...mapState({
      searchItems: state => state.search.searchTagsInfo.searchItems
    })
  },
  watch: {
    // 监视数据的变化
    searchItems(val) {
      this.initSearchParams()
    }
  },
  components: {
    TypeNav
  }
};
</script>

<style lang="less" scoped>
body html {
  width: 100%;
}
.main {
  width: 1190px;
  height: 100%;
  margin: 0 auto;
  margin-top: 20px;
}
.py-container {
  .sear-result {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    line-height: 38px;
    background-color: #f8f8f8;
    border: 1px solid #f0f0f0;
  }
  .navigation {
    border: 1px solid #f0f0f0;
    padding: 18px 0 0 19px;
    background: #fff;
    box-sizing: border-box;
    width: 100%;
    height: 220px;
    zoom: 1;
    .nav-tabs {
      margin-top: 10px;
    }
    .nav-category {
      box-sizing: border-box;
      position: relative;
      padding: 0 0 10px 155px;
      // height: 60px;
      h4 {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 12px;
        color: #999;
      }
      a {
        color: #666;
      }
      .def {
        position: absolute;
        left: 85px;
      }
      .cur {
        span {
          background-color: #f63;
          color: #fff;
          -webkit-border-radius: 2px;
          border-radius: 2px;
          -webkit-border-radius: 10px;
          border-radius: 10px;
          padding: 0 8px;
          height: 20px;
          line-height: 20px;
        }
      }
      #bussi-nav {
        padding-top: 10px;
      }
      .nc-items {
        width: 1014px;
        height: 50px;
        a {
          float: left;
          width: 97px;
          height: 20px;
          margin-bottom: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .nc-contain {
        box-sizing: border-box;
        #J_nt_items {
          position: relative;
          zoom: 1;
          z-index: 9;
          top: -6px;
          // _top: -2px;
          padding: 0 19px;
          background-color: #f8f8f8;
          border: solid 1px #f0f0f0;
        }
        #J_nav_tabs {
          position: relative;
          display: flex;
          top: -6px;
          z-index: 10;
          line-height: 36px;
          height: 36px;
          overflow: hidden;
          .cur1.hover {
            display: block;
            background-color: #f8f8f8;
            border-bottom: 1px solid #f8f8f8;
            z-index: 100;
          }
          .tit {
            padding: 0 20px;
            display: block;
            height: 36px;
            line-height: 36px;
            // -o-text-overflow: initial;
            text-overflow: initial;
            overflow: initial;
            white-space: initial;
            text-decoration: none;
          }
        }
      }
    }
  }
}
.content-wrap {
  width: 1190px;
  height: 100%;
  margin: 0 auto;
  color: #999;
  margin-top: 10px;
  overflow: hidden;
  .shop-wrap {
    float: left;
    width: 950px;
    height: 100%;
    margin-right: 10px;
    margin-bottom: 20px;
    .content {
      height: 100%;
      border: 1px solid #f0f0f0;
      background-color: #fff;
      margin-bottom: 10px;
      border-bottom: none;
      .filter-box {
        position: relative;
        height: 44px;
        z-index: 10;
        padding: 0 45px 0 19px;
        border-bottom: solid 1px #eee;
        line-height: 44px;
        .filt-classify {
          float: left;
          line-height: 44px;
          width: 144px;
          height: 44px;
          a {
            float: left;
            width: 72px;
            .iconfont {
              position: relative;
              display: inline-block;
              width: 13px;
              height: 13px;
              margin-right: 4px;
              font-size: 12px;
            }
          }
        }
        .filt-service {
          float: right;
          text-align: center;
          .fs-slt {
            position: relative;
            width: 92px;
            .perCapita {
              position: absolute;
              top: 44px;
              left: -1px;
              width: 92px;
              height: 135px;
              border: 1px solid #eee;
              padding: 0 0 5px 0;
              overflow: hidden;
              // opacity: 0;
              display: none;
              background: #fff;
              a {
                padding: 0 15px;
                line-height: 26px;
                text-align: left;
              }
              .ipt-price {
                position: absolute;
                width: 91px;
                // height: 65px;
                border-top: solid 1px #f0f0f0;
                bottom: 0;
                left: 0;
                padding: 10px 0 0 1px;
                span {
                  float: left;
                  line-height: 22px;
                  display: block;
                }
                .i-box {
                  position: relative;
                  width: 30px;
                  padding-left: 10px;
                  border: solid 1px #f0f0f0;
                  input {
                    margin-left: -11px;
                    display: inline-block;
                    text-align: start;
                    border-style: inset;
                  }
                }
                a {
                  float: left;
                  padding: 0;
                  margin-top: 5px;
                  width: 40px;
                  background-color: #fff;
                  border: 1px solid #fff;
                  text-align: center;
                }
              }
            }
            &:hover .perCapita {
              display: block;
            }
          }
          ul li {
            position: relative;
            float: left;
            z-index: 1;
            _width: 64px;
            text-align: center;
            a {
              position: relative;
              display: block;
              padding: 0 15px;
              i {
                font-size: 14px;
              }
            }
            em {
              position: absolute;
              top: 0;
              right: -1px;
              color: #e0e0e0;
            }
          }
        }
        .map {
          position: absolute;
          top: 0;
          right: 0;
          width: 44px;
          height: 44px;
          border-left: solid 1px #eee;
          text-align: center;
          i {
            position: relative;
            top: -2px;
            left: 4px;
            font-size: 18px;
            vertical-align: middle;
            background-size: 24px auto;
          }
        }
      }
      .shop-list {
        overflow: hidden;
        ul {
          li {
            border-bottom: 1px solid #eee;
            position: relative;
            margin: 10px;
            float: left;
            zoom: 1;
            padding-left: 210px;
            width: 723px;
            height: 170px;
            .masking {
              position: relative;
              top: -125px;
              left: 620px;
            }
            .pic {
              position: absolute;
              left: 20px;
              top: 6px;
              float: left;
              // margin-right: 14px;
              img {
                width: 170px;
                height: 127px;
                border: 1px solid #f0f0f0;
              }
            }
            .txt {
              position: relative;
              min-height: 88px;
              line-height: 26px;
              .tit {
                width: 723px;
                height: 28px;
                font-size: 14px;
                a {
                  display: inline-block;
                  white-space: nowrap;
                  word-wrap: normal;
                  -o-text-overflow: ellipsis;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  vertical-align: middle;
                  h4 {
                    font-size: 14x;
                    i {
                      margin-left: 8px;
                      margin-top: 4px;
                      float: right;
                      width: 16px;
                      height: 16px;
                      line-height: 16px;
                      font-size: 12px;
                      background-color: #ff6633;
                      color: #fff;
                      text-align: center;
                    }
                  }
                }
              }
              .comment {
                display: flex;
                -webkit-box-align: center;
                -moz-box-align: center;
                -o-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
              }
              .nebula_star {
                display: flex;
                align-items: center;
                height: 27px;
                line-height: 27px;
                .star_icon {
                  display: flex;
                  margin-right: 6px;
                  span {
                    display: block;
                    width: 14px;
                    height: 14px;
                    margin-right: 4px;
                    line-height: 14px;
                    font-size: 12px;
                    color: #fff;
                    text-align: center;
                    background-color: #ff6633;
                  }
                }
              }
              .review-num {
                display: flex;
                width: 68px;
                height: 27px;
                line-height: 27px;
                margin-left: 5px;
              }
              em {
                height: 27px;
                line-height: 27px;
                margin: 0 5px;
                color: #e8e8e8;
              }
              .mean-price {
                height: 27px;
                line-height: 27px;
              }
              .tag-addr {
                height: 27px;
                line-height: 27px;
                .tag {
                  margin-right: 5px;
                }
              }
            }
            .svr-info {
              height: 29px;
              line-height: 29px;
              border-top: 1px dashed #eee;
              padding-top: 3px;
              a {
                font-size: 12px;
                color: #999;
                span {
                  padding-top: 4px;
                  font-size: 14px;
                  color: #ff6633;
                  width: 85%;
                  line-height: 28px;
                }
              }
            }
          }
        }
      }
    }
    .sear-result {
      width: 950px;
      box-sizing: border-box;
      height: 38px;
      overflow: hidden;
      margin-bottom: 10px;
      float: left;
      line-height: 38px;
      background-color: #fff;
      border: 1px solid #f0f0f0;
    }
    .no-result {
      position: relative;
      float: left;
      height: 87px;
      padding: 15px 0 10px 20px;
      .other-way {
        height: 28px;
        a {
          height: 26px;
          float: left;
          line-height: 26px;
          border: 1px solid #ff8400;
          width: 79px;
          text-align: center;
          background-color: #fffcf5;
          color: #f63;
          margin-right: 20px;
          display: block;
        }
      }
      .evaluation {
        position: absolute;
        float: right;
        right: 5px;
        bottom: 15px;
        overflow: hidden;
        .choice {
          display: inline-block;
          // box-sizing: border-box;
          margin-right: 10px;
          width: 40px;
          padding-left: 20px;
          height: 26px;
          line-height: 26px;
          border: 1px solid #d7d7d7;
          background-color: #fbfbfb;
          color: #333;
          position: relative;
          padding-right: 10px;
          i {
            font-size: 12px;
            margin-right: 4px;
          }
          &:hover {
            //  font-size: 16px;
            color: red !important;
          }
        }
      }
    }
  }
  .aside {
    float: right;
    width: 230px;
    height: 100%;
    .J_aside-qrcode {
      width: 188px;
      height: 84px;
      margin-bottom: 10px;
      border: 1px solid #f0f0f0;
      background-color: #fff;
      padding: 10px 20px;
      .qrcode-aside-left {
        width: 100px;
        height: 84px;
        float: left;
        overflow: hidden;
        p {
          font-size: 12px;
          height: 42px;
          line-height: 42px;
          color: #000;
          span {
            display: inline-block;
            height: 16px;
            line-height: 16px;
            margin: 13px 0;
          }
          span.tag {
            display: inline-block;
            width: 16px;
            padding: 0 1px;
            text-align: center;
            color: #fff;
            margin-right: 10px;
            background-color: #ffa631;
          }
        }
      }
      .qrcode-aside-right {
        width: 84px;
        height: 84px;
        float: left;
        overflow: hidden;
        background-image: url(//www.dpfile.com/mod/app-main-search/1.3.0/css/i/qrcode.png);
        background-size: 84px 84px;
      }
    }
  }
}
</style>

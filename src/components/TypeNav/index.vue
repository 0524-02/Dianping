<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="moveOutDiv" @mouseenter="moveInDiv">
        <h2 class="all">全部分类</h2>
        <transition name="show">
          <!-- 三级列表 -->
          <div class="sort" v-show="isShow">
            <div class="all-sort-list" @click="toSearch">
              <div
                class="item"
                v-for="(c1, index) in typeItem.typeList"
                :key="c1.categoryId"
                :class="{item_on:currentIndex === index}"
                @mouseenter="moveIn(index)"
              >
                <h3>
                 <router-link to="/detail"  class="cate">
                 {{ c1.categoryName }}
                  </router-link>
                  <!-- <a href="" class="cate">{{ c1.categoryName }}</a> -->

                     <router-link to="/detail" v-for="(item,index) in c1.hot" :key="index">
                 {{ item }}
                  </router-link>
                  <!-- <a href="" v-for="(item,index) in c1.hot" :key="index">{{ item }}</a> -->
                  <!-- <a href="">{{ b.categoryBreat }}</a> -->
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <!-- 菜系 -->
                    <dl
                      class="fore"
                      v-for="c2 in c1.categoryChild"
                      :key="c2.categoryId"
                    >
                      <dt>
                        <a href="" class="food">{{ c2.categoryName }}</a>
                        <a href="" class="more"
                          >{{ c2.categoryMore }} {{ c2.symbol }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="c3 in c2.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a href="">{{c3.categoryName}}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <router-link to="/overlord">霸王餐</router-link>
        <!-- <a href="###">霸王餐</a> -->
        <i class="iconfont iconhot"></i>
        <a href="###">社区论坛</a>
        <router-link to='/order'>预约订座</router-link>
        <router-link to='/hotels'>酒店</router-link>
        <!-- <a href="###">预约订座</a> -->
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import throttle from 'lodash/throttle';
export default {
  name: 'TypeNav',
  data () {
    return {
      currentIndex: -1,
      isShow: true
    }
  },
  mounted () {
    // this.getTypeItem(); //挪到App.vue当中
    // this.getTypeDatas();

    // 判断如果不是在home页，先隐藏三级分类列表
    if(this.$route.path !== "/home"){
      this.isShow = false;
    }
  },

  methods: {
    // async getTypeItem () {
    //   const result = await this.$store.dispatch('getTypeItem');
    // },
    // async getTypeDatas () {
    //   const result = await this.$store.dispatch('getTypeDatas');
    // },

     // 节流
    moveIn: throttle(
      function (index) {
        this.currentIndex = index;
      },
      50,
      {trailing: false} //让函数在时间间隔内执行完，不写有可能最后的一次是在拖延执行的
    ),

    // 移入到全部商品分类div内部，显示三级分类列表
    moveInDiv(){
      this.isShow = true;
    },
    
    // 移出全部商品div外部，隐藏其他页面的三级分类列表，home当中隐藏二三级分类
    moveOutDiv() {
      this.currentIndex = -1 //隐藏home的二三级分类
      if (this.$route.path !== '/home') {
        this.isShow = false;  //隐藏其他页的的全部三级分类
      }
    },

   

    toSearch(event) {
      let target = event.target;
      let data = target.dataset;

      let { categoryname, category1id, category2id, category3id } = data;
      if (categoryname) {
        let location = {
          name: 'search',
        };

        // 创建query参数的对象，来收集整理query参数
        let query = {
          categoryName: categoryname
        };

        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }

        // 把query参数放到location当中
        location.query = query;

        // 判断当前路由当中是不是有params参数，有就带上
        let { params } = this.$route;
        if (params) {
          location.params = params;
        }

        // 判断当前路径是否是home,是就push，不是就replace
        if (this.$route.path !== "/home") {
          this.$router.replace(location);
        } else {
          this.$router.push(location);
        }
      }
    }

  },

  computed: {
    ...mapState({
      typeItem: (state) => state.typenav.typeItem
    }),
    // ...mapState({
    //   typedatas: (state) => state.typedetail.typedatas
    // }),
  }

}
</script>

<style lang="less" scoped>
.type-nav {
  .container {
    position: relative;
    width: 1190px;
    height: 35px;
    margin: 0 auto;
    line-height: 35px;
    display: flex;
    .all {
      width: 210px;
      color: #fff;
      font-size: 15px;
      background: #ff6b37;
      padding-left: 15px;
      margin-left: 0;
      box-sizing: border-box;
      top: 37px;
    }
    .nav {
      a {
        font-size: 15px;
        color: #333;
        text-decoration: none;
        display: inline-block;
        margin-left: 50px;
        font-weight: 700;
      }
      .iconfont {
        display: inline-block;
        width: 20px;
        height: 10px;
        left: -2px;
        color: #ff6b37;
      }
    }
    .sort {
      position: absolute;
      left: 0;
      top: 35px;
      width: 210px;
      height: 512px;
      padding: 4px 0;
      background: #313131;
      z-index: 999;
      &.show-enter {
        opacity: 0;
        height: 0;
      }

      &.show-enter-active {
        transition: all 0.5s;
      }

      &.show-enter-to {
        opacity: 1;
        height: 512px;
      }
      .all-sort-list {
        .item {
          width: 205px;
          height: 32px;
          line-height: 32px;
          padding-left: 5px;
          h3 {
            .cate {
              font-size: 15px;
              color: #fff;
            }
            a {
              font-weight: normal;
              text-decoration: none;
              padding-left: 10px;
              color: #ccc;
              font-size: 12px;
              &:hover {
                color: #ff6b37;
              }
            }
          }
          .item-list {
            z-index: 999;
            display: none;
            position: absolute;
            width: 328px;
            height: 484px;
            left: 210px;
            top: 0;
            border: 2px solid #ff6b37;
            border-left: none;
            padding: 16px 35px;
            background: white;
            .subitem {
              width: 328px;
              margin: 0 auto;
              .fore {
                dt {
                  border-bottom: 1px solid #999;
                  position: relative;
                  height: 33px;
                  border-color: #eee;
                  margin-bottom: 15px;
                  a {
                    position: absolute;
                    color: #333;
                    text-decoration: none;
                  }
                  .food {
                    left: 0;
                    font-size: 15px;
                  }
                  .more {
                    right: 0;
                    font-size: 12px;
                    &:hover {
                      color: #ff6637;
                    }
                  }
                }
                dd {
                  width: 328px;
                  display: flex;
                  justify-content: space-between;
                  display: inline-block;
                  em {
                    margin-top: -20px;
                    width: 30%;
                    display: inline-block;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    a {
                      text-decoration: none;
                      font-size: 12px;
                      color: #666;

                      &:hover {
                        color: #ff6637;
                      }
                    }
                  }
                }
              }
            }
          }
           &.item_on {
            background: gray;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>

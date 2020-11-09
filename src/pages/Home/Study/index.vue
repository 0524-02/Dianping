<template>
  <div class="study-wrap">
    <div class="study-container">
          <!-- 头部 -->
          <div class="study-title">
            <div class="cate-title">
                <div class="iconfont iconicon-test cateleft"></div>
                <div class="cateleft cates"><span>学习培训</span></div>
                <div class="cateleft cate"><a href="">外语培训</a></div>
                <div class="cateleft cate"><a href="">职业技术</a></div>
                <div class="cateleft cate"><a href="">才艺培训</a></div>
                <div class="cateright next"><a href=""> > </a></div>
                <div class="cateright all"><a href="">全部</a></div>      
            </div>
          </div>

          <!-- 底部 -->
          <div class="bottom-wap">
            <div class="bottom">
               <!-- 单个food -->
              <div class="itemcontainer" v-for="(item,index) in studyItems.studyLists1" :key="item.categoryId">
                  <div class="Img">
                    <img :src="item.url" alt="">
                  </div>

                    <div class="context-wrap">

                      <div class="name">
                        <a href="" class="name-desc">{{item.shopName}}</a>
                        <i class="iconfont icontuangou1"></i>
                      </div>

                      <div class="appraise">
                        <div class="star">
                            <i class="iconfont iconstar"></i>
                            <i class="iconfont iconstar"></i>
                            <i class="iconfont iconstar"></i>
                            <i class="iconfont iconstar"></i>
                            <i class="iconfont iconstar"></i>
                        </div>
                        <div class="comment"><span>{{item.evaluate}}</span></div>
                      </div>
                      
                      <div class="area-info">
                        <div class="maincate-name"><span>{{item.snack}}</span></div>
                        <div class="maincate-name location"><span>{{item.location}}</span></div>
                      </div>

                      <div class="avg">
                        <span>￥</span>
                        <span>{{item.price}}</span>
                        <span>/人</span>
                      </div>
                </div>
              </div>      
            </div>
          </div>           
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Study',
  mounted() {
    this.getStudyItem();
  },
  methods: {
    async getStudyItem () {
      const result = await this.$store.dispatch('getStudyItem')
    }
  },
  computed: {
    ...mapState({
      studyItems: (state) => state.study.studyItems
    })
  }
}
</script>

<style lang="less" scoped>
   .study-wrap {
      margin-top: 30px;     
      .study-container {
        position: relative;
        width: 1190px;
        height: 280px;
        margin: 0 auto;
        background: #fff;
        // 头部
        .study-title {
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
        .bottom-wap {
          width: 1190px;
          height: 210px;
          position: relative;
          .bottom {
            position: absolute;
            top: 70px;
            height: 190px;
            width: 1150px;
            margin: 0 20px ;
            display: flex;
            justify-content: space-between;

            // <!-- 单个food -->
            .itemcontainer {
              width: 170px;
              height: 186px;
              // 图片容器
              .Img {
                width: 170px;
                height: 96px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              // 文本容器
              .context-wrap {
                width: 170px;
                height: 78px;
                margin-top: 12px;
                // 福满楼
                .name {
                  width: 170px;
                  float: left;
                  position: relative;
                  a {
                    display: inline-block;
                    max-width: 124px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  }
                  .name-desc {
                    display: inline-block;
                    font-size: 16px;
                    line-height: 19px;
                    color: #333;
                    margin-right: 5px;
                  }
                  .iconfont {
                    position: absolute;
                    color: #ff6b37;
                    right: 0;
                    // margin-top: -5px;
                  }
                }
                // 评价
                .appraise {
                  display: flex;
                  width: 170px;
                  margin-top:10px;
                  justify-content: space-between                                                                                    ;
                  .star {
                    color: #ff6b37;
                    .iconfont {
                      font-size: 14px;
                    }
                  }
                  .comment {
                    span {
                      color: #999;
                    }
                    
                  }
                }

                // 老北京火锅
                .area-info {
                  // position: absolute;
                  display: flex;
                  justify-content: space-between;
                  .maincate-name {
                    width: 75px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    span {
                      color: #999;
                    }
                  }
                  .location {
                    position: relative;
                    span {
                      position: absolute;
                      right: 0;
                    }
                  }
                }

                // 价格
                .avg {
                  margin-top: 5px;
                  span {
                    color: #999;
                  }
                }
              }
              
            }
          }
        }
    }
   }
</style>
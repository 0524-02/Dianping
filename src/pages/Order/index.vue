<template>
  <div class="order-wrap">
    <div class="order-container">
      <!-- 最新可订 -->
      <div class="newestcontainer">
        <div class="newest">
          <span>最新可订</span>
        </div>
      </div>

      <!-- 详情 -->
      <div class="detail-container">
        <!-- 左右列表 -->
        <div class=" cate-detail detail-left" v-for="(item,index) in orderItems" :key="item.id">
          <!-- 单个详情 -->
         
          <div class="detail" v-for="(nav,index) in item" :key="nav.id">
            <!-- 图片 -->
            <div class="imgcontainer">
              <img :src="nav.url" alt="">
            </div>
            <!-- 右侧文本 -->
            <div class="context-wrap">
             <div class="context">
                <div class="cate-title">
                  <a>{{nav.name}}</a>
                </div>
              <div class="star">
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>  
              </div>

              <div class="appraise">
                  <span>{{nav.tag1}}</span>
                  <span>{{nav.tag2}}</span>
                  <span>{{nav.tag3}}</span>  
              </div>

              <div class="site"><span>{{nav.title}}</span></div>
             </div>

            </div>
          </div>

          <!-- 单个详情 -->
          <!-- <div class="detail"> -->
            <!-- 图片 -->
            <!-- <div class="imgcontainer">
              <img src="./images/order2.jpg" alt="">
            </div> -->
            <!-- 右侧文本 -->
            <!-- <div class="context-wrap">
             <div class="context">
                <div class="cate-title">
                  <a>南北风味*鱼头泡饼筋头巴脑(北苑店)</a>
                </div>
              <div class="star">
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>  
              </div> -->

              <!-- <div class="appraise">
                  <span>口味9.0</span>
                  <span>环境9.0</span>
                  <span>服务9.0</span>  
              </div>

              <div class="site"><span>清华路建筑少年小区10号楼底商</span></div>
             </div>

            </div>
          </div> -->

          <!-- 单个详情 -->
          <!-- <div class="detail"> -->
            <!-- 图片 -->
            <!-- <div class="imgcontainer">
              <img src="./images/order3.jpg" alt="">
            </div> -->
            <!-- 右侧文本 -->
            <!-- <div class="context-wrap">
             <div class="context">
                <div class="cate-title">
                  <a>南北风味*鱼头泡饼筋头巴脑(北苑店)</a>
                </div>
              <div class="star">
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>  
              </div> -->

              <!-- <div class="appraise">
                  <span>口味9.0</span>
                  <span>环境9.0</span>
                  <span>服务9.0</span>  
              </div>

              <div class="site"><span>清华路建筑少年小区10号楼底商</span></div>
             </div>

            </div>
          </div>  -->

           <!-- 单个详情 -->
          <!-- <div class="detail"> -->
            <!-- 图片 -->
            <!-- <div class="imgcontainer">
              <img src="./images/order4.jpg" alt="">
            </div> -->
            <!-- 右侧文本 -->
            <!-- <div class="context-wrap">
             <div class="context">
                <div class="cate-title">
                  <a>南北风味*鱼头泡饼筋头巴脑(北苑店)</a>
                </div>
              <div class="star">
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>  
              </div>

              <div class="appraise">
                  <span>口味9.0</span>
                  <span>环境9.0</span>
                  <span>服务9.0</span>  
              </div>

              <div class="site"><span>清华路建筑少年小区10号楼底商</span></div>
             </div>

            </div>
          </div>
        </div> -->

        <!-- 左右列表 -->
        <!-- <div class="cate-detail detail-right"> -->
          <!-- 单个详情 -->
          <!-- <div class="detail"> -->
            <!-- 图片 -->
            <!-- <div class="imgcontainer">
              <img src="./images/order1.png" alt="">
            </div> -->
            <!-- 右侧文本 -->
            <!-- <div class="context-wrap">
             <div class="context">
                <div class="cate-title">
                  <a>南北风味*鱼头泡饼筋头巴脑(北苑店)</a>
                </div>
              <div class="star">
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>  
              </div>

              <div class="appraise">
                  <span>口味9.0</span>
                  <span>环境9.0</span>
                  <span>服务9.0</span>  
              </div>

              <div class="site"><span>清华路建筑少年小区10号楼底商</span></div>
             </div>

            </div>
          </div> -->

          <!-- 单个详情 -->
          <!-- <div class="detail"> -->
            <!-- 图片 -->
            <!-- <div class="imgcontainer">
              <img src="./images/order2.jpg" alt="">
            </div> -->
            <!-- 右侧文本 -->
            <!-- <div class="context-wrap">
             <div class="context">
                <div class="cate-title">
                  <a>南北风味*鱼头泡饼筋头巴脑(北苑店)</a>
                </div>
              <div class="star">
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>  
              </div>

              <div class="appraise">
                  <span>口味9.0</span>
                  <span>环境9.0</span>
                  <span>服务9.0</span>  
              </div>

              <div class="site"><span>清华路建筑少年小区10号楼底商</span></div>
             </div>

            </div>
          </div> -->

          <!-- 单个详情 -->
          <!-- <div class="detail"> -->
            <!-- 图片 -->
            <!-- <div class="imgcontainer">
              <img src="./images/order3.jpg" alt="">
            </div> -->
            <!-- 右侧文本 -->
            <!-- <div class="context-wrap">
             <div class="context">
                <div class="cate-title">
                  <a>南北风味*鱼头泡饼筋头巴脑(北苑店)</a>
                </div>
              <div class="star">
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>  
              </div>

              <div class="appraise">
                  <span>口味9.0</span>
                  <span>环境9.0</span>
                  <span>服务9.0</span>  
              </div>

              <div class="site"><span>清华路建筑少年小区10号楼底商</span></div>
             </div>

            </div>
          </div> -->

           <!-- 单个详情 -->
          <!-- <div class="detail"> -->
            <!-- 图片 -->
            <!-- <div class="imgcontainer">
              <img src="./images/order4.jpg" alt="">
            </div> -->
            <!-- 右侧文本 -->
            <!-- <div class="context-wrap">
             <div class="context">
                <div class="cate-title">
                  <a>南北风味*鱼头泡饼筋头巴脑(北苑店)</a>
                </div>
              <div class="star">
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>
                <i class="iconfont iconStarFilled"></i>  
              </div>

              <div class="appraise">
                  <span>口味9.0</span>
                  <span>环境9.0</span>
                  <span>服务9.0</span>  
              </div>

              <div class="site"><span>清华路建筑少年小区10号楼底商</span></div>
             </div>

            </div> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Order',
  mounted() {
    this.getOrderItems()
  },

  methods: {
    async getOrderItems() {
      const result = await this.$store.dispatch('getOrderItems')
    }
  },

  computed:{
    ...mapState({
      orderItems: (state) => state.order.orderItems
    })
  },

}
</script>

<style lang="less" scoped>
  .order-wrap {
    margin-top: 10px;
   
    .order-container {
      // display: flex;
      // justify-content: space-between;
      position: relative;
      width: 1190px;
      height: 680px;
      // overflow: hidden;
      margin: 0 auto;
      // 最新可订
      .newestcontainer {
        position: relative;
        width: 100%;
        // overflow: hidden;
        .newest {
          position: absolute;
          left: 0;
          span {
            display: inline-block;
            font-size: 16px;
            color: #333;
            margin-bottom: 10px;
          }
        }
      }
      // 详情容器
      .detail-container {
        position: absolute;
        width: 1190px;
        top: 30px;
        .detail-left{
          float: left;
        }
        .detail-right {
          float: right;
        }
        // 左右列表
        .cate-detail {
          width: 585px;
          // 单个详情
          .detail {
            width: 100%;
            height: 140px;
            background: #fff;
            margin-bottom: 20px;
            // 图片
            .imgcontainer {
              width: 186px;
              height: 140px;
              float: left;
              img {
                width: 100%;
                height: 100%;
              }
            }
            // 文本
            .context-wrap {
              float: right;
              width: 394px;
              height: 100%;
              .context {
                width: 384px;
                height: 105px;
                margin:15px 0 15px 10px;
                .cate-title {
                  font-size: 16px;
                  cursor: pointer;
                  color: #333;
                  a {
                    text-decoration: none;
                  }
                }
              }

              .star {
                margin-top: 10px;
                .iconfont {
                  color: orange;

                }
              }

              .appraise {
                margin: 10px 0;
                span {
                  display: inline-block;
                  font-size: 12px;
                  color: #666;
                  line-height: 1;
                  margin-right: 1em;
                }
              
              }

              .site {
                span {
                  font-size: 12px;
                  color: #666;
                }
              }
            }
          }
        }
      }
    }
  }
</style>

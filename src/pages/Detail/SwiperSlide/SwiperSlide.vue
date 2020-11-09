<template>
        <!-- 轮播图滑块 -->
                  
                    <div class="swiper-container" :class='{swiperClass: `swiper${index}}`}' >
                        <div class="swiper-wrapper"  >
                            <div class="swiper-slide" v-for="(banner,index) in bannerList" :key="banner.picId" >
                               <img :src="banner.url" alt="">
                            </div>
                           
                        </div>
                        <!-- 如果需要分页器 -->
                        <!-- <div class="swiper-pagination"></div> -->
                        
                        <!-- 如果需要导航按钮 -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                        
                        <!-- 如果需要滚动条 -->
                        <!-- <div class="swiper-scrollbar"></div> -->
                  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: 'SwiperSlide',
  props:['bannerList', 'index'],
  data() {
    return {
      count:0
    }
  },
   watch: {
    bannerList: {
      immediate: true, //添加这个东西没意思，只是让两边的代码一样
      handler() {
        //监视哪个数据变化之后所执行的函数
        //放在这里能保证我们的bannerList内一定有数据，但是还是不能保证结构完全形成
        this.$nextTick(() => {
          //这个回调是nextTick的回调，nextTick会等待页面dom最近一次循环更新结束之后才会执行它内部传递的回调
          //updated也可以实现，但是并不是最近一次更新，而是所有的更新都会执行这个钩子（updated）
          // this.mySwiper && this.mySwiper.update();
           new Swiper('.swiperClass', {
            // loop: true, // 循环模式选项
            // 如果需要分页器

            slidesPerView: 7, //代表每屏显示几张
            slidesPerGroup: 5, //没滑动一次滑动多少张

            pagination: {
              el: ".swiper-pagination",
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
}
</script>

<style lang="less" scoped>
  .swiper-container {
                  width: 750px;
                  height: 96px;
                  display: flex;
                  .swiper-slide {
                    height: 96px;
                    width: 96px;
                    img {
                      width: 96px;
                      height: 96px;
                      border: 2px solid rgba(0, 0, 0, 0);
                      box-sizing: border-box;
                      display: block;
                      &:hover {
                        border: 2px solid #f63;
                      }
                    }
                  }
                  .swiper-button-prev,
                  .swiper-button-next {
                    position: absolute;
                    right: 13px;
                    top: 0;
                    margin-top: 26px;
                    width: 19px;
                    height: 50px;
                    background-color: rgba(0, 0, 0, 0.6);
                    text-align: center;
                    line-height: 50px;
                    &::after {
                      font-size: 12px;
                      color: #eeeeee;
                    }
                  }
                  .swiper-button-prev {
                    position: absolute;
                    left: 2px;
                    top: 0;
                    &::after {
                      font-size: 12px;
                      color: #eeeeee;
                    }
                  }
                }
</style>

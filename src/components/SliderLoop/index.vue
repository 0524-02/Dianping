<template>
      <!-- 列表 -->
  <div class="list-container">
    <div class="sortList">
      <div class="center">
        <!-- 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./images/banner1.jpg" alt="">
              </div>
              <div class="swiper-slide">
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
              </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderLoop',
}
</script>

<style lang="less" scoped>

</style>

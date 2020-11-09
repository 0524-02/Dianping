<template>
  <div class="cate-nav" v-show="isShow">
    <div class="cate-nav-detail cate-part-one-nav current-nav">
      <a href="javascript:;">吃喝玩乐</a>
    </div>
    <div class="cate-nav-detail cate-part-two-nav nav-single">
      <a href="javascript:;">结婚</a>
    </div>
    <div class="cate-nav-detail cate-part-three-nav">
      <a href="javascript:;">丽人亲子</a>
    </div>
    <div class="cate-nav-detail cate-part-four-nav nav-single">
      <a href="javascript:;">家装</a>
    </div>
    <div class="cate-nav-detail edu-cate-nav">
      <a href="javascript:;">学习培训</a>
    </div>
    <div class="cate-nav-detail service-cate-nav">
      <a href="javascript:;">生活服务</a>
    </div>
    <div class="cate-nav-detail travel-hotel-cata-nav">
      <a href="javascript:;">旅游酒店</a>
    </div>
    <div class="cate-nav-detail top-nav-detail nav-single">
      <a href="javascript:;">顶部</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Crumbs',
  data() {
    return {
      isShow: false
    }
  },
  mounted() {
    // const Height = document.body.clientHeight
    // 网页被卷进去的高
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    // 网页可见区域高
    let height = document.documentElement.clientHeight || document.body.clientHeight;
    // console.log(Height);
    // console.log(top)
    // window.addEventListener('scroll',this.handleScroll)
    if (height > top) {
       this.isShow = true;
    }
    
  }
}
</script>

<style lang="less" scoped>
  .cate-nav {
    // display: none;
    top: -8px;
    right: 1278px;
    display: block;
    position: fixed;
    .cate-nav-detail {
      width: 40px;
      height: 40px;
      margin-bottom: 2px;
      background: #7b7171;
      &:hover{
        background: #ff6637;
      }
     
      a { 
        z-index: 999;
        width: 100%;
        height: 100%;
        color: #fff;
        font-size: 12px;
        text-align: center;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        // word-break: break-all;
        padding: 6px;
        line-height: 15px;
        text-decoration: none;
      }
    }
    .current-nav {
        background: #ff6637;
      }
    .nav-single {
      height: 40px;
      line-height: 40px;
    }
  }
</style>

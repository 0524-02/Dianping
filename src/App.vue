<template>
  <div>
      <Header></Header>
      <Main></Main>
      <router-view></router-view>
      <Footer></Footer>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
export default {
  name: 'APP',
  components:{
    Header,
    Main,
    Footer,
     
  }
}

</script>

<style lang="less" scoped>

</style>
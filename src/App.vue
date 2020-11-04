<template>
  <div>
      <Header></Header>
      <Main></Main>
      <!-- <TypeNav></TypeNav> -->
      <router-view></router-view>
      <Footer></Footer>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Main from '@/components/Main'
import Detail from './pages/Detail/index'
import Footer from '@/components/Footer'
import Search from "./pages/Search/index"
import Home from '@/pages/Home/index'
import Group from "./pages/Group/index"
// import TypeNav from "../src/components/TypeNav"

export default {
  name: 'APP',
  components:{
    Header,
    Main,
    Detail,
    Footer,
    Search,
    Group,
    Home,
    // TypeNav
  }
}

</script>

<style lang="less" scoped>

</style>
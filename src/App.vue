<template>
  <div>
      <Search></Search>
      <Header></Header>
      <Home></Home>
      <Main></Main>
      <Detail></Detail>
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

export default {
  name: 'APP',
  components:{
    Header,
    Main,
    Detail,
    Footer,
    Search,
    Home
  }
}

</script>

<style lang="less" scoped>

</style>
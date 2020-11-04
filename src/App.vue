<template>
  <div>
      
      <Header></Header> 
      <Main></Main>
      <Search></Search>
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

export default {
  name: 'APP',
  components:{
    Header,
    Main,
    Detail,
    Footer,
    Search
  }
}

</script>

<style lang="less" scoped>

</style>
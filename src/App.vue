<template>
  <div>
      <Header></Header>
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

export default {
  name: 'APP',
  components:{
    Header,
    Main,
    Detail,
    Footer
  }
}

</script>

<style lang="less" scoped>

</style>
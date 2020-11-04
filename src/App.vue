<template>
  <div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
export default {
  name: 'APP',
  components:{
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>

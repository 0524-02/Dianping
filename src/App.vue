<template>
  <div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    <Font></Font>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Main from '@/components/Main'
import Font from '@/components/Font'
import Footer from '@/components/Footer'
export default {
  name: 'APP',
  components:{
    Header,
    Main,
    Font,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>

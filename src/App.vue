<template>
  <div>
    <Header></Header>
    <!-- <Main></Main> -->
    <Logo></Logo>
    <!-- <Footer></Footer> -->
    <Font></Font>
  </div>
</template>

<script>
import Header from '@/components/Header'
// import Main from '@/components/Main'
import Logo from '@/components/Logo'
import Font from '@/components/Font'
// import Footer from '@/components/Footer'
export default {
  name: 'APP',
  components:{
    Header,
    // Main,
    Logo,
    Font,
    // Footer
  }
}
</script>

<style lang="less" scoped>

</style>

<template>
  <div>
    <Header></Header>
    <Main></Main>
    <Font></Font>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Main from '@/components/Main'
import Font from '@/components/Font'
export default {
  name: 'APP',
  components:{
    Header,
    Main,
    Font
  }
}
</script>

<style lang="less" scoped>

</style>

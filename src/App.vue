<template>
  <div>
      <Header v-show="!$route.meta.isHide"></Header>
      <Main v-show="!$route.meta.isHide"></Main>
      <router-view></router-view>
      <Footer v-show="!$route.meta.isHide"></Footer>
   
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Search from "./pages/Search/index"
import Home from '@/pages/Home/index'
import Group from "./pages/Group/index"
import Main from './components/Main'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Community from '@/pages/Community'
import LoginDefault from '@/pages/LoginDefault'

// import TypeNav from "../src/components/TypeNav"

export default {
  name: 'APP',
  components:{
    Header,
    Main,
    Footer,
    Search,
    Group,
    Home,
    Login,
    Register,
    Community,
    LoginDefault
    // TypeNav
  },
  mounted() {
    this.getTypeItem();
  },
   methods:{
    //这里面可以获取vuex当中mutations和actions方法
    getTypeItem() {
      //用户在触发响应的actions去发请求拿数据
      this.$store.dispatch("getTypeItem");
    },
  }
} 
</script>

<style lang="less" scoped>

</style>
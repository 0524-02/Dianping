import App from '@/App'
import Vue from 'vue'
import router from '@/router'

import { Button, Select } from 'element-ui';
Vue.use(Button)
Vue.use(Select)

Vue.config.productionTip = false

//全局注册的各种组件，因为很多地方用到
import Header from '@/components/Header'
import Footer from '@/components/Footer'

Vue.component('Header',Header)
Vue.component('Footer',Footer)




new Vue({
  el:'#app',
  render: h => h(App), //1、定义带注册  2、使用组件  3、渲染（依赖vue的一个loader去解析的vue-template-compiler）
  router, //让所有的组件当中都可以多两个对象 $router路由器对象 和 $route路由对象 

})

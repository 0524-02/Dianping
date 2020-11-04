import App from '@/App'
// import Vue from 'vue/dist/vue.esm.js' 带解析器的vue版本
import Vue from 'vue'

<<<<<<< HEAD
// 全局注册组件
import TypeNav from '@/components/TypeNav'


Vue.component('TypeNav',TypeNav)



=======
import router from '@/router'
import store from '@/store'
import { tag } from 'element-ui';
Vue.use(tag)
import * as API from '@/api'

Vue.config.productionTip = false
import { DatePicker,Select,Breadcrumb,Card,Pagination } from 'element-ui';
Vue.use(DatePicker);
Vue.use(Select);
Vue.use(Breadcrumb);
Vue.use(Card);
Vue.use(Pagination);
>>>>>>> 8408796159d3fb3d0eaffd14e78e632bf8bfd288
new Vue({
  beforeCreate() {
    // Vue.prototype.$bus = this//vm  
    Vue.prototype.$API = API//
    //在Vue的原型上添加了一个属性  $bus   $bus指向了一个对象 这个对象就是我们vm对象
  },
  el:'#app',
  render: h => h(App), //1、定义带注册  2、使用组件  3、渲染（依赖vue的一个loader去解析的vue-template-compiler）
  router, //让所有的组件当中都可以多两个对象 $router路由器对象 和 $route路由对象 
  store, //让所有的组件当中都可以多一个对象 this.$store

})


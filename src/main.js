import App from '@/App'

// import Vue from 'vue/dist/vue.esm.js' 带解析器的vue版本

import Vue from 'vue'
import router from '@/router'

import store from '@/store'
import { tag ,dialog,Image,breadcrumb,Message,rate,Input,upload,CheckboxButton,CheckboxGroup} from 'element-ui';
Vue.prototype.$message = Message;
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

import '@/validate'
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)
//注册vuex
Vue.use(tag)
Vue.use(dialog)
Vue.use(Image)
Vue.use(breadcrumb)
Vue.use(rate)
Vue.use(Input)
Vue.use(upload)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
 
 
import * as API from '@/api'

//全局注册的各种组件，因为很多地方用到
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TypeNav from '@/components/TypeNav'


Vue.component('Header',Header)
Vue.component('Footer',Footer)
Vue.component('TypeNav',TypeNav)

Vue.config.productionTip = false
import { DatePicker,Select,Breadcrumb,Card,Pagination,Button,input} from 'element-ui';
Vue.use(DatePicker);
Vue.use(Select);
Vue.use(Breadcrumb);
Vue.use(Card);
Vue.use(Pagination);
Vue.use(Button);
Vue.use(input);

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





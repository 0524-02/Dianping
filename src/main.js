import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
Vue.config.productionTip = false

// 全局注册组件
import TypeNav from '@/components/TypeNav'


Vue.component('TypeNav',TypeNav)



new Vue({
  render: h => h(App),
  router
}).$mount('#app')

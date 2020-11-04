import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
Vue.config.productionTip = false
import { tag } from 'element-ui';
//注册vuex
import store from './store/index'
Vue.use(tag)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

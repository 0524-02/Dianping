import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
Vue.config.productionTip = false
import { tag } from 'element-ui';
Vue.use(tag)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

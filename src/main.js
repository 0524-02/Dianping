import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
Vue.config.productionTip = false
import { DatePicker,Select,Breadcrumb,Card,Pagination } from 'element-ui';
Vue.use(DatePicker);
Vue.use(Select);
Vue.use(Breadcrumb);
Vue.use(Card);
Vue.use(Pagination);
new Vue({

  render: h => h(App),
  router
}).$mount('#app')

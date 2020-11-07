import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import  detail from './Detail'
import  personal from './Personal'
import search from './search'
import search from './Search'
const state={

}
const mutations= {

}
const actions={

}
const  getters={

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    detail,
    search,
    personal,
  },
})
  //把每个小模块的小store合并到大的store
 


//3、注入这个创建的store对象  在vue当中




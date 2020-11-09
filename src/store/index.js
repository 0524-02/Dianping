import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import  detail from './Detail'
// import search from './search'
import listcontainer from './Listcontainer'
import typenav from './TypeNav'
import foods from './Foods'
// import typedetail from './TypeDetail'
import order from './Order'
import  personal from './Personal'
import study from './Study'
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
    // search,
    listcontainer,
    typenav,
    // typedetail,
    order,
    foods,
    personal,
    study,
  },
})
  //把每个小模块的小store合并到大的store
 


//3、注入这个创建的store对象  在vue当中




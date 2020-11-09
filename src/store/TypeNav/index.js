import {reqTypeItem} from '../../api/yhApi'

const state = {
  typeItem: {}, //TypeNav数据
}

const mutations = {
  RECEIVETYPELIST(state,typeItem){
    state.typeItem = typeItem
  }
}


const actions = {
  // 请求数据
  // 请求listContainer 热风区域数据
  async getTypeItem ({commit}) {
    const result = await reqTypeItem()
  
      commit('RECEIVETYPELIST',result)
    
  },
}

const getters = {
 
}

export default {
  state,
  mutations,
  actions,
  getters
}
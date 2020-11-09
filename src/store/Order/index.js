import {reqOrderItems} from '../../api/yhApi'

const state = {
  orderItems: {}, //TypeNav数据
}

const mutations = {
  RECEIVEORDERITEMS(state,orderItems){
    state.orderItems = orderItems
  }
}


const actions = {
  // 请求数据
  // 请求listContainer 热风区域数据
  async getOrderItems ({commit}) {
    const result = await reqOrderItems()
  
      commit('RECEIVEORDERITEMS',result)
    
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
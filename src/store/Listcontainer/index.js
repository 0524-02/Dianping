import {reqHotList} from '../../api/yhApi'

const state = {
  hotList : {}  //存数据
}

const mutations = {
  RECEIVEHOTLIST(state,hotList){
    state.hotList = hotList
  }
}


const actions = {
  // 请求数据
  async getHotList ({commit}) {
    const result = await reqHotList()
  
      commit('RECEIVEHOTLIST',result)
    
  }
}

const getters = {
 
}

export default {
  state,
  mutations,
  actions,
  getters
}
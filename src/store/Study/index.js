import {reqStudyItems} from '../../api/yhApi'

const state = {
  studyItems: {}, //TypeNav数据
}

const mutations = {
  RECEIVESTUDYITEM(state,studyItems){
    state.studyItems = studyItems
  }
}


const actions = {
  // 请求数据
  // 请求listContainer 热风区域数据
  async getStudyItem ({commit}) {
    const result = await reqStudyItems()
  
      commit('RECEIVESTUDYITEM',result)
    
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
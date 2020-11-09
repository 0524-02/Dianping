import {reqFoodDatas} from '../../api/yhApi'

const state = {
  foodDatas : {}  //存数据
}

const mutations = {
  RECEIVEFOODDATAS(state,foodDatas){
    state.foodDatas = foodDatas
  }
}


const actions = {
  // 请求数据
  async getFoodDatas ({commit}) {
    const result = await reqFoodDatas()
  
      commit('RECEIVEFOODDATAS',result)
    
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
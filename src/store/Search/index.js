import {reqSearchTags} from '../../api/wlApi'
const state={
  searchTagsInfo:{},
}

const mutations={
  searchTagsInfoMutations(state,searchTagsInfo){
    state.searchTagsInfo= searchTagsInfo
  }
}

const actions ={
  async getSearchTagsInfoActions({commit}){
    const result = await reqSearchTags()
    commit('searchTagsInfoMutations',result)
  }
}
const getters={
  // searchItemList(state){
  //   return state.searchTagsInfo.searchItemList || []
  // }
}

export default{
  state,
  mutations,
  actions,
  getters
}
import {reqCommunityTags} from '../../api/wlApi'
const state={
  communityTagsInfo:{},
}

const mutations={
  COMMUNITYTAGSINFOMUTATIONS(state,communityTagsInfo){
    state.communityTagsInfo= communityTagsInfo
  }
}

const actions ={
  async getCommunityTagsInfoActions({commit}){
    const result = await reqCommunityTags()
    commit('COMMUNITYTAGSINFOMUTATIONS',result)
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
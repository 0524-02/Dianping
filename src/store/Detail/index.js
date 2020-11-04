 import {reqShopTags} from '../../api/xcApi'
const state={
  shopTagsInfo:{},

}
const mutations= {
  shopTagsInfoMutations(state,shopTagsInfo){
    state.shopTagsInfo= shopTagsInfo
  }
}
const actions={
  async getShopTagsInfoActions({commit}){
    console.log(111);
    const result = await reqShopTags()
    commit('shopTagsInfoMutations',result)
  }
}
const  getters={

}
export default {
  state,
  mutations,
  actions,
  getters
}
 import {reqShopTags} from '../../api/xcApi'
const state={
  shopTagsInfo:{},

}
const mutations= {
  SHOPTAGSINFOMUTATIONS(state,shopTagsInfo){
    state.shopTagsInfo= shopTagsInfo
  }
}
const actions={
  async getShopTagsInfoActions({commit}){
    console.log(111);
    const result = await reqShopTags()
    commit('SHOPTAGSINFOMUTATIONS',result)
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
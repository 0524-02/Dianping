 import {reqShopTags,reqShopTagsList,readmessage} from '../../api/xcApi'
const state={
  shopTagsInfo:{},
  shoptagslist:[],
   messageList:[],
   

}
const mutations= {
  SHOPTAGSINFOMUTATIONS(state,shopTagsInfo){
    state.shopTagsInfo= shopTagsInfo
  },
  SHOPTAGSLISTMUTATIONS(state,shoptagslist){
    state.shoptagslist = shoptagslist
  },
  MESSAGELISTMUTATIONS(state,messageList){
    state.messageList = messageList
  },
}
const actions={
  async getShopTagsInfoActions({commit}){
    const result = await reqShopTags()
    commit('SHOPTAGSINFOMUTATIONS',result)
  },
  async getShopTagsListActions({commit}){
    const result = await reqShopTagsList()
    commit("SHOPTAGSLISTMUTATIONS",result)
  },
  async getmessageActions({commit}){
    const result = await readmessage()
    // let messageList = result.slice(0,4)
    // console.log(result);
    commit("MESSAGELISTMUTATIONS",result)
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
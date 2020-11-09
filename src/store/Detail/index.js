 import {reqShopTags,reqShopTagsList,readmessage,readComment} from '../../api/xcApi'
const state={
  shopTagsInfo:{},
  shoptagslist:[],
   messageList:[],
commentList:[],
   

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
  COMMENTLISTMUTATIONS(state,commentList){
    state.commentList = commentList
  }
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
  },
  async getCommentListActions({commit}){
    const result = await readComment()
    // let messageList = result.slice(0,4)
    // console.log(result);
    commit("COMMENTLISTMUTATIONS",result)
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
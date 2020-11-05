import {reqPersonalInfo} from '../../api/xcApi'
const state = {
  personalInfo: {},

}
const mutations = {
  PERSONALINFOMUTIONS(state, personalInfo) {
    state.personalInfo = personalInfo
  }
}
const actions = {
  async getPersonalInfoActions({commit}){
    const result = await reqPersonalInfo()
    // console.log(11); 
      if(result.code===200){
         commit('PERSONALINFOMUTIONS', result.msg)
      }
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
import {reqHotelALL ,reqNavList} from '@/api/index'

const state = {

    hotelALL:[],
    navList:{}
}

const mutations = {
RECEIVEHOTELALL(state,hotelALL){
    state.hotelALL=hotelALL
},
RECEIVENAVLIST(state,navList){
    state.navList=navList
}
}


const actions = {
    async gethotelAll({commit}){
        const result = await reqHotelALL()
        if(result.code === 200){
            commit('RECEIVEHOTELALL',result.data) 
        }
    },

    async getnavList({commit}){
        const result = await reqNavList()
        if(result.code === 200){
            commit('RECEIVENAVLIST',result.data) 
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
import {reqAllListInfo} from '@/api/index'

const state = {
  allList: {
    detail:[]
  },
  listData:[],
}

const mutations = {
  RECEIVEALLLISTINFO(state,allList){
    state.allList = allList
  },
  RECEIVELISTDATA(state,listData){
    state.listData = listData
  }
}


const actions = {
  async getAllListInfo({commit}){
    const result = await reqAllListInfo()
    if(result.code === 200){
      commit('RECEIVEALLLISTINFO',result.data)
    }
  },
  async getlistData({commit}){
    const result = await reqAllListInfo()
    if(result.code === 200){
      commit('RECEIVELISTDATA',result.data.pmd)
    }
  }
}

const getters = {
  nav(state){
    return state.allList.nav || []
  },
  nextnav(state){
    return state.allList.nextnav || []
  },
  detail(state){
    return state.allList. detail|| []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
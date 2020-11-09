import Ajax from '@/ajax/Ajax'

export const reqHotList = () => {
  return Ajax ({
    url: '/gethotList',
    method: 'get'
  })
}

export const reqTypeItem = () => {
  return Ajax ({
    url: '/gettypeItem',
    method: 'get'
  })
}

export const reqFoodDatas = () => {
  return Ajax ({
    url: '/getfoodDatas',
    method: 'get'
  })
}

export const reqOrderItems= () => {
  return Ajax ({
    url: '/getorderItems',
    method: 'get'
  })
}
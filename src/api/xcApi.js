import Ajax from '@/ajax/Ajax'

export const reqShopTags = () => {
  return Ajax({
    url:'/getshoptags',
    method:'get'
  })
}

export const reqPersonalInfo = () => {
  return Ajax({
    url:'/personalinfo',
    method:'get'
  })
}

export const   reqShopTagsList = ()=>{
  return Ajax({
    url:'/shoptagslist',
    method:'get'
  })
}

export const   addMessage = (messageInfo)=>{
  return Ajax({
    url:'/writemessage',
    method:'post',
    data:messageInfo,
  })
}

export const readmessage = ()=>{
  return Ajax({
    url:'/readmessage',
    method:'get',
    
  })
}



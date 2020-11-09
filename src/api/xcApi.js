import Ajax from '@/ajax/Ajax'

//请求详情页信息
export const reqShopTags = () => {
  return Ajax({
    url:'/getshoptags',
    method:'get'
  })
}
//请求个人中心页面信息
export const reqPersonalInfo = () => {
  return Ajax({
    url:'/personalinfo',
    method:'get'
  })
}
//请求推荐菜图片
export const   reqShopTagsList = ()=>{
  return Ajax({
    url:'/shoptagslist',
    method:'get'
  })
}
//写留言的回调函数
export const   addMessage = (messageInfo)=>{
  return Ajax({
    url:'/writemessage',
    method:'post',
    data:messageInfo,
  })
}
//读留言的回调
export const readmessage = ()=>{
  return Ajax({
    url:'/readmessage',
    method:'get',
    
  })
}


//提交留言的回调
export const uploadcomment = (commentInfo)=>{
  return Ajax({
    url:'/uploadcomment',
    method:'post',
    data:commentInfo
    
  })
}
// readComment
//提交留言的回调
export const  readComment = ()=>{
  return Ajax({
    url:'/readComment',
    method:'get',
  })
}


import Ajax from '@/ajax/Ajax'
export const reqSearchTags = () =>{
  return Ajax({
    url:'getsearchtags',
    method:'get'
  })
}

export const reqCommunityTags = () =>{
  return Ajax({
    url:'getcommunitytags',
    method:'get'
  })
}
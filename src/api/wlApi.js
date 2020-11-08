import Ajax from '@/ajax/Ajax'
export const reqSearchTags = () =>{
  return Ajax({
    url:'getsearchtags',
    method:'get'
  })
}
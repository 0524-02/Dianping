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
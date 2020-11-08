import Ajax from '@/ajax/Ajax'

export const reqShopTags = () => {
  return Ajax({
    url:'/getshoptags',
    method:'get'
  })
}


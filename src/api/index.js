import Ajax from '@/ajax/Ajax'

export const reqGoodsListInfo = (searchParams) => {
  return Ajax({
    url:'/list',
    method:'post',
    data:searchParams //必须是对象
  })
}
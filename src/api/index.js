import Ajax from '@/ajax/Ajax'
 
//用来书写所有的接口请求函数
//15个接口，每一个接口我们都去封装一个函数来对应
//以后哪里需要数据，那我就调哪一个相应的接口请求函数就ok

//请求三级分类列表数据函数
///api/product/getBaseCategoryList 请求地址
//GET：请求方式
//参数：无

export const reqCategoryList = () => {
  return Ajax({
    url:'/product/getBaseCategoryList',
    method:'get'
  })
}
// reqCategoryList()

//请求获取mock的banner和floor数据
export const reqBannerList = () => {
  return mockAjax({
    url:'/banner',
    method:'get'
  })
}

export const reqFloorList = () => {
  return mockAjax({
    url:'/floor',
    method:'get'
  })
}

//请求获取search的商品列表数据  /api/list
// post
// data 请求体参数
// {
//   "category3Id": "61",
//   "categoryName": "手机",
//   "keyword": "小米",
//   "order": "1:desc",
//   "pageNo": 1,
//   "pageSize": 10,
//   "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//   "trademark": "4:小米"
// }

export const reqGoodsListInfo = (searchParams) => {
  return Ajax({
    url:'/list',
    method:'post',
    data:searchParams //必须是对象
  })
}

//请求注册用户  /register  post  

export const reqUserRegister = (userInfo) => {
  return Ajax({
    url:'/register',
    method:'post',
    data:userInfo
  })
}

//请求登录用户  /login  post 

export const reqUserLogin = (userInfo) => {
  return Ajax({
    url:'/login',
    method:'post',
    data:userInfo
  })
}

//请求退出登录 /logout get

export const reqUserLogout = () => {
  return Ajax({
    url:'/logout',
    method:'get',
  })
}



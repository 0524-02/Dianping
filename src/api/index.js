import Ajax from '@/ajax/Ajax'
 
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

export const reqAllListInfo = () => {
  return Ajax({
    url: '/getoverlord',
    method: 'get',
  },
  )
}
export const reqHotelALL = () => {
  return Ajax({
    url: '/hotel',
    method: 'get',
  },
  )
}
export const reqNavList = () => {
  return Ajax({
    url: '/place',
    method: 'get',
  },
  )
}


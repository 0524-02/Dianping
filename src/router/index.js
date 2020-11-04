import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)//声明使用

// import routes from './routes'



import Search from '../pages/Search'
import Group from '../pages/Group'
import Detail from '../pages/Detail'
import Order from '../pages/Order'
import Home from '../pages/Home'
import Overlord from '../pages/Overlord'
// import Home from '../pages/Home'


const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    //代表没有传递处理的回调无论是成功还是失败
    return originPush.call(this, location).catch(() => {})
  } else {
    return originPush.call(this, location, onResolved, onRejected)
  }
}
VueRouter.prototype.replace = function (location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    //代表没有传递处理的回调无论是成功还是失败
    return originReplace.call(this, location).catch(() => {})
  } else {
    return originReplace.call(this, location, onResolved, onRejected)
  }
}
export default new VueRouter({

  routes: [
      {
        path:'/search/:keyword?',//?代表这个params参数可传可不传
        component:Search,
        // name:'search',
      },
      {
        path:'/',
        redirect:'/search'
      },
      {
        path:'/detail',
        component:Detail
      },
      {
        path:'/group',
        component:Group
      },
      {
        path:'/overlord',
        component:Overlord
      },
      // {
      //   path:'/home',
      //   component:Home
      // },
  ]
})


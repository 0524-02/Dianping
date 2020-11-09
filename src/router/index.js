
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter) //声明使用

// import routes from './routes'

import Home from "../pages/Home"
import Search from '../pages/Search'
import Group from '../pages/Group'
import Detail from '../pages/Detail'
import Order from '../pages/Order'
import Overlord from '../pages/Overlord'
import Hotels from '../pages/Hotels'
// import hotel from '../pages/hotel'
// import Home from '../pages/Home'
import Personal from '../pages/Personal'




import Login from '@/pages/Login'
import Register from '@/pages/Register'
import LoginDefault from '@/pages/LoginDefault'
 


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
        name:'search',
      },
     
      {
        path:'/detail',
        component:Detail
      }, 
      {
        path:'/personal',
        component:Personal,
        meta:{
          isHide:true,
        }
      },
      {
        path:'/group',
        component:Group
      },
      {
        path:'/overlord',
        component:Overlord
      },
      {
        path:'/order',
        component:Order
      },
      {
        path:'/hotels',
        component:Hotels
      },
      {
        path:'/home',
        component:Home
      },
      {
        path:'/logindefault',
        component:LoginDefault,
        meta:{
          isHide:true
        }
      },
      {
        path:'/login',
        component:Login,
        meta:{
          isHide:true
        }
      },
     {
      path:'/register',
      component:Register,
      meta:{
        isHide:true
      }
     },
      {
        path:'/',
        redirect:'/home'
      },
  ]
})
  

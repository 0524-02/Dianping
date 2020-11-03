import Search from '@/pages/Search'

export default[
  {
    path:'/search/:keyword?',//?代表这个params参数可传可不传
    component:Search,
    name:'search',
  },
]
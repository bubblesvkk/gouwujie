import { createRouter, createWebHashHistory } from 'vue-router'
const Category=()=>import('@/views/category/Category')
const Home=()=>import('@/views/home/Home')
const Profile=()=>import('@/views/profile/Profile')
const ShopCart=()=>import('@/views/shopCart/ShopCart')
const Popular=()=>import('@/components/common/Popular')
const Newstyle=()=>import('@/components/common/Newstyle')
const Selection=()=>import('@/components/common/Selection')
const Popularing=()=>import('@/components/content/cateTabBar/Popularing')
const Shangyi=()=>import('@/components/content/cateTabBar/Shangyi')
const Qunzi=()=>import('@/components/content/cateTabBar/Qunzi')

const routes = [
  {path:'',redirect:'/home/popular'},
  {path:'/home',redirect:'/home/popular'},
  {path:'/category',redirect:'/category/shangyi'},
  {
    path:'/home',component:Home,
    children:[
      {
        path:'popular',
        component:Popular
      },
      {
        path:'newstyle',
        component:Newstyle
      },
      {
        path:'selection',
        component:Selection
      }
    ]
  },
  {
    path: '/category',component:Category,
    children: [
      {
        path:'popularing',
        component:Popularing
      },
      {
        path:'shangyi',
        component:Shangyi
      },
      {
        path:'qunzi',
        component:Qunzi
      }
    ]

  },
  {path: '/profile',component:Profile},
  {path: '/shopcart',component:ShopCart},

  // {path:'/home/popular',component:Popular},
  // {path:'/home/newstyle',component:Newstyle},
  // {path:'/home/selection',component:Selection},





]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import Login from '@/pages/Login'
import Home from "@/pages/Home"
import Register from '@/pages/Register'
import Search from '@/pages/Search'
export default [
  {
    path: '/home',
    component:Home
  },
  {
    path: '/search:keyword?',
    component: Search,
    name: 'search',
    // props: route => ({keyword:route.params.keyword,keyword1:route.query.keyword1})
  },
  {
    path: '/register',
    component: Register,
    meta: {
      isHide:true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isHide:true
    }
  },
  {
    path: '/',
    redirect: '/home'
  }
]
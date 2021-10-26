import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Order from '@/components/menus/MyOrders.vue'
import Rights from '@/components/menus/MyRights.vue'
import Settings from '@/components/menus/MySettings.vue'
import Users from '@/components/menus/MyUsers.vue'
import UserDetail from '@/components/user/MyUserDetail.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect:'/home/users',
      children: [
        { path: 'goods', component: Goods },
        { path: 'order', component: Order },
        { path: 'rights', component: Rights },
        { path: 'settings', component: Settings },
        { path: 'users', component: Users },
        { path: 'userinfo/:id', component: UserDetail,props:true   }
      ]
    },

  ]
})

router.beforeEach(function (to, from, next) {
  if (to.path === '/home') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router


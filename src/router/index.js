import Vue from 'vue'
import Router from 'vue-router'
import { getQueryString, pageUrl } from '@/utils/utils'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { checkUserCenterLogin } from '@/utils/userCenter'
import config from '@/config/config'
Vue.use(Router)

// 首页
const Home = (resolve) => {
  import('@/page/home/home').then((module) => {
    resolve(module)
  })
}

// 401
const error401 = (resolve) => {
  import('@/page/error/401').then((module) => {
    resolve(module)
  })
}
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页',
        keepAlive: true
      },
      component: Home
    },
    {
      path: '/401',
      name: '401',
      meta: {
        title: '401',
        keepAlive: true
      },
      component: error401
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (getToken() || to.name === '401') {
    // token存在或者401路由无权限，可直接访问
    next()
  } else {
    if (config.openUserCenter) {
      // 账户中心对接开启，进行集团账户对接
      checkUserCenterLogin(next)
    } else {
      next()
    }
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
})


export default router

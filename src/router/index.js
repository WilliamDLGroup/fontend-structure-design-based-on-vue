import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),

    children: [
      {
        path: '',
        redirect: '/education'

      },
      {
        path: '/education',
        name: 'Eduction',
        component: () => import('../views/Education.vue')

      },
      {
        path: '/skills',
        name: 'Skills',
        component: () => import('../views/Skills.vue')
      },
      {
        path: '/experence',
        name: 'Experence',
        component: () => import('../views/Experience.vue')
      }
    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login') next({ name: 'Login' })
//   else next()
// })

export default router

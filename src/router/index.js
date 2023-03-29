import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from "@/views/login";

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'LoginView',
    meta: {
      name: '登录',
      isSideNav: false
    },
    component: LoginView,
    children: []
  },
]

const router = new VueRouter({
  routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from "@/views/login";
import HomeView from "@/views/Home";

Vue.use(VueRouter)

/*解决跳转*/
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err)
}

const routes = [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/login',
        name: 'LoginView',
        meta: {
            name: '登录',
            isSideNav: false
        },
        component: LoginView,
    }, {
        path: '/index',
        name: 'index',
        meta: {
            name: '首页',
            isSideNav: true,
            key: 'index'
        },
        component: () => import( '@/views/index.vue'),
        children: []
    },
]

const router = new VueRouter({
    routes
})

export default router

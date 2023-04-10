import Vue from 'vue'
import VueRouter from 'vue-router'
import RootView from '@/views/Root.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'root',
        component: RootView,
        children: [
            {path:'discover',name:'discover',component: () => import('@/views/discover/index.vue')},
            {path:'music',name:'music',component: () => import('@/views/music/index.vue')},
            {path:'video',name:'video',component: () => import('@/views/video/index.vue')},
            {path:'dj',name:'dj',component: () => import('@/views/dj/index.vue')},
            {path:'like',name:'like',component: () => import('@/views/like/index.vue')},
            {path:'collection',name:'collection',component: () => import('@/views/collection/index.vue')},
        ]
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router

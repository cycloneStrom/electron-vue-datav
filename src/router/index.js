import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/login',
        meta: {
            name: '登录'
        },
        name: 'login',
        component: () => import('@/components/Login.vue')
    },
    {
        path: '/index',
        name: 'index',
        meta: {
            name: '首页'
        },
        component: () => import('@/components/Index.vue'),
        redirect: '/Index',
        children: [
            {
                path: '/Index',
                name: 'Index',
                meta: {
                    name: '首页'
                },
                component: () => import('@/components/Index.vue')
            },
        ]
    },
]


const router = new VueRouter({
    routes
});

export default router

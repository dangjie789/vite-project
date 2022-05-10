import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    meta: {
        title: '首页',
        hide: true
    },
    component: Home,
    redirect: '/welcome',
    children: [{
            path: '/welcome',
            name: 'Welcome',
            meta: {
                title: '欢迎页',
                hide: true,
                icon: 'el-icon-setting',
            },
            component: () =>
                import ('../views/Welcome.vue')
        },
        {
            path: '/login',
            name: 'Login',
            meta: {
                name: '登录页',
                hide: true,
                icon: 'el-icon-setting',
            },
            component: () =>
                import ('../views/Login.vue')
        }
    ]
}, ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;
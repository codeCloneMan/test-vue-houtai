import Vue from 'vue'
import VueRouter from 'vue-router'
// import Main from '../views/Main.vue'

Vue.use(VueRouter)


//解决Uncaught (in promise) NavigationDuplicated报错
// import Router from 'vue-router'
// Vue.use(Router)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location){
    return originalPush.call(this,location).catch(err => err)
}

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/user')
            },
            {
                path: '/mall',
                name: 'mall',
                component: () => import('../views/mall')
            },
            {
                path: '/page1',
                name: 'page1',
                component: () => import('../views/other/pageOne.vue')
            },
            {
                path: '/page2',
                name: 'page2',
                component: () => import('../views/other/pageTwo.vue')
            }
        ]
    },
   {
       path: '/login',
       name: 'login',
       component: () => import('../views/login/login.vue')
   }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

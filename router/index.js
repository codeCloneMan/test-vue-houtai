import Vue from 'vue'
import VueRouter from 'vue-router'
// import Main from '../views/Main.vue'
Vue.use(VueRouter)

//解决Uncaught (in promise) NavigationDuplicated报错;import Router from 'vue-router';Vue.use(Router)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location,onResolve,onReject){
    if(onResolve || onReject) return originalPush.call(this,location,onResolve,onReject)
    return originalPush.call(this,location).catch(err => err)
}

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main.vue'),
        redirect: '/home',
        children: []
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


import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mdoe:'hash',
    routes:[
        { 
            path: '/hello',
            component: () => import('./views/hello.vue')
        },
        { path: '/back', component: () => import('./views/back.vue') },
        { 
            path: '/',
            component: () => import('./views/hello.vue')
        },
    ]
})

router.afterEach(() => {
})

export default router
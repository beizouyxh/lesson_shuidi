import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Home from '../views/About.vue'

const Goods = Vue.extend({
    template: `
    <div>Goods</div>
  `
});


Vue.use(VueRouter)

const routes = [{
        path: '/',
        // name: 'Home',
        component: Index,
        redirect: '/home',
        children: [{
                path: 'home',
                component: Home
            },
            {
                path: 'goods',
                component: Goods
            },
            {
                path: 'goodsDetails',
                name: 'goodsDetails',
                component: Home
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach()
export default router
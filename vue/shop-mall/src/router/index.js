import Vue from 'vue'
import Router from 'vue-router'
//首页 直接加载
import HelloWorld from '../components/HelloWorld.vue'
//95% 不登陆 没必要在页面/延迟加载，渐进式的
//相对路径
const Login = () =>
    import ('@/components/Login')
    // 1. 从路由，看出来作者的网站的路由设计
    // 组件，父子组件，少量路由，格局
    // 纵观路由，得到项目的站点地图
Vue.use(Router)


export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/goodsList',
            name: 'GoodsList',
            component: () =>
                import ('../components/GoodsList.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () =>
                import ('../components/Login.vue')
        },
    ]
})
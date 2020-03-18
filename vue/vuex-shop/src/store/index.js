import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //为空 未登陆 全局共享状态
        userInfo: {
            uid: 10001,
            userName: '豪哥'
        }
        //所有状态放在这里就有问题
    },
    mutations: {},
    actions: {},
    modules: {
        // cart,
        products
    }
})
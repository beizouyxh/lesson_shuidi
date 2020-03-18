import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'; //集中管理products数据
import cart from './modules/products'; //集中管理cart数据
Vue.use(Vuex)
    //单一状态树 状态不会有问题
    //树 modules 来了
export default new Vuex.Store({
    state: { //状态根节点
        //为空 未登陆 全局共享状态
        userInfo: {
            uid: 10001,
            userName: '豪哥'
        }
        //所有状态放在这里就有问题
    },
    mutations: {},
    actions: {

    },
    modules: {
        cart,
        products //叶结点
    }
})
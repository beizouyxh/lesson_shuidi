import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        login: false, //是否登录了
        //user
        userInfo: null, //用户头像 昵称等信息
        products: {},
        cartList: [] //购物车 数据列表    vuex 小型项目
            //cart
            //products
    },
    // mutations: {
    // },
    // actions: {
    // },
    // modules:{
    //   cart
    // }
})
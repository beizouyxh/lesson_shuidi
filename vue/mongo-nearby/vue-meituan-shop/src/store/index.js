import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
    //数据管理  node->api->vuex(四大家族)->
    //共享状态 不在由组件私有 ，所有由中央调配
export default new Vuex.Store({
    state: {
        latitude: 115.950531,
        longitude: 28.549066

    },
    mutations: {},
    actions: {},
    modules: {}
})
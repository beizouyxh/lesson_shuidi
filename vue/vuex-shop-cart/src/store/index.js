// 数据管理的地方

import Vue from 'vue';
import Vuex from 'vuex';
import Api from '@/api/shop.js';
Vue.use(Vuex);
let products = [];
// Api.getProducts((_products) => {
//     products = _products;
// })

export default new Vuex.Store({
    state: {
        products: products
    }, //相当于组件里的data
    getters: {

    }
})
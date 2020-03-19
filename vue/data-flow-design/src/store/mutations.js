// 围绕状态，设计改变
// user cartList  products

import {
    RECORD_USERINFO,
    INCREMENT_QUANTITY,
    ADD_CART,
    CHECKOUT
} from './mutation-type'
export default {
    //login {avatar:'',username:''}
    [RECORD_USERINFO](state, info) {
        state.userInfo = info;
        state.login = true

    },

    //cartList
    [ADD_CART](state, { products }) {

    },
    [INCREMENT_QUANTITY](state) {

    },
    [CHECKOUT]() {

    }
}
import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [ // {
            //         "address": {
            //             "city": "Los Angeles",
            //             "state": 'California',
            //             "pincode": "123"
            //         },
            //         "tags": [
            //             "music",
            //             "blogs",
            //             "cricket"
            //         ],
            //         "name": "Tom Benzamin"
            //     },
            //     {
            //         "address": {
            //             "city": "赣州",
            //             "state": '江西',
            //             "pincode": "331000"
            //         },
            //         "tags": [
            //             "coding",
            //             "blogs"
            //         ],
            //         "name": "王志浩"
            //     },
            //     {
            //         "address": {
            //             "city": "九江",
            //             "state": '江西',
            //             "pincode": "331000"
            //         },
            //         "tags": [
            //             "coding",
            //             "swim"
            //         ],
            //         "name": "刘子民"
            //     },
            //     {
            //         "address": {
            //             "city": "赣州",
            //             "state": '江西',
            //             "pincode": "331000"
            //         },
            //         "tags": [
            //             "coding",
            //             "games"
            //         ],
            //         "name": "衷从海"
            //     }
        ]
    },
    mutations: {
        setUsers(state, payload) { //写操作的唯一地方
            state.users = payload
        }
    },
    actions: { //写入状态的第一步
        //跟api通信的地方
        fetchUsers(context) {
            api.fetchUsers((users) => {
                // 
                // 写入state,严格一些
                context.commit('setUsers', users)
            })
        }

    },
    getters: {
        getUsers(state) {
            return state.users.map((user, index) => {
                user.id = user.address.pincode + index
                return user
            })
        }
    },
    modules: {}
})
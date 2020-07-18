import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters:{
       showNum(state){
           return '当前最新的数量是[' + state.count + ']'
       }
    },
    //只有mutation能够修改state的状态
    mutations: {
        add(state) {
            //变更状态
            state.count++
        },
        addN(state, step) {
            state.count += step
        },
        sub(state) {
            state.count--
        },
        subN(state, step) {
            state.count -= step
        }
    },
    actions: {
        addAsync(context) {
            //在actions，中不能直接修改state中的数据
            //必须通过context.commit()触发某个mutation 才行
            setTimeout(() => {
                context.commit('add')
            }, 1000)
        },
        addNAsync(context, step) {
            setTimeout(() => {
                context.commit('addN', step)
            },1000)
        },
        subAsync(context){
            setTimeout(()=>{
                context.commit('sub')
            },1000)
        },
        subNAsync(context,step){
            setTimeout(()=>{
                context.commit('subN',step)
            },1000)
        }
    }

})
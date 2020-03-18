const state = {
    items: [],
    checkoutstatus: null
}
const mutations = {
    pushProductToCart(state, { id }) {
        state.items.push({
            id,
            quantity: 1
        })
    },
    incrementItemQuantuty(state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    }
}
const actions = {
    addProductToCart({ commit }, product) {
        // console.log(payload);
        if (product.inventory > 0) {
            const cartItem = state.items.find(item => item.id === product.id)
            if (!catItem) {
                commit('pushProductToCart', { id: product.id })
            } else {
                commit('incrementItemQuantuty', cartItem)
            }
        }
        // return state.items.map(({id , quantity})=>{
        //     // const product=rootState.products.all.find(product => product.id ===id)  //根节点
        //     return 
        // })
    }
}
const getters = {}

export default {
    namespaced: true, //命名空间
    state,
    mutations,
    actions,
    getters
}
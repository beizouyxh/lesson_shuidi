import Vue from 'vue'
import App from './App.vue'
import vueLazyload from 'vue-lazyload'

Vue.use(vueLazyload, {
    error: require('./assets/loading.gif'),
    loading: require('./assets/loading.gif'),
    attempt: 1
});

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
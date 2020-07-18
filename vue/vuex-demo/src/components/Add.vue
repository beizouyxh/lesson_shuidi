<template>
    <div>
     <!-- <h3>当前最近的count:{{$store.state.count}}</h3> -->
     <h3>{{$store.getters.showNum}}</h3>
     <button @click="btnHandler1">+1</button>
       <button @click="btnHandler2">+n</button>
        <button @click="btnHandler3">+1 Async</button>
          <button @click="btnHandler4">+n Async</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        methods:{
            btnHandler1(){
                // 不允许在vuex中组件直接修改state
                // this.$store.state.count++
                this.$store.commit('add')
            },
            //commit的作用，就是调用某个mutation函数
            btnHandler2(){
                this.$store.commit('addN',3)
            },
            //异步的让count自加
            btnHandler3(){
                //dispatch函数，专门用来触发actions
                this.$store.dispatch('addAsync')
            },
            btnHandler4(){
                this.$store.dispatch('addNAsync',5)
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
     <!-- <h3>当前最近的count:{{count}}</h3> -->
     <h3>{{showNum}}</h3>
     <button @click="sub">-1</button>
     <button @click="subN(3)">-N</button>
      <button @click="subAsync">-1 Async</button>
       <button @click="subNAsync(5)">-N Async</button>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
    export default {
        data(){
            return {}
        },
        computed:{
            ...mapState(['count']),
            ...mapGetters(['showNum'])
        },
        methods:{
            ...mapMutations(['sub','subN']),
            // btnHandler1(){
            //     this.sub()
            // },
            // btnHandler2(){
            //     this.subN(3)
            // },
            ...mapActions(['subAsync','subNAsync']),
            // btnHandler3(){
            //     this.subAsync()
            // },
            // btnHandler4(){
            //     this.subNAsync(5)
            // }
        }
    }
</script>

<style scoped>

</style>
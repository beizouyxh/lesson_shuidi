<template>
  <div id="app">
     <div v-for="(product,index) in $store.state.products" :key="index">
         {{product.title}}
     </div>
  </div>
</template>

<script>
// import Api from "@/api/shop.js";
//方法 怎么把vuex store的products 传到app.vue
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  mounted(){
    // Api.getProducts((_products)=>{
    //   this.products=_products
    // });
    console.log(this.$store);

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

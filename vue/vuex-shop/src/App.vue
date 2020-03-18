<template>
  <div id="app">
    <products/>
    <cart/>
    <!-- {{this.$store.state.userInfo}} -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
 import ProductsList from '@/components/ProductsList';
 import ShoppingCart from '@/components/ShoppingCart';

export default {
  name: 'App',
  components: {
   'products': ProductsList ,
   'cart':ShoppingCart

  },
   mounted(){
     //获取商品 MVVM list展示
    //  this.dispatch('')
    // console.log(this.$store.state.products.all);
    //    console.log(this.$store.state.cart.items);
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



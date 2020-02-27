<template>
  <div>
    <head-top headTitle="东华理工大学广兰校区">
      <span class="head_logo">ele.me</span>
    </head-top>

  </div>
</template>
<script>
import Header from './components/header/header';
export default {
  components:{
     "head-top":Header
  }
}
</script>  
<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
.d{
  width: 16rem;
  height: 2rem;
  background-color: springgreen
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

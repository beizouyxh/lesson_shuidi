<template>
  <div>
      <Add></Add>

      <p>------</p>

      <Sub></Sub>
  </div>
</template>

<script>
import Add from "./components/Add.vue";
import Sub from "./components/Sub.vue";
export default {
  date() {
    return {};
  },
  components: {
     Add,
     Sub
  }
};
</script>

<style scoped>
</style>
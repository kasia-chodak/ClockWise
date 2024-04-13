<template>
  <InitPage/>
</template>

<script>
import InitPage from "@/views/InitPage.vue";

export default {
  name: 'App',
  components: {
    InitPage
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

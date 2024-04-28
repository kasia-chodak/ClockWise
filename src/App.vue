<template>
  <AllTimersView/>
  <SuccessPage/>
</template>

<script>
import AllTimersView from "@/views/AllTimersView.vue";
import SuccessPage from "@/views/SuccessPage.vue";
export default {
  name: 'App',
  components: {
    AllTimersView,
     SuccessPage
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
  margin-top: -10px;
  margin-right: -10px;
  margin-left: -10px;
}
</style>

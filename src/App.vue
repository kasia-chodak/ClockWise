<template>
  <router-view/>
</template>

<script>
import {taskStore} from "@/stores/taskStore";

export default {
  name: 'App',
  components: {
  },
  setup() {
    taskStore.loadUserId();
    taskStore.loadUserTasks();
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

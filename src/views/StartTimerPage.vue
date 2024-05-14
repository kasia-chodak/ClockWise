<template>
  <div>
    <page-top-part/>
    <main-component-start-timer/>
    <page-footer/>
  </div>
</template>

<script>
import PageTopPart from "@/components/PageTopPart.vue";
import MainComponentStartTimer from "@/components/MainComponentStartTimer.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  components: {
    PageTopPart,
    MainComponentStartTimer,
    PageFooter
  }
}
</script>

<style scoped>
</style>
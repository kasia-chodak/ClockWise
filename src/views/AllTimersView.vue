<template>
  <div>
    <page-top-part/>
    <main-component-all-timers-view/>
    <page-footer/>
  </div>
</template>

<script>
import PageTopPart from "@/components/PageTopPart.vue";
import MainComponentAllTimersView from "@/components/MainComponentAllTimersView.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  components: {
    PageTopPart,
    MainComponentAllTimersView,
    PageFooter
  }
}
</script>

<style scoped>
</style>
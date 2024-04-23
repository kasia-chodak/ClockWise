<template>
  <div>
    <page-top-part/>
    <main-component-success-page/>
    <page-footer/>
  </div>
</template>

<script>
import PageTopPart from "@/components/PageTopPart.vue";
import MainComponentSuccessPage from "@/components/MainComponentSuccessPage.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  components: {
    PageTopPart,
    MainComponentSuccessPage,
    PageFooter
  }
}
</script>

<style scoped>
</style>
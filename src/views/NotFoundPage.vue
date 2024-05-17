<template>
  <div>
    <page-top-part/>
    <main-component-not-found-page/>
    <page-footer/>
  </div>
</template>

<script>
import PageTopPart from "@/components/PageTopPart.vue";
import MainComponentNotFoundPage from "@/components/MainComponentNotFoundPage.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  components: {
    PageTopPart,
    MainComponentNotFoundPage,
    PageFooter
  }
}
</script>

<style scoped>
</style>
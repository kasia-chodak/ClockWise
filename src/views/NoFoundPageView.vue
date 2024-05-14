<template>
  <div>
      <page-top-part/>
      <main-component-no-found-page/>
      <page-footer/>
    </div>
  </template>
  
  <script>
  import PageTopPart from "@/components/PageTopPart.vue";
  import MainComponentNoFoundPage from "@/components/MainComponentNoFoundPage.vue";
  import PageFooter from "@/components/PageFooter.vue";
  
  export default {
    components: {
      PageTopPart,
      MainComponentNoFoundPage,
      PageFooter
    }
  }
  </script>
  
<style scoped>
</style>
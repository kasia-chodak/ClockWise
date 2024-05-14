<template>
    <div>
      <page-top-part/>
      <main-component-end-timerview/>
      <page-footer/>
    </div>
  </template>
  
  <script>
  import PageTopPart from "@/components/PageTopPart.vue";
  import MainComponentEndTimerview from "@/components/MainComponentEndTimerview.vue";
  import PageFooter from "@/components/PageFooter.vue";
  
  export default {
    components: {
      PageTopPart,
      MainComponentEndTimerview,
      PageFooter
    }
  }
  </script>
  
  <style scoped>
  </style>
<template>
    <div>
      <page-top-part/>
      <main-component-timerview/>
      <page-footer/>
    </div>
  </template>
  
  <script>
  import PageTopPart from "@/components/PageTopPart.vue";
  import MainComponentTimerview from "@/components/MainComponentTimerview.vue"
  import PageFooter from "@/components/PageFooter.vue";
  
  export default {
    components: {
      PageTopPart,
      MainComponentTimerview,
      PageFooter,
    }
  }
  </script>
  
  <style scoped>

  </style>
  

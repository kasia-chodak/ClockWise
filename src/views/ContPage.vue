<template>
    <div>
      <page-top-part/>
      <main-component-cont/>
      <page-footer/>
    </div>
  </template>
  
  <script>
  import PageTopPart from "@/components/PageTopPart.vue";
  import MainComponentCont from "@/components/MainComponentCont.vue";
  import PageFooter from "@/components/PageFooter.vue";
  
  export default {
    components: {
      PageTopPart,
      MainComponentCont,
      PageFooter
    }
  }
  </script>
  
  <style scoped>
  </style>

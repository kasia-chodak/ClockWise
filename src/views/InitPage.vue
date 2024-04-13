<template>
  <div>
    <page-top-part/>
    <main-component-init/>
    <page-footer/>
  </div>
</template>

<script>
import PageTopPart from "@/components/PageTopPart.vue";
import MainComponentInit from "@/components/MainComponentInit.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  components: {
    PageTopPart,
    MainComponentInit,
    PageFooter
  }
}
</script>

<style scoped>
</style>
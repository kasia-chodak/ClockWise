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

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

page-footer {
  margin-top: auto; /* Pushes the footer to the bottom */
}
</style>

<template>
  <div id="page-container">
    <page-top-part/>
    <div id="timer-container">
      <goal-list/>
      <main-component-timerview id="detail"/>
    </div>
    <page-footer/>
  </div>
</template>

<script>
import PageTopPart from "@/components/PageTopPart.vue";
import MainComponentTimerview from "@/components/MainComponentTimerview.vue"
import PageFooter from "@/components/PageFooter.vue";
import GoalList from "@/components/GoalList.vue";

export default {
  components: {
    PageTopPart,
    MainComponentTimerview,
    PageFooter,
    GoalList,
  }
}
</script>

<style scoped>

  #page-container {
    position: relative;
    height: 100%;
  }

  #timer-container {
    position: relative;
    display: flex;
    flex-direction: row;
  }

  #goal-list {

  }

  #detail {

  }

</style>


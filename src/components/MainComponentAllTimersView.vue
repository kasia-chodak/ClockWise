<template>
  <body>
  <div class="container">
    <div class="heading">
      <p>All trackers</p>
      <div class="trackers-container">
        <div class="tracker" v-for="(task, index) in taskStore.userTasks.slice(0, 4)" :key="task.tsk_id" :style="getTrackerPosition(index)">
          <div class="circle" :id="task.tsk_id" @click="onTimerClick">
            <span style="font-size: 2rem">{{ computeTimeLeft(task, currentTime) }}</span>
          </div>
          <div class="label">
            <p>Zadanie: {{ task.tsk_name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<script setup>
import { taskStore } from "@/stores/taskStore";
import {computeTimeLeft, useCurrentTime} from "@/utils/task";
import {useRouter} from "vue-router";

const router = useRouter();
const currentTime = useCurrentTime();



function onTimerClick(event) {
  router.push(`/${event.target.id}/view`)
}

const getTrackerPosition = (index) => {
  if (index === 0) {
    return {
      top: '121px',
      left: '152px',
    };
  } else if (index === 1) {
    return {
      top: '121px',
      left: '1021px',
    };
  } else if (index === 2) {
    return {
      top: '477px',
      left: '509px',
    };
  } else {
    return {
      top: '477px',
      left: '1459px',
    };
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@100..900&display=swap');


body {
  position: relative;
  background-color: #E5F0E8;
  width: 100%;
  height: 100%;
  margin: 48px 0 0;
  padding: 25px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 25px;
  background-color: #E5F0E8;
  z-index: 1;
}

.heading {
  font-family: "Gluten regular", sans-serif;
  font-size: 48px;
  text-align: center;
  margin-bottom: 20px;
}

.trackers-container {
  position: relative;
  background-color: #E5F0E8;
}

.tracker {
  position: absolute;
  display: flex;
  align-items: center;
  padding: 20px;
}

.circle {
  width: 356px;
  height: 356px;
  border-radius: 50%;
  background-color: #00FF9C;
  color: #fff;
  font-family: "Gluten regular", sans-serif;
  font-size: 128px;
  line-height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}

.label {
  font-family: "Gluten medium", sans-serif;
  font-size: 48px;
  margin-left: 15px;
  max-width: 400px; /* Ta linia ogranicza szerokość tekstu do maksymalnie 350px */
  overflow-wrap: break-word; /* Ta linia powoduje zawijanie tekstu */
}
</style>
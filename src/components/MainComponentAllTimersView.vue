<template>
  <body>
    <div class="container">
      <p class="heading">All trackers</p>
      <div class="trackers-container">
          <div class="tracker" v-for="(task, index) in taskStore.userTasks.slice(0, 4)" :key="task.tsk_id" :style="getTrackerPosition(index)">
            <div class="circle" :id="task.tsk_id" :style="{ backgroundColor: getCircleColor(task) }" @click="onTimerClick">
              <span style="font-size: 2rem">{{ computeTimeLeft(task, currentTime) }}</span>
            </div>
            <div class="label">
              <p>{{ task.tsk_name }}</p>
            </div>
          </div>
      </div>
      <router-link to="/:user_id/account" class="back-button">Back to My Account</router-link>
  </div>
  </body>
</template>

<script setup>
import { taskStore } from "@/stores/taskStore";
import {computeTimeLeft, useCurrentTime} from "@/utils/task";
import {useRouter} from "vue-router";
import { getGroupedTimeRemaining } from "@/utils/task";

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

const getCircleColor = (task) => {
  // Get grouped time remaining
  const { days, hours } = getGroupedTimeRemaining(task, new Date());

  // Assign colors based on time remaining
  if (days > 0 || hours > 24) {
    // More than 24 hours remaining: Green
    return `#00FF9C`;
  } else if (hours > 12) {
    // 12-24 hours remaining: light Orange
    return `#f0e15f`;
  } else if (hours > 6) {
    // 6-12 hours remaining: Dark Orange
    return `#f5933e`;
  } else {
    // Less than 6 hours remaining: Red
    return `#FF0000`;
  }
}
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background-color: #C7DECE;
}

.heading {
  margin-top: 0px;
  text-align: center;
  font-family: "Gluten";
  font-weight: 300;
  font-size: 30px;
}

.trackers-container {
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Ensure circles wrap to the next line */
}

.tracker {
  display: inline-block; /* Ensure each tracker is a block element */
  margin: 20px; /* Adjust margin as needed */
}

.circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  color: #fff;
  font-family: "Gluten";
  font-size: 100px;
  line-height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
}

.label {
  font-family: "Gluten", sans-serif;
  font-size: 20px;
  margin-left: 15px;
  max-width: 200px; /* Ta linia ogranicza szerokość tekstu do maksymalnie 350px */
  overflow-wrap: break-word; /* Ta linia powoduje zawijanie tekstu */
}

.back-button {
  border-radius: 30px;
  background-color: #4d6a5f;
  color: #fff;
  padding: 20px 20px;
  font: 500 20px Gluten, "Courier New", sans-serif;
  border: none;
  cursor: pointer;
}

</style>
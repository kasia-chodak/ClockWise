
<template>
  <div class="main-container">
    <div class="rectangle">
      <h2>Time remaining to: {{ task.tsk_name }}</h2>
      <div class="timers">
        <div class="circle">
          <div class="inner-circle">{{ groupedTime.days }}</div>
          <span class="time-label">Days</span>
        </div>
        <div class="circle">
          <div class="inner-circle">{{ groupedTime.hours }}</div>
          <span class="time-label">Hours</span>
        </div>
        <div class="circle">
          <div class="inner-circle">{{ groupedTime.minutes }}</div>
          <span class="time-label">Minutes</span>
        </div>
        <div class="circle">
          <div class="inner-circle">{{ groupedTime.seconds }}</div>
          <span class="time-label">Seconds</span>
        </div>
      </div>
      <div class="controls">
      <button @click="startTimer"><img src="../assets/Play.png" alt="Play"></button>
      <button @click="pauseTimer"><img src="../assets/Pause.png" alt="Pause"></button>
      <button @click="finishTimer"><img src="../assets/Stop.png" alt="Reset"></button>
    </div>
    <router-link :to="`/${task.user_id}/account`" class="back-button">Back to My Account</router-link> <!-- Dynamic user_id -->
    </div>
  </div>
</template>

<script setup>
import {taskStore} from "@/stores/taskStore";
import {useRoute, useRouter} from "vue-router";
import {getGroupedTimeRemaining, useCurrentTime} from "@/utils/task";
import {computed} from "vue";

const route = useRoute();
const router = useRouter();

const currentTime = useCurrentTime();

const task = taskStore.userTasks.find(t => t.tsk_id === parseInt(route.params.timer_id, 10))


const groupedTime = computed(() => getGroupedTimeRemaining(task, currentTime.value))

const finishTimer = async () => {
  router.push(`/${task.tsk_id}/end`)
}

</script>


<style>

body {
  margin: 0;
  padding: 0;
  font-family: "Gluten";
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.rectangle {
  flex: 1;
  width: 100%;
  max-width: 1500px;
  padding: 50px 20px;
  background: #e5f0e8;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.rectangle h2 {
  text-align: center;
  font-family: "Gluten";
  font-weight: 400;
  font-size: 40px;
}

.timers {
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.circle {
  display: inline-block; /* Ensure each tracker is a block element */
  margin: 20px; /* Adjust margin as needed */
}


.inner-circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, #d0eaaf, #2d6612);
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-family: "Gluten";
  color: white;
}

.time-label {
  font-size: 20px;
  font-family: "Gluten";
}

.controls {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.controls button {
  margin: 0 10px;
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.controls button img {
  width: 60px; 
}

.back-button {
  border-radius: 30px;
  background-color: #4d6a5f;
  color: #fff;
  padding: 20px 20px;
  font: 500 20px Gluten, "Courier New", sans-serif;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
}

</style>
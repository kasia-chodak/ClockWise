
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
  height: 100vh; /* Adjust as needed */
  flex-direction: column;
  
}

.rectangle {
  width: 100%;
  max-width: 1150px;
  height: 65%;
  padding: 180px;
  background: #e5f0e8;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  text-align: center;
}

.rectangle h2 {
    text-align: center;
    font-family: "Gluten";
    font-weight: 400;
    font-size: 40px;
    margin-top: auto;
}

.timers {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Ensure circles wrap to the next line */
  width: 100%; /* Ensure the timers take up the full width */
  max-width: 1160px; /* Adjust as needed */
  margin-bottom: 5%;
}

.circle {
  display: inline-block; /* Ensure each tracker is a block element */
  margin: 40px; /* Adjust margin as needed */
}


.inner-circle {
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: linear-gradient(135deg, #d0eaaf, #2d6612); /* Green gradient */
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  font-family: "Gluten";
  color: white; /* Ensure the text is visible */
  margin-bottom: 5%;
}

.time-label {
  font-size: 40px;
  font-family: "Gluten";
}

.controls {
  display: flex;
  justify-content: center;
  margin-bottom: 2%; 
}

.controls button {
  margin: 0 10px;
  padding: 20px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  
}

.controls button img {
  width: 80px; 
}

.back-button {
  margin-bottom: 50%;
  border-radius: 30px;
  background-color: #4d6a5f;
  color: #fff;
  padding: 20px 20px;
  font: 500 20px Gluten, "Courier New", sans-serif;
  border: none;
  cursor: pointer;
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Ensure it's treated as an inline block element */
}

</style>
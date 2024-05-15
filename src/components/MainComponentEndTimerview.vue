<template>
    <div class="main-container">
      <div class="rectangle">
        <h2>Time remaining to: {{ task.tsk_name }}</h2>
        <h2>HAVE YOU COMPLETED YOUR GOAL?</h2>
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
          <button class="button" @click="onTaskFinish">YES</button>
          <button class="button" @click="onCancel">NO</button>
      </div>
    </div>
  </template>
  
  <script setup>

  import {finishTask} from "@/controllers/task";
  import {taskStore} from "@/stores/taskStore";
  import {useRoute, useRouter} from "vue-router";
  import {getGroupedTimeRemaining, useCurrentTime} from "@/utils/task";
  import {computed} from "vue";

  const route = useRoute();

  const router = useRouter();
  const onTaskFinish = async () => {
    await finishTask(task.tsk_id, taskStore.userId, new Date());
    router.push('/')
  }

  const onCancel = () => {
    router.back();
  }

  const currentTime = useCurrentTime();

  const task = taskStore.userTasks.find(t => t.tsk_id === parseInt(route.params.timer_id, 10))


  const groupedTime = computed(() => getGroupedTimeRemaining(task, currentTime.value))


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
  padding: 190px;
  background: #e5f0e8;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  text-align: center;
}

.rectangle h2 {
    text-align: center;
    font-family: "Gluten";
    font-weight: 400;
    font-size: 40px;
}

.timers {
  margin-top: 100px;
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Ensure circles wrap to the next line */
  width: 100%; /* Ensure the timers take up the full width */
  max-width: 1160px; /* Adjust as needed */
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
  margin-bottom: 50px;
}

.time-label {
  font-size: 40px;
  font-family: "Gluten";
}

.controls {
  margin-top: 10%;
  display: flex;
  justify-content: center; 
}

.controls button {
  margin: 0 10px;
  padding: 20px 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 5%;
}

.controls button img {
  width: 80px; 
}

  </style>
  
  
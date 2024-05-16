
<template>
  <div class="main-container">
    <div class="rectangle">
      <h2 v-if="task">Time remaining to: {{ task.tsk_name }}</h2>
      <h2 v-else>Task not found</h2>
      <div class="timers" v-if="task">
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
    <router-link v-if="task" :to="`/${task.user_id}/account`" class="back-button">Back to My Account</router-link>
    </div>
  </div>
</template>

<script setup>
import {taskStore} from "@/stores/taskStore";
import {useRoute, useRouter} from "vue-router";
import {getGroupedTimeRemaining, useCurrentTime} from "@/utils/task";

import { ref, computed, onMounted } from 'vue';
import { getTaskById } from '@/controllers/task'; 

const route = useRoute();
const router = useRouter();
const task = ref(null);
const currentTime = useCurrentTime();

const fetchTask = async () => {
  const taskId = parseInt(route.params.timer_id, 10);
  try {
    // Check if the task is already in the store
    let fetchedTask = taskStore.userTasks.find(t => t.tsk_id === taskId);
    if (!fetchedTask) {
      // Fetch the task if not found in the store
      fetchedTask = await getTaskById(taskId);
      taskStore.userTasks.push(fetchedTask);
    }
    task.value = fetchedTask;
  } catch (error) {
    console.error('Failed to fetch task:', error);
  }
};

onMounted(() => {
  taskStore.loadUserId();
  taskStore.loadUserTasks().then(fetchTask);
});

const groupedTime = computed(() => getGroupedTimeRemaining(task.value, currentTime.value));

const finishTimer = async () => {
  if (task.value) {
    router.push(`/${task.value.tsk_id}/end`);
  }
};

</script>


<style>

body {
  margin: 0;
  padding: 0;
  font-family: "Gluten";
  background-color: #e5f0e8;
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.rectangle{
  max-width: 2000px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
}

.rectangle h2 {
  text-align: center;
  font-family: "Gluten";
  font-weight: 400;
  font-size: 40px;
}

.timers {
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.circle {
  display: inline-block;  
  margin: 20px; 
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
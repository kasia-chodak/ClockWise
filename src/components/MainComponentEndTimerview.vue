<template>
    <div class="main-container">
      <div class="rectangle">
        <h2>Time remaining to: {{ task.tsk_name }}</h2>
        <p>HAVE YOU COMPLETED YOUR GOAL?</p>
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
      <div class="button-container">
        <router-link to="/success" class="button success" @click.prevent="onTaskFinish">YES</router-link>
        <router-link to="/:timer_id/continue" class="button continue" @click="onNoClick">NO</router-link>
        <!--
          <button class="button" @click="onTaskFinish">YES</button>
          <button class="button" @click="onCancel">NO</button>
          -->   
      </div>
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
    router.push('/success')
  }

  const onNoClick = () => {
    router.push('/:timer_id/continue'); // Redirect to continue page
  }

/*
  const onCancel = () => {
    router.back();
  }
*/
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
}

.rectangle {
  flex: 1;
  width: 100%;
  max-width: 1900px;
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

.rectangle p {
    text-align: center;
    font-family: "Gluten";
    font-weight: 400;
    font-size: 60px;
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
  font-size: 40px;
  font-family: "Gluten";
  color: white;
}

.time-label {
  font-size: 20px;
  font-family: "Gluten";
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.button {
  border-radius: 60px;
  background-color: #4d6a5f;
  color: #fff;
  padding: 40px 40px;
  font: 500 40px Gluten, "Courier New", sans-serif;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin: 10px;
}

  </style>
  
  
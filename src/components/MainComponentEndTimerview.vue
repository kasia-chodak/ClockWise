<template>
    <div class="main-container">
      <div class="rectangle">
        <span class="time-remaining"
          >Time remaining to call the client to discuss the new project</span>
          ><span class="completed-goal">HAVE YOU COMPLETED YOUR GOAL?</span>
        <div class="timers">
          <div class="ellipse1"></div>
          <div class="ellipse2"></div>
          <div class="ellipse3"></div>
          <div class="ellipse4"></div>
          <span class="flex-row">{{ groupedTime.days }}</span><span class="flex-row-6">{{ groupedTime.hours }}</span
        ><span class="flex-row-7">{{ groupedTime.minutes }}</span><span class="flex-row-8"></span
        ><span class="flex-row-9">{{ groupedTime.seconds }}</span>
        </div>
        <div class="flex-row-a">
          <span class="days">Days</span><span class="seconds">Seconds</span
          ><span class="hours">Hours</span><span class="minutes">Minutes</span>
          <button class="button" @click="onTaskFinish">YES</button>
          <button class="button" @click="onCancel">NO</button>
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
  
  .main-container {
    position: relative;
    width: 1920px;
    height: 1080px;
    margin: 0 auto;
    background: #ffffff;
    overflow: hidden;
  
  }
  
  .rectangle {
    position: relative;
    width: 1920px;
    height: 898px;
    margin: -2px 0 0 -4px;
    font-size: 0px;
    background: #e5f0e8;
    overflow: visible auto;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
  .time-remaining {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    width: 1108px;
    height: 84px;
    margin: 71px 0 0 406px;
    color: #000000;
    font-family: Gluten;
    font-size: 48px;
    font-weight: 400;
    line-height: 42.36px;
    text-align: center;
    z-index: 25;
  }
  
  .completed-goal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 1301px;
    height: 120px;
    margin: 21px 0 0 350px;
    color: #000000;
    font-family: Gluten;
    font-size: 64px;
    font-weight: 400;
    line-height: 56.48px;
    text-align: center;
    z-index: 45;
  }
  
  .timers {
    position: relative;
    width: 1570px;
    height: 273px;
    margin: 114px 0 0 170px;
    z-index: 20;
  }
  .ellipse1 {
    position: absolute;
    width: 295px;
    height: 273px;
    top: 0;
    left: 0;
    background: url(../assets/Ellipse1.png)
      no-repeat center;
    background-size: cover;
    filter: blur(2px);
    z-index: 7;
  }
  .ellipse2 {
    position: absolute;
    width: 295px;
    height: 273px;
    top: 0;
    left: 425px;
    background: url(../assets/Ellipse2.png)
      no-repeat center;
    background-size: cover;
    filter: blur(2px);
    z-index: 13;
  }
  .ellipse3 {
    position: absolute;
    width: 295px;
    height: 273px;
    top: 0;
    left: 850px;
    background: url(../assets/Ellipse3.png)
      no-repeat center;
    background-size: cover;
    filter: blur(2px);
    z-index: 16;
  }
  
  .ellipse4 {
    position: absolute;
    width: 295px;
    height: 273px;
    top: 0;
    left: 1275px;
    background: url(../assets/Ellipse4.png)
      no-repeat center;
    background-size: cover;
    filter: blur(2px);
    z-index: 10;
  }
  .flex-row {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    height: 146px;
    top: 90px;
    left: 84px;
    color: #ffffff;
    font-family: Gluten;
    font-size: 128px;
    font-weight: 400;
    line-height: 112.96px;
    text-align: left;
    white-space: nowrap;
    z-index: 8;
  }
  .flex-row-6 {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    height: 146px;
    top: 90px;
    left: 509px;
    color: #ffffff;
    font-family: Gluten;
    font-size: 128px;
    font-weight: 400;
    line-height: 112.96px;
    text-align: left;
    white-space: nowrap;
    z-index: 14;
  }
  .flex-row-7 {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    height: 146px;
    top: 90px;
    left: 934px;
    color: #ffffff;
    font-family: Gluten;
    font-size: 128px;
    font-weight: 400;
    line-height: 112.96px;
    text-align: left;
    white-space: nowrap;
    z-index: 17;
  }
  .flex-row-8 {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    height: 146px;
    top: 90px;
    left: 934px;
    color: #ffffff;
    font-family: Gluten;
    font-size: 128px;
    font-weight: 400;
    line-height: 112.96px;
    text-align: left;
    white-space: nowrap;
    z-index: 20;
  }
  .flex-row-9 {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    height: 146px;
    top: 90px;
    left: 1359px;
    color: #ffffff;
    font-family: Gluten;
    font-size: 128px;
    font-weight: 400;
    line-height: 112.96px;
    text-align: left;
    white-space: nowrap;
    z-index: 11;
  }
  .flex-row-a {
    position: relative;
    width: 1494px;
    height: 62px;
    margin: 23px 0 0 246px;
    z-index: 29;
  }
  .days {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    width: 160px;
    height: 42px;
    top: 0;
    left: 0;
    color: #000000;
    font-family: Gluten;
    font-size: 48px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
    white-space: nowrap;
    z-index: 26;
  }
  .seconds {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    width: 259px;
    height: 56px;
    top: 0;
    left: 1235px;
    color: #000000;
    font-family: Gluten;
    font-size: 48px;
    font-weight: 500;
    line-height: 42.36px;
    text-align: center;
    white-space: nowrap;
    z-index: 28;
  }
  .hours {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    width: 160px;
    height: 42px;
    top: 3px;
    left: 417px;
    color: #000000;
    font-family: Gluten;
    font-size: 48px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
    white-space: nowrap;
    z-index: 29;
  }
  .minutes {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    width: 259px;
    height: 56px;
    top: 6px;
    left: 792px;
    color: #000000;
    font-family: Gluten;
    font-size: 48px;
    font-weight: 500;
    line-height: 42.36px;
    text-align: center;
    white-space: nowrap;
    z-index: 27;
  }
  
  .button {
    display: inline-block;
    width: 322px;
    height: 83px;
    border-radius: 30px;
    background-color: #4D6A5F;
    color: #FFFFFF;
    font-family: "gluten medium", sans-serif;
    font-size: 24px;
    text-align: center;
    line-height: 83px;
    text-decoration: none;
    position: relative; 
    z-index: 2;
    margin: 50px;
  }
  
  </style>
  
  
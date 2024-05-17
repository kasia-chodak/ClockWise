<template>
  <div class="main-container">
    <div class="rectangle">
      <span class="time-remaining"
        >{{taskStore.viewedTask && taskStore.viewedTask.tsk_name}}</span>
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
      </div>
      <div class="controls">
      <button @click="startTimer"><img src="../assets/Play.png" alt="Play"></button>
      <button @click="pauseTimer"><img src="../assets/Pause.png" alt="Pause"></button>
      <button @click="finishTimer"><img src="../assets/Stop.png" alt="Reset"></button>
    </div>
    </div>
  </div>
</template>

<script setup>
import {taskStore, useUpdateDatabase} from "@/stores/taskStore";
import {useRoute, useRouter} from "vue-router";
import {getGroupedTimeRemaining, useCurrentTime} from "@/utils/task";
import {computed} from "vue";

const route = useRoute();
const router = useRouter();

const currentTime = useCurrentTime();

useUpdateDatabase(() => {
  taskStore.setViewedTask(parseInt(route.params.timer_id, 10))
});


const groupedTime = computed(() => getGroupedTimeRemaining(taskStore.viewedTask, currentTime.value))

const finishTimer = async () => {
  router.push(`/${taskStore.viewedTask.tsk_id}/end`)
}

</script>

<style>

body {
  margin: 0;
  width: 100%;
  height: 100%;
}


.main-container {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #ffffff;
  overflow: hidden;
}

.rectangle {
  position: relative;
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
  width: 100%;
  height: 84px;
  margin: 71px 0 0 0;
  color: #000000;
  font-family: Gluten;
  font-size: 48px;
  font-weight: 400;
  line-height: 42.36px;
  text-align: center;
  z-index: 25;
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

.controls {
  display: flex;
  justify-content: center; 
  width: 100%;
  margin: 20px; 
}

.controls button {
  margin: 50px;
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.controls button img {
  width: 100px; 
}

</style>



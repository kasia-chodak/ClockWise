<template>
    <div class="statistics-page">
        <PageTopPart />
        <div class="account-container">
            <img src="../assets/signup.png" alt="Sign up image" class="signup-image">
            <h2>Your Statistics</h2>
            <div class="trackers-statistics-container">
                <div class="white-box">
                  <canvas ref="chartRef" width="400" height="400"></canvas>
                </div>
            </div>
        </div>
        <div class="back-button-container">
          <router-link :to="backAddress" class="cta-button back-button">Back</router-link>
        </div>
      <PageFooter />
    </div>
</template>

<script>
import PageTopPart from '@/components/PageTopPart.vue';
import PageFooter from '@/components/PageFooter.vue';
import Chart from 'chart.js/auto';
import {taskStore, useUpdateDatabase} from "@/stores/taskStore";
import {computed, ref} from "vue";

export default {
    components: {
        PageTopPart,
        PageFooter
    },
  setup() {

      const chartRef = ref(null);
      let chart = null;
      const renderChart = () => {
      const data = {
        labels: ['Completed on Time', 'Completed Late', 'Not Completed'],
        datasets: [{
          label: 'Number of tasks',
          data: [taskStore.statistics.onTimeCount, taskStore.statistics.lateCount, taskStore.statistics.notFinishedCount],
          backgroundColor: [
            'rgba(134,178,99,0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(255, 99, 132, 0.8)'
          ],
          borderColor: [
            'rgba(134,178,99,0.8)',
            'rgba(255, 205, 86, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      };

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Task Completion Statistics'
        }
      };

      const ctx = chartRef.value?.getContext('2d');

      if (chart) {
        chart.destroy();
      }

      chart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
      });
    }

    useUpdateDatabase(() => renderChart());
    return {
      chart,
      backAddress: computed(() => `/${taskStore.userId}/account`),
      chartRef
    }
  },

}
</script>

<style scoped>
.statistics-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background-image: url("../assets/clocks.jpg");
    background-repeat: repeat;
    background-size: 20%;
    background-position: center;
}

.signup-image {
    width: 80px;
    height: auto;
}

.account-container {
    width: 80%;
    max-width: 800px;
    padding: 50px 60px;
    background-color: #e5f0e8;
    margin-top: 20px;
    margin-bottom: 0;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    flex: 1;
    font-family: "Gluten", sans-serif;
    font-weight: 150;
    font-size: 15px;
}

.account-container h2 {
    margin-bottom: 50px;
    text-align: center;
    font-family: "Gluten", sans-serif;
    font-weight: 150;
    font-size: 20px;
}

.white-box {
    background-color: white;
    padding: 180px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: calc(50% - 20px);
    width: 55%;
    text-align: center;
}

.page-footer {
    margin-top: auto;
    background-color: #7da193;
    text-align: center;
    padding: 5px;
    font-family: Gluten, "Courier New", sans-serif;
    width: 100%;
}

.back-button-container {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}

.back-button {
    border-radius: 30px;
    background-color: #4d6a5f;
    color: #fff;
    font: 500 20px Gluten, "Courier New", sans-serif;
    border: none;
    cursor: pointer;
    padding: 20px 20px;
}

.back-button:hover {
    background-color: #3b5248;
}
</style>

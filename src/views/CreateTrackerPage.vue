<template>
  <div class="create-tracker-page">
    <PageTopPart />
    <div class="account-container">
      <div class="light-green-box">
        <h2>Your Mission</h2>
        <input type="text" v-model="mission" class="white-box" placeholder="Enter your mission">

        <h2>End Time</h2>
        <input type="datetime-local" v-model="endTime" class="white-box">
        
        <button @click="startClock">Start the Clock</button>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageTopPart from '@/components/PageTopPart.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  components: {
    PageTopPart,
    PageFooter
  },
  data() {
    return {
      mission: '',
      endTime: '' // This will store the selected end time
    };
  },
  methods: {
    startClock() {
      // Handle starting the clock here
      // You can initiate the countdown timer or perform any other actions
      console.log('Clock started');
    }
  }
};
</script>

<style scoped>
.create-tracker-page {
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

.light-green-box {
  background-color: #C7DECE;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.white-box {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 50px;
}

h2 {
  margin-bottom: 10px;
  text-align: center;
  font-family: "Gluten", sans-serif;
  font-weight: 150;
  font-size: 20px;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  border-radius: 30px;
  background-color: #4d6a5f;
  color: #fff;
  padding: 20px 20px;
  font: 500 20px Gluten, "Courier New", sans-serif;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}
</style>

<template>
  <body>
  <div class="main_body">
    <div class="text_and_button">
      <div>
        <p class="intro_header">Don’t give up just yet! You can do it!</p>
        <img src="../assets/contphoto.png" alt="Continue Photo">
        <div>
          <p class="cont_question">Do you want to continue?</p>
          <button class="button" @click="goBackToClock">Go back to the clock</button>
          <router-link to="/fail" class="button fail" @click="continueTask">Give Up</router-link>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBackToClock = () => {
  router.back();
};

const continueTask = () => {
  router.push('/fail'); // Redirect to failure page
};

</script>

<style scoped>

body {
  background-image: url("../assets/clocks.jpg");
  background-repeat: repeat;
  height: 100%;
}

.main_body {
  background-color: #E5F0E8;
  height: 100%;
  margin-left: 10%;
  margin-right: 10%;
}

.text_and_button {
  color: #2f2f2f;
  position: relative;
  padding: 50px;
}

.intro_header {
  font-family: Gluten;
  font-size: 50px;
  font-weight: bold;
  line-height: 20px;
}

.cont_question {
  font-family: Gluten;
  font-size: 64px;
  font-weight: bold;
  line-height: 56.48px;
  height: 160px;
}

.button {
  display: inline-block;
  background-color: #4D6A5F;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
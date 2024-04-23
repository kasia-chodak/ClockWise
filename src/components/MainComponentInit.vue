<template>
  <body>
  <div class="main_body">
    <div class="rectangle">
      <div class="text_and_button">
        <div>
          <p class="intro_header"><b>Welcome to ClockWise: where Goals meet Time!</b></p>
          <p class="intro_text">Are you ready to embark on a journey of achievement and productivity? Look no further than ClockWise – your ultimate companion in setting, pursuing, and conquering your goals while keeping track of time. ClockWise is more than just a website: it's your personal toolkit for success. Whether you're aiming to master a new skill, complete a project, or cultivate healthier habits, ClockWise empowers you to define your objectives and stay focused every step of the way. With Clockwise, you can: set your goals, track your progress, manage your time, celebrate your achievements!
            <br><br>
            Join us on the journey to success. Start today!
          </p>
        </div>
      </div>
    </div>
    <a href="/signup">
      <button>Let's go!</button>
    </a>
  </div>
  </body>
</template>

<script setup>

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

.rectangle {
  background-color: #FFFFFF;
  margin: 15%;
}

.text_and_button {
  color: #2f2f2f;
  position: relative;
  padding: 50px;
}

.intro_header {
  font-size: 20px;
}

</style>
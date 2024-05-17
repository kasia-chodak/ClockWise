<template>
  <body>
  <div class="main_body">
    <div class="no_found_image">
      <img src='@/assets/nofoundimage.png' alt="Not found nofoundimage" widht="570px" height="700px">
    </div>
    <div class="text">
      <p>Oops! We didn't predict that move!</p>
    </div>
    <a href="/" class="button">Go back to init page</a>
  </div>
  </body>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@100..900&display=swap');

body {
  background-image: url("../assets/clocks.jpg");
  background-repeat: repeat;
  position: absolute;
  height: 90%;
  width: 100%;
  margin: auto ;
  margin-top: 70px;
  padding-top: 20px;
}

.main_body {
  position: relative; /* Ustaw kontener na pozycję względną */
  background-color: #E5F0E8;
  width: 80%;
  height: 100%;
  margin: auto ;
  display: inline-grid;
}

.no_found_image {
  position: absolute;
  top: 98px;
  left: 103px;
}

.text {
  font-family: "Gluten thin", sans-serif;
  font-size: 48px;
  margin-bottom: 20px;
  position: absolute;
  top: 323px;
  right: 80px;
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
  position: absolute;
  bottom: 300px;
  right: 270px;
}
</style>
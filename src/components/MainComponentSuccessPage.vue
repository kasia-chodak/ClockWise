<template>
  <body>
  <div class="main_body">
    <div class="text_and_images">
      <div>
        <p class="intro_header"><b>Congrats! You have achieved your goal.</b><br><b>Here is your reward:</b></p>
      </div>
      <div class="cat-images">
        <!-- Wyświetlanie zdjęć kotów -->
        <img v-for="(cat, index) in catImages" :key="index" :src="cat.url" alt="Kot" width="629" height="485">
      </div>
      <a href="/AllTimersView" class="button">Make a new clock</a>
    </div>
  </div>
  </body>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const catImages = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1');
    const data = await response.json();
    catImages.value = data;
  } catch (error) {
    console.error('Błąd podczas pobierania zdjęć kotów:', error);
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@100..900&display=swap');

body {
  background-image: url("../assets/clocks.jpg");
  background-repeat: repeat;
}

.main_body {
  position: relative; /* Ustaw kontener na pozycję względną */
  background-color: #E5F0E8;
  width: 80%;
  height: 100%;
  margin: 76px auto auto;
  padding-top: 25px;
}

.text_and_images {
  color: #2f2f2f;
}

.intro_header {
  font-family: "gluten thin", sans-serif;
  font-size: 42px;
}

.cat-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #E5F0E8;
  padding: 20px;
}

.cat-image {
  width: auto;
  height: auto;
  max-width: 629px;
  max-height: 485px;
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
  position: relative; /* Ustaw przycisk na pozycję względną */
  z-index: 2; /* Ustaw z-index na wartość większą niż tło .main_body */
}
</style>
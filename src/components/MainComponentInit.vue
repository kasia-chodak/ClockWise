<template>
  <div class="main_body">
      <div class="text_and_button">
        <div>
          <p class="intro_header"><b>Congrats! You have achieved your first goal.</b><br><b>Here is your reward:</b></p>

        </div>
        <div class="cat-images">
          <!-- Wyświetlanie zdjęć kotów -->
          <img v-for="(cat, index) in catImages" :key="index" :src="cat.url" alt="Kot" width="629" height="485">
        </div>
      </div>  
  </div>
    <a href="/setaccount">
      <button>Make a new clock</button>
    </a>
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
}

.intro_header {
  font-family: "Gluten", sans-serif;
  font-size: 42px;
  font-weight: thin;
}

.cat-images {
  display: flex;
  flex-wrap: wrap; /* Obrazy będą zawijać się do kolejnego wiersza, gdy przekroczą szerokość */
  justify-content: center;
}

.cat-image {
  width: auto; /* Ustawiamy szerokość na automatycznie, aby nie rozciągać obrazu */
  height: auto; /* Ustawiamy wysokość na automatycznie, aby nie ściskać obrazu */
  max-width: 629px; /* Maksymalna szerokość obrazu */
  max-height: 485px; /* Maksymalna wysokość obrazu */
  margin: 10px;
}
</style>

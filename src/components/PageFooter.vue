<template>
  <footer>2024. All rights reserved.</footer>
</template>

<script setup>

</script>

<style scoped>

footer {
  position: fixed;
  bottom: 0;
  height: 40px ;
  width: 100%;
  display: flex;
  justify-content: center; /* Wyśrodkowanie zawartości w poziomie */
  align-items: center; /* Wyśrodkowanie zawartości w pionie */
  color: #2f2f2f;
  background-color: #7DA193;
  margin: 0;
}

footer > * {
  flex:  1 100%;
  text-align: center; /* Wyśrodkowanie tekstu wewnątrz stopki */
}
</style>
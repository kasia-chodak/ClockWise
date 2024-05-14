<template>
  <body>
    <div class="container">
      <div class="heading">
        <p>All trackers</p>
      </div>
      <div class="trackers-container">
          <div class="tracker">
            <div class="circle">
              <span>{{ n }}</span>
            </div>
            <div class="label">
              <p>Zadanie{{ n }}</p>
            </div>
          </div>
          <div class="tracker">
            <div class="label">
              <p>Zadanie{{ n }}</p>
            </div>
            <div class="circle">
              <span>{{ n }}</span>
            </div>
          </div>
          <div class="tracker">
            <div class="circle">
              <span>{{ n }}</span>
            </div>
            <div class="label">
              <p>Zadanie{{ n }}</p>
            </div>
          </div>
          <div class="tracker">
            <div class="label">
              <p>Zadanie{{ n }}</p>
            </div>
            <div class="circle">
              <span>{{ n }}</span>
            </div>
          </div>
        </div>
    </div>  
  </body>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@100..900&display=swap');


body {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  margin-top: 48px;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #E5F0E8;
}

.container {
  position: relative;
  margin: 0 auto;
  padding: 25px;
}

.heading {
  font-family: "Gluten regular", sans-serif;
  font-size: 48px;
  text-align: center;
  margin-bottom: 20px;
}

.trackers-container {
  position: relative;
  display: flex;
  flex-direction: row;
}

.tracker {
  align-items: center;
  padding: 20px;
}

.circle {
  width: 356px;
  height: 356px;
  border-radius: 50%;
  background-color: #00FF9C;
  color: #fff;
  font-family: "Gluten regular", sans-serif;
  font-size: 128px;
  line-height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}

.label {
  font-family: "Gluten medium", sans-serif;
  font-size: 48px;
  margin-left: 15px;
  max-width: 400px; /* Ta linia ogranicza szerokość tekstu do maksymalnie 350px */
  overflow-wrap: break-word; /* Ta linia powoduje zawijanie tekstu */
}
</style>
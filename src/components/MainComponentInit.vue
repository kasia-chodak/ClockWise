<template>
  <body>
    <main class="main-content">
      <div class="content-layout">
        <article class="main-article">
          <div class="article-content">
            <div class="welcome-message">
              <div class="message-text">
                <br>
                <h1>Welcome to ClockWise: Where Goals Meet Time!</h1>
                <br>
                <p>
                  Are you ready to embark on a journey of achievement and productivity? Look no further than Clockwise – your ultimate companion in setting, pursuing, and conquering your goals while keeping track of time.
                </p>
                <br>
                <p>
                  Clockwise is more than just a website: it's your personal toolkit for success. Whether you're aiming to master a new skill, complete a project, or cultivate healthier habits, Clockwise empowers you to define your objectives and stay focused every step of the way.
                </p>
                <br>
                <p>
                  With Clockwise, you can: set your goals, track your progress, manage your time, celebrate your achievements!
                </p>
                <br>
                <p>Join us on the journey to success. Start today!</p>
                <br>
              </div>
              <router-link to="/signup">
                <button class="cta-button">Let's go!</button>
              </router-link>
            </div>
          </div>
        </article>
      </div>
    </main>
  </body>
</template>

<style scoped>

* {
  margin: 0;
  border: 0;
}

body {
  background-image: url("../assets/clocks.jpg");
  background-repeat: repeat;
}

.main-content {
  z-index: 10;
  margin-top: -4px;
  width: 100%;
}

@media (max-width: 991px) {
  .main-content {
    max-width: 100%;
  }
}

.content-layout {
  display: flex;
  gap: 20px;
}

@media (max-width: 991px) {
  .content-layout {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
}

.main-article {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: normal;
  width: 60%;
  margin: 0 auto;
}

@media (max-width: 991px) {
  .main-article {
    width: 100%;
  }
}

.article-content {
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
}

@media (max-width: 991px) {
  .article-content {
    max-width: 100%;
  }
}

.welcome-message {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid #d9d9d9;
  background-color: #e5f0e8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 60px;
}

@media (max-width: 991px) {
  .welcome-message {
    max-width: 100%;
    padding: 0 20px;
  }
}

.message-text {
  display: flex;
  width: 867px;
  max-width: 100%;
  flex-direction: column;
  margin: 20px 0 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  color: #000;
  text-align: center;
  justify-content: center;
  padding: 0 47px;
  font: 400 20px Inter, sans-serif;
}

@media (max-width: 991px) {
  .message-text {
    margin-top: 40px;
    padding: 0 20px;
  }
}

.cta-button {
  border-radius: 30px;
  background-color: #4d6a5f;
  align-self: center;
  margin-top: 46px;
  color: #fff;
  justify-content: center;
  padding: 22px 56px;
  font: 500 36px Gluten, "Courier New", sans-serif;
  border: none;
  cursor: pointer;
}

@media (max-width: 991px) {
  .cta-button {
    margin-top: 40px;
    padding: 0 20px;
  }
}

</style>

<script setup>
</script>
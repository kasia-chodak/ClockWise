<template>
  <body>
  <main class="main-content">
    <div class="content-layout">
      <article class="main-article">
        <div class="article-content">
          <div class="welcome-message">
            <div class="message-text">
              <br>
              <h1>Let's start a new journey together!</h1>
              <br>
              </div>
            <form @submit.prevent="submit">
              <div>
                <input type="text" v-model="missionName" placeholder="Name your mission" required>
              </div>
              <div class="datepicker">
                <VueDatePicker v-model="date" :inline="{ input: true }" text-input auto-apply></VueDatePicker>
              </div>
              <div class="button-container">
                <button type="submit" class="cta-button">Let's go!</button>
              </div>
            </form>
            </div>
        </div>
      </article>
    </div>
  </main>
  </body>
</template>

<script>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { createTask } from "@/controllers/task";

export default {
  components: { VueDatePicker },
  setup() {
    const missionName = ref("");
    const date = ref(null);
    const userId = localStorage.getItem('userId');

    const submit = () => {
      if (missionName.value && date.value !== null) {
        const formattedDate = new Date(date.value);
        const missionData = {
          name: missionName.value,
          date: formattedDate.toISOString()
        };
        createTask(missionData.name, missionData.date, userId).then(() => {
          console.log("Mission data inserted into database:", missionData);
        });

      } else {
        alert("Please fill in all fields.");
      }
    };

    return {
      missionName,
      date,
      submit
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@100..900&display=swap');

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
  text-align: center;
  justify-content: center;
  padding: 0 47px;
  font-family: Gluten, "Courier New", sans-serif;
}

@media (max-width: 991px) {
  .message-text {
    margin-top: 40px;
    padding: 0 20px;
  }
}

form input {
  width: 70%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 30px;
}

.datepicker {
  display: flex;
  text-align: center;
  justify-content: center;
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

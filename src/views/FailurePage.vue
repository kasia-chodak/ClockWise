<template>
  <div>
    <page-top-part/>
    <main class="main-content">
      <div class="content-layout">
        <article class="main-article">
          <div class="article-content">
            <div class="welcome-message">
              <div class="message-text">
                <br>
                <h1>Next time!</h1>
                <blockquote><i>“The one who falls and gets up is stronger than the one who never tried. Do not fear failure but rather fear not trying.” ― Roy T. Bennett</i></blockquote>
                <br>
                <img src="../assets/no_time.jpg" alt="No time left!">
                <br>
              </div>
              <button @click="backtoNewClock" class="cta-button">Make a new clock</button>
              <button @click="backToAccount" class="back-button">Back to My Account</button>
            </div>
          </div>
        </article>
      </div>
    </main>
    <page-footer/>
  </div>
</template>

<script>
import PageTopPart from "@/components/PageTopPart.vue";
import PageFooter from "@/components/PageFooter.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    PageTopPart,
    PageFooter
  },
  setup() {
    const router = useRouter();

    const backToAccount = () => {
      router.push(`/:user_id/account`);
    };

    const backtoNewClock = () => {
      router.push('/start_timer');
    };

    return { backToAccount, backtoNewClock };
  }
}
</script>

<style scoped>

.main-content {
  background-image: url("../assets/clocks.jpg");
  background-repeat: repeat;
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
  padding: 120px 60px;
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
  border-radius: 40px;
  background-color: #4d6a5f;
  align-self: center;
  margin-top: 46px;
  color: #fff;
  justify-content: center;
  padding: 22px 56px;
  font: 500 30px Gluten, "Courier New", sans-serif;
  border: none;
  cursor: pointer;
  margin-bottom: 5%;
}

@media (max-width: 991px) {
  .cta-button {
    margin-top: 40px;
    padding: 0 20px;
  }
}

h1 {
  font: 300 40px Gluten, "Courier New", sans-serif;
}

img {
  width: 50%;
  align-self: center;
}
</style>
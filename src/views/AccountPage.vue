<template>
  <div class="account-page">
    <PageTopPart />
    <div class="account-container">
      <img src="../assets/signup.png" alt="Sign up image" class="signup-image">
      <h2>Your account</h2>
      <p class="username-text">{{ username }}</p> <!-- Display the username -->
      <div class="trackers-statistics-container">
        <div class="white-box">
          <p class="box-title">Your trackers</p>
          <div class="trackers-layout">
            <div class="tracker-item" v-for="tracker in trackers" :key="tracker.tsk_id" :id="tracker.tsk_id" @click="seeTracker(tracker.tsk_id)" style="cursor:pointer;">
              <p>{{tracker.tsk_name}}</p>
            </div>
            <button @click="goToCreateTrackerPage" class="create-tracker-button">
              Create New Tracker
            </button>
          </div>
        </div>
        <div class="white-box">
          <p class="box-title">Your statistics</p>
          <!-- statistics layout -->
          <div class="statistics-link-container">
            <router-link :to="statsPath" class="cta-button view-statistics-button">View Statistics</router-link>
            <!-- zmiana - button 'view statistics' przekiwrowuje do AccountStatistics page -->
          </div>
        </div>
      </div>
      <div class="button-container">
        <router-link to="/all_timers" class="cta-button">Show All Trackers</router-link>
        <!-- zmiana - button przekiwrowuje do alltimersview page -->
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageTopPart from '@/components/PageTopPart.vue';
import PageFooter from '@/components/PageFooter.vue';
import {taskStore} from "@/stores/taskStore";
import {computed} from "vue";

export default {
    components: {
        PageTopPart,
        PageFooter
    },
    props: {
        username: {
            type: String,
            required: true
        }
    },
  setup() {
    return {
      trackers: taskStore.userTasks,
      statsPath: computed(() => `/${taskStore.userId}/statistics`)
    }
  },
    methods: {
    goToCreateTrackerPage() {
      this.$router.push('/start_timer');
    },
      seeTracker(id) {
      this.$router.push(`/${id}/view`)
      }
  }
}

</script>

<style scoped>
.account-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh; 
    background-image: url("../assets/clocks.jpg");
    background-repeat: repeat;
    background-size: 20%;
    background-position: center;
}

.signup-image {
    width: 80px; 
    height: auto; 
}

.account-container {
    width: 80%;
    max-width: 800px;
    padding: 50px 60px;
    background-color: #e5f0e8;
    margin-top: 20px;
    margin-bottom: 0; 
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    flex: 1; 
    font-family: "Gluten", sans-serif;
    font-weight: 150;
    font-size: 15px;
}

.account-container h2 {
    margin-bottom: 50px;
    text-align: center;
    font-family: "Gluten", sans-serif;
    font-weight: 150;
    font-size: 20px;
}

.trackers-statistics-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}

.white-box {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: calc(50% - 20px);
    text-align: center;
}

.box-title {
    margin-bottom: 20px;
    font-size: 18px;
}

.trackers-layout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
}

.tracker-item {
    background-color: #C7DECE;
    padding: 5px;
    border-radius: 30px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.create-tracker-button {
    background-color: #C7DECE;
    padding: 10px;
    border-radius: 30px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    cursor: pointer;
}

.statistics-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%; /* the box takes full height */
}

.statistics-link-container {
    margin-top: auto; /* Push the link to the bottom */
}

.view-statistics-button {
        padding: 10px 10px !important;
        font-size: 14px !important;
        text-decoration: none;
    }

.cta-button {
    border-radius: 30px;
    background-color: #4d6a5f;
    color: #fff;
    padding: 20px 20px;
    font: 500 20px Gluten, "Courier New", sans-serif;
    border: none;
    cursor: pointer;
}

.page-footer {
    margin-top: auto;
    background-color: #7da193;
    text-align: center;
    padding: 5px;
    font-family: Gluten, "Courier New", sans-serif;
    width: 100%;
}
</style>

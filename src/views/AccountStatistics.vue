<template>
    <div class="statistics-page">
        <PageTopPart />
        <div class="account-container">
            <img src="../assets/signup.png" alt="Sign up image" class="signup-image">
            <h2>Your Statistics</h2>
            <div class="trackers-statistics-container">
                <div class="white-box">
                    <p v-if="statisticsLoading">Loading...</p>
                    <div v-else>
                    <p>Tasks completed on time: {{ statistics.onTimeCount }}</p>
                    <p>Late tasks: {{ statistics.lateCount }}</p>
                    <p>Tasks not finished: {{ statistics.notFinishedCount }}</p>
                    <p>Total tasks: {{ statistics.totalCount }}</p>
                    <!-- content -->
                </div>
            </div>
        </div>
        <div class="back-button-container">
            <router-link to="/:user_id/account" class="cta-button back-button">Back to My Account</router-link>
            <!-- zmiana /account na /:user.. tak jak jest w router.js - tak żeby button 'back' przekierowywyal z powrotem do accountpage -->
        </div>
        </div>
        <PageFooter />
    </div>
</template>

<script>
import PageTopPart from '@/components/PageTopPart.vue';
import PageFooter from '@/components/PageFooter.vue';
import { getUserCompletionStatistics } from "@/controllers/task";
import { taskStore } from "@/stores/taskStore";

export default {
    components: {
        PageTopPart,
        PageFooter
    },
    data() {
    return {
      statistics: {
        onTimeCount: 0,
        lateCount: 0,
        notFinishedCount: 0,
        totalCount: 0
      },
      statisticsLoading: true
    };
    },

   methods: {
    async fetchStatistics() {
        try {
            const userId = taskStore.userId;
            this.statistics = await getUserCompletionStatistics(userId);
            this.statisticsLoading = false;
        } catch (error) {
            console.error("Error fetching statistics:", error);
        }
        }
    },

    mounted() {
        this.fetchStatistics();
    }
}
</script>

<style scoped>
.statistics-page {
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

.white-box {
    background-color: white;
    padding: 180px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: calc(50% - 20px);
    width: 55%;
    text-align: center;
}

.page-footer {
    margin-top: auto;
    background-color: #7da193;
    text-align: center;
    padding: 5px;
    font-family: Gluten, "Courier New", sans-serif;
    width: 100%;
}

.back-button-container {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}

.back-button {
    border-radius: 30px;
    background-color: #4d6a5f;
    color: #fff;
    font: 500 20px Gluten, "Courier New", sans-serif;
    border: none;
    cursor: pointer;
    padding: 20px 20px;
}

.back-button:hover {
    background-color: #3b5248;
}
</style>

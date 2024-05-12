<template>
    <div class="statistics-page">
        <PageTopPart />
        <div class="account-container">
            <img src="../assets/signup.png" alt="Sign up image" class="signup-image">
            <h2>Your Statistics</h2>
            <div class="trackers-statistics-container">
                <div class="white-box">
                    <!-- content -->
                </div>
            </div>
        </div>
        <PageFooter />
        <div class="back-button-container">
            <router-link to="/account" class="cta-button back-button">Back</router-link>
        </div>
    </div>
</template>

<script>
import PageTopPart from '@/components/PageTopPart.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
    components: {
        PageTopPart,
        PageFooter
    },
    data() {
        return {};
    },
    methods: {}
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

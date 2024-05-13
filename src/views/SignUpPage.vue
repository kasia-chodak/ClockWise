<template>
    <div class="signup-page">
        <PageTopPart />
        <div class="sign-up-container">
            <img src="../assets/signup.png" alt="Sign up image" class="signup-image">
            <h2>Sign up to ClockWise</h2>
            <form @submit.prevent="signup">
                <input type="text" v-model="username" placeholder="Username" required>
                <input type="password" v-model="password" placeholder="Password" required>
                <input type="password" v-model="confirmPassword" placeholder="Confirm Password" required>
                <div class="button-container"> <!-- New container for the button -->
                    <button type="submit" class="cta-button">Set up account</button>
                </div>
            </form>
            <p>Already have an account? <router-link to="/login">Go to login page</router-link></p>
        </div>
        <PageFooter />
    </div>
</template>


<script>
import PageTopPart from '@/components/PageTopPart.vue';
import PageFooter from '@/components/PageFooter.vue';
import {createAccount} from "@/controllers/signup";

export default {
    components: {
        PageTopPart,
        PageFooter
    },
    data() {
        return {
            username: '',
            password: '',
            confirmPassword: ''
        };
    },
    methods: {
        signup() {
          // Check if passwords match
          if (this.password !== this.confirmPassword) {
            console.error("Passwords do not match");
            return;
          }

          createAccount(this.username, this.password)
              .then(()=>{
                this.$router.push('/login');
              })
          }
    }
}
</script>


<style scoped>

.signup-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh; /* Extend to the full height of the viewport */
    background-image: url("../assets/clocks.jpg");
    background-repeat: repeat;
    background-size: 20%;
    background-position: center;
}

.signup-image {
  width: 80px; 
  height: auto; /* Maintain aspect ratio */
}

.sign-up-container {
    width: 80%;
    max-width: 800px;
    padding: 50px 60px;
    background-color: #e5f0e8;
    margin-top: 20px;
    margin-bottom: 0; /* Adjusted to 0 to remove the bottom margin */
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    flex: 1; /* Expand to fill remaining space */
    font-family: "Gluten", sans-serif;
    font-weight: 150;
    font-size: 15px;
}


.sign-up-container h2 {
    margin-bottom: 50px;
    text-align: center;
    font-family: "Gluten", sans-serif;
    font-weight: 150;
    font-size: 20px;
}


.sign-up-container form input {
    width: 50%;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 30px;
}


.button-container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 20px;
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
    width: 100%
}
</style>
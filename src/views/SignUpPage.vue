<template>
    <div class="signup-page">
        <PageTopPart />
        <div class="sign-up-container">
            <h2>Sign Up</h2>
            <form @submit.prevent="signup">
                <input type="text" v-model="username" placeholder="Username" required>
                <input type="password" v-model="password" placeholder="Password" required>
                <input type="password" v-model="confirmPassword" placeholder="Confirm Password" required>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <router-link to="/login">Go to login page</router-link></p>
        </div>
        <PageFooter />
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
        return {
            username: '',
            password: '',
            confirmPassword: ''
        };
    },
    methods: {
        signup() {
            // Implement your signup logic here
            console.log('Signing up...');
        }
    }
}
</script>

<style scoped>
.signup-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: url("../assets/clocks.jpg");
    background-repeat: repeat;
    background-size: 20%;
    background-position: center;
}

.sign-up-container {
    flex: 1;
    margin: 0 auto;
    width: 80%;
    max-width: 800px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #E5F0E8;
}

.sign-up-container h2 {
    margin-bottom: 20px;
}


.sign-up-container form input {
    width: 50%;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.sign-up-container form button {
    display: block;
    width: 20%;
    margin: 0 auto; /* Center horizontally */
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.sign-up-container form button:hover {
    background-color: #0056b3;
}

.page-footer {
    margin-top: auto;
    background-color: #7da193;
    text-align: center;
    padding: 5px;
    font-family: Gluten, "Courier New", sans-serif;
}
</style>
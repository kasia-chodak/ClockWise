<template>
  <div class="login-page">
    <PageTopPart />
    <div class="login-container">
      <img src="../assets/signup.png" alt="Sign up image" class="login-image">
      <h2>Log in to ClockWise</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <div class="button-container"> 
                    <button type="submit" class="cta-button">Log in</button>
        </div>
      </form>
      <p>Don't have an account yet? <router-link to="/signup">Sign up for Clockwise</router-link></p>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageTopPart from '@/components/PageTopPart.vue';
import PageFooter from '@/components/PageFooter.vue';
import { login } from '@/controllers/signup';

export default {
  components: {
    PageTopPart,
    PageFooter
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
      async login() {
        try {
          // Call the login function with the username and password
          const data = await login(this.username, this.password);
          console.log('Login successful:', data);

          // Redirect to the account page after successful login
          this.$router.push('/account');
        } catch (error) {
          console.error('Error logging in:', error);
          // Handle login failure, display error message, etc.
        }
      }
  }
}
</script>


<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh; /* Ensure the login page takes at least the full height of the viewport */
  background-image: url("../assets/clocks.jpg");
  background-repeat: repeat;
  background-size: 20%;
  background-position: center;
}

.login-image {
  width: 80px; 
  height: auto; /* Maintain aspect ratio */
}

.login-container {
  flex: 1; /* Allow the login container to grow and fill the remaining space */
  margin-top: 20px;
  margin-bottom: 0;
  width: 80%;
  max-width: 800px;
  padding: 50px 60px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #e5f0e8;
  font-family: "Gluten", sans-serif;
  font-weight: 150;
  font-size: 15px;
}

.login-container h2 {
  margin-bottom: 50px;
  text-align: center;
  font-family: "Gluten", sans-serif;
  font-weight: 150;
  font-size: 20px;
}

.login-container form input {
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
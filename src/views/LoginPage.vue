<template>
  <div class="login-page">
    <PageTopPart />
    <div class="login-container">
      <h2>Log in</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account yet? <router-link to="/signup">Sign up for Clockwise</router-link></p>
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
      password: ''
    };
  },
  methods: {
    login() {
      // login logic here (send a request to the server to authenticate the user)
      console.log('Logging in...');
    }
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the login page takes at least the full height of the viewport */
  background-image: url("../assets/clocks.jpg");
  background-repeat: repeat;
  background-size: 20%;
  background-position: center;
}

.login-container {
  flex: 1; /* Allow the login container to grow and fill the remaining space */
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #E5F0E8
}

.login-container h2 {
  margin-bottom: 20px;
}

.login-container form input {
  width: 50%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-container form button {
  display: block;
  width: 20%;
  margin: 0 auto;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-container form button:hover {
  background-color: #0056b3;
}

.login-container p {
  text-align: center;
}
</style>
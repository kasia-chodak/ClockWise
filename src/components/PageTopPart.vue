<template>
  <header>
    <a href="/" class="brand_name">ClockWise</a>
    <button class="user_icon_button" @click="goToAccountPage"><img src="../assets/user.png" height="50px" width="50px" alt="User"></button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      userId: 1
    }
  },
  methods: {
    goToAccountPage() {
      this.$router.push(`/${this.userId}/account`);
    }
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@100..900&display=swap');

* {
  margin: 0;
  border: 0;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #7da193;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}


.brand_name {
  margin: 0 auto;
  color: #2f2f2f;
  text-align: center;
  flex-grow: 1;
  font-size: 36px;
  font-family: Gluten, "Courier New", sans-serif;
  text-decoration: none;
}

.user_icon_button {
  background-color: #7da193;
  border: none;
  width: 50px;
  height: 50px;
  padding-right: 100px;
  align-self: flex-end; /* Align to the bottom of the header */
  margin-left: auto; /* Push to the right */
}


.user_icon_button:hover {
  transform: scale(1.1);
}

</style>
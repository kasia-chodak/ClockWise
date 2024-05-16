<template>
  <div class="container">
    <div class="goal-list">
      <div class="header">
        <span class="your-goals">YOUR GOALS</span>
        <button @click="addGoal">+</button>
        <button @click="removeGoal">-</button>
      </div>
      <ul>
        <li v-for="(goal, index) in goals" :key="index">{{ goal }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goals: [
        'Call the client to discuss the new project.'
      ]
    }
  },
  methods: {
    addGoal() {
     this.$router.push('/start_timer');
    },
    removeGoal() {
      if (this.goals.length > 0) {
        this.goals.pop();
      } else {
        alert('No goals to remove!');
      }
    }
  }
}
</script>

<style>

.container {
  background-color: #7da193;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.goal-list {
  background: #7da193;
  padding: 20px;
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.your-goals {
  margin-right: 10px;
  font-family: "Gluten";
  font-size: 24px;
  font-weight: bold;
  color: #000000;
}

.goal-list button {
  margin: 0 5px;
  padding: 10px 15px;
  background: #4D6A5F;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

}

ul {
  list-style: none;
  
  padding: 0;
}

li {
  background: #C7DECE;
  font-family: "Gluten";
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
}
</style>

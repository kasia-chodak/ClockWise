<template>
  <div id="countdown">
    <h2>Countdown Timer</h2>
    <div id="timer">
      <div>
        <span>{{ days }}</span>
        <span>Days</span>
      </div>
      <div>
        <span>{{ hours }}</span>
        <span>Hours</span>
      </div>
      <div>
        <span>{{ minutes }}</span>
        <span>Minutes</span>
      </div>
      <div>
        <span>{{ seconds }}</span>
        <span>Seconds</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },

  props: {
    endTime: {
      type: Date,
      required: true
    }
  },

  mounted() {
    console.log('Received endTime:', this.endTime); // Log the received endTime prop
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
  
  methods: {
    updateCountdown() {
      const targetDate = this.endTime?.getTime();
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference < 0) {
        clearInterval(this.countdownInterval);
        // Optionally handle the case when countdown expires
        return;
      }

      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    }
  }
};
</script>

<style scoped>
#countdown {
  text-align: center;
}

#timer {
  display: flex;
  justify-content: center;
}

#timer div {
  margin: 0 10px;
}

#timer span {
  display: block;
  font-size: 24px;
}
</style>

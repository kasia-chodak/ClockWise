<template>
    <div>
      <CreateTrackerPage @start-timer="handleStartTimer" />
      <TimerviewPage :endTime="endTime"/>
    </div>
  </template>
  
  <script>
  import CreateTrackerPage from '@/views/CreateTrackerPage.vue';
  import TimerviewPage from '@/views/TimerviewPage.vue';
  import { useRouter } from 'vue-router'; // Import the useRouter hook
  
  export default {
    components: {
      CreateTrackerPage,
      TimerviewPage
    },
    data() {
      return {
        endTime: null,
        //mission: '' // Add a mission data property
      };
    },
    methods: {
      handleStartTimer(data) {
        console.log("Received start-timer event with data:", data);
        if (data.endTime) {
          this.endTime = new Date(data.endTime); // Convert to Date object
          console.log("EndTime after assignment:", this.endTime);
          console.log("Navigating to TimerviewPage...");
          const router = useRouter(); // Get the router instance
          router.push({ name: 'Timerview', params: { endTime: this.endTime } }); // Pass endTime as route parameter
        } else {
          console.error("Invalid endTime:", data.endTime);
        }
      }
    }
  };
  </script>
  
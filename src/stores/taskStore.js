import {reactive} from "vue";
import {getAllUserTasks} from "@/controllers/task";

/* TO CO BYLO
export const taskStore = reactive({
    userTasks: [],
    userId: null,
    setUserTasks(tasks) {
        this.userTasks = tasks;
    },
    loadUserTasks() {
        if (!this.userId) {
            return;
        }
        getUserTasks(this.userId).catch(() => {
            this.userTasks = [];
        })
    },
    loadUserId() {
        this.userId = localStorage.getItem('userId');
    },
})

async function getUserTasks(userId) {
    const tasks = await getAllUserTasks(userId);

    taskStore.setUserTasks(tasks);
}
*/

//NOWE: Ensure that the task data is loaded and available in the store. 
//Update the loadUserTasks method to include error handling and to fetch tasks if they are not already loaded
export const taskStore = reactive({
    userTasks: [],
    userId: null,
    setUserTasks(tasks) {
      this.userTasks = tasks;
    },
    async loadUserTasks() {
      if (!this.userId) {
        this.loadUserId();
      }
      if (this.userId) {
        try {
          const tasks = await getAllUserTasks(this.userId);
          this.setUserTasks(tasks);
        } catch (error) {
          console.error("Failed to load user tasks:", error);
          this.userTasks = [];
        }
      } else {
        console.warn("No user ID found, cannot load tasks.");
        this.userTasks = [];
      }
    },
    loadUserId() {
      this.userId = localStorage.getItem('userId');
    },
  });


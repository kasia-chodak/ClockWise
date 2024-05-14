import {reactive} from "vue";
import {getAllUserTasks} from "@/controllers/task";

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


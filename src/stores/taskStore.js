import {reactive} from "vue";
import {getAllUserTasks} from "@/controllers/task";

export const taskStore = reactive({
    userTasks: [],
    userId: null,
    setUserTasks(tasks) {
        this.userTasks = tasks;
    },
    async loadUserTasks() {
        if (!this.userId) {
            return;
        }
        await getUserTasks(this.userId).catch(() => {
            this.userTasks = [];
        })
    },
    loadUserId() {
        this.userId = localStorage.getItem('userId');
    },
    viewedTask: null,
    setViewedTask(taskId) {
        this.viewedTask = this.userTasks.find(t => t.tsk_id === taskId)
    }
})

async function getUserTasks(userId) {
    const tasks = await getAllUserTasks(userId);

    taskStore.setUserTasks(tasks);
}


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

/*
export const taskStore = reactive({
    userTasks: [],
    userId: null,
    async setUserTasks(tasks) {
        this.userTasks = tasks;
    },
    async loadUserTasks() {
        if (!this.userId) {
            this.loadUserId();
        }
        if (this.userId) {
            const tasks = await getAllUserTasks(this.userId);
            this.setUserTasks(tasks);
        } else {
            this.userTasks = [];
        }
    },
    loadUserId() {
        this.userId = localStorage.getItem('userId');
    },
});
*/


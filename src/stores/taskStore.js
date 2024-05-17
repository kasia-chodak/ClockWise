import {onMounted, reactive} from "vue";
import {getAllUserTasks, getUserCompletionStatistics} from "@/controllers/task";

export const taskStore = reactive({
    userTasks: [],
    statistics: {onTimeCount: 0, lateCount: 0, notFinishedCount: 0, totalCount: 0, valid: false},
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
    async loadUserStatistics() {
        try {
            const {onTimeCount, lateCount, notFinishedCount, totalCount} = await getUserCompletionStatistics(this.userId);
            this.statistics = {onTimeCount, lateCount, notFinishedCount, totalCount};
        } catch (e) {
            if (e) {
                this.statistics = {onTimeCount: 0, lateCount: 0, notFinishedCount: 0, totalCount: 0, valid: false};
            }
        }
    },
    loadUserId() {
        this.userId = localStorage.getItem('userId');
    },
    viewedTask: null,
    setViewedTask(taskId) {
        this.viewedTask = this.userTasks.find(t => t.tsk_id === taskId)
    }
})

export const useUpdateDatabase = (afterAll = () => {}) => {
    onMounted(() => {
        taskStore.loadUserId();
        Promise.all([
            taskStore.loadUserTasks(),
            taskStore.loadUserStatistics(),
        ]).then(afterAll);
    })
}

async function getUserTasks(userId) {
    const tasks = await getAllUserTasks(userId);

    taskStore.setUserTasks(tasks);
}


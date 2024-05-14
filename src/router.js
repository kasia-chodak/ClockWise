import { createRouter, createWebHistory } from 'vue-router'
import TimerviewPage from './views/TimerviewPage.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: TimerviewPage
        }
    ]
})
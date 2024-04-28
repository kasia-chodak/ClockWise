import { createRouter, createWebHistory } from 'vue-router'
import SuccessPage from '@/views/SuccessPage.vue';
import AllTimersView from './views/AllTimersView.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/SuccessPage",
            name: SuccessPage,
            component: SuccessPage
        },
        {
            path: "/AllTimersView",
            name: AllTimersView,
            component: AllTimersView
        }
    ]
})
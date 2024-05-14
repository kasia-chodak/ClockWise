import { createRouter, createWebHistory } from 'vue-router'
import SuccessPage from '@/views/SuccessPage.vue';
import AllTimersView from '@/views/AllTimersView.vue';
import NoFoundPageView from '@/views/NoFoundPageView';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/SuccessPage" // Domyślnie przekierowuje do SuccessPage
        },
        {
            path: "/SuccessPage",
            name: "SuccessPage",
            component: SuccessPage
        },
        {
            path: "/AllTimersView",
            name: "AllTimersView",
            component: AllTimersView
        },
        {
            path: "/NoFoundPage",
            name: "NoFoundPage",
            component: NoFoundPageView
        }
    ]
})
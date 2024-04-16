import { createRouter, createWebHistory } from 'vue-router'

import InitPage from "@/views/InitPage.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: InitPage
        },
        {
            path: "/signup"
        },
        {
            path: "/login"
        },
        {
            path: "/:user_id/account"
        },
        {
            path: "/:user_id/statistics"
        },
        {
            path: "/start_timer"
        },
        {
            path: "/:timer_id/view"
        },
        {
            path: "/:timer_id/end"
        },
        {
            path: "/all_timers"
        },
        {
            path: "/continue"
        },
        {
            path: "/success"
        },
        {
            path: "/fail"
        },
        {
            path: '/:pathMatch(.*)*'
        }
    ]
})
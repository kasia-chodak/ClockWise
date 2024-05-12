import { createRouter, createWebHistory } from 'vue-router'

import InitPage from "@/views/InitPage.vue";
import AllTimersView from "@/views/AllTimersView.vue";
import ContinuePage from "@/views/ContinuePage.vue";
import SuccessPage from "@/views/SuccessPage.vue";
import FailurePage from "@/views/FailurePage.vue";

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
            path: "/all_timers",
            component: AllTimersView
        },
        {
            path: "/:timer_id/continue",
            component: ContinuePage
        },
        {
            path: "/success",
            component: SuccessPage
        },
        {
            path: "/fail",
            component: FailurePage
        },
        {
            path: '/:pathMatch(.*)*'
        }
    ]
})
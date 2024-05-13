import { createRouter, createWebHistory } from 'vue-router'

import InitPage from "@/views/InitPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import AccountPage from "@/views/AccountPage.vue";
import AccountStatistics from "@/views/AccountStatistics.vue"
import StartTimerPage from "@/views/StartTimerPage.vue";
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
            path: "/signup",
            component: SignUpPage
        },
        {
            path: "/login",
            component: LoginPage
        },
        {
            path: "/:user_id/account",
            component: AccountPage
        },
        {
            path: "/:user_id/statistics",
            component: AccountStatistics
        },
        {
            path: "/start_timer",
            component: StartTimerPage
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
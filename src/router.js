import { createRouter, createWebHistory } from 'vue-router'
import InitPage from "@/views/InitPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import AccountPage from "@/views/AccountPage.vue";
import AccountStatistics from "@/views/AccountStatistics.vue"

const routes = [
    {
        path: "/",
        component: InitPage
    },
    {
        path: '/signup', 
        component: SignUpPage 
    },
    {
        path: '/login', 
        component: LoginPage 
    },
    {
        path: '/account', 
        component: AccountPage
    },
    {
        path: '/statistics',
        component: AccountStatistics
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
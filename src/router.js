import { createRouter, createWebHistory } from 'vue-router'
import InitPage from "@/views/InitPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import LoginPage from "@/views/LoginPage.vue";

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
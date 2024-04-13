import { createRouter, createWebHistory } from 'vue-router'
import InitPage from "@/views/InitPage.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: InitPage
        }
    ]
})
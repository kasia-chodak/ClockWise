import { createRouter, createWebHistory } from 'vue-router'
import SuccessPage from '@/views/SuccessPage.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: SuccessPage
        }
    ]
})
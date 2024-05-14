import { createRouter, createWebHistory } from 'vue-router'
import InitPage from "@/views/InitPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import AccountPage from "@/views/AccountPage.vue";
import CreateTrackerPage from '@/views/CreateTrackerPage.vue';
import AccountStatistics from "@/views/AccountStatistics.vue";
import TimerviewPage from "@/views/TimerviewPage.vue";
import ParentComponent from "@/components/ParentComponent.vue"; 

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
        path: '/account/:username', // Define a dynamic segment for the username
        name: 'account',
        component: AccountPage,
        props: true // Pass route params as props to the component
    },
    {
        path: '/create-tracker',
        name: 'CreateTracker',
        component: CreateTrackerPage
    },
    {
        path: '/timerview', // Define the path for TimerviewPage
        component: TimerviewPage // Specify the TimerviewPage component
    },
    {
        path: '/parent-component',
        component: ParentComponent // Use TrackerPage component for the '/trackers' route
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
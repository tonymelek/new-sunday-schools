import { createRouter, createWebHistory } from "vue-router";
import Attendance from "./components/Attendance/Attendance.vue";
import LoginPage from './components/Login/LoginPage.vue'
import UpdateDetails from "./components/UpdateDetails/UpdateDetails.vue";
import Admin from "./components/Admin/Admin.vue";
import Home from "./components/Home.vue";
const options = {
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/attendance', component: Attendance },
        { path: '/login', component: LoginPage },
        { path: '/myProfile', component: UpdateDetails },
        { path: '/admin', component: Admin }

    ]
}

export const router = createRouter(options)

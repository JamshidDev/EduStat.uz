
import {createRouter, createWebHistory} from "vue-router"

import LoginPage from "@/pages/login/LoginPage.vue"
import NotFoundPage from "@/pages/notFound/NotFoundPage.vue"
import RegisterPage from "@/pages/register/RegisterPage.vue";
import ServiceLayout from "@/layouts/Organization/Service/ServiceLayout.vue";
import {AppLayouts} from "@/utils/index.js";
import StatisticPage from "@/pages/statistic/StatisticPage.vue"

import {AppPaths} from "@/utils/index.js";

const beforeLogin = (to, from, next) => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //     next()
    // }else {
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("refresh_token");
    //     next(AppPaths.Login);
    // }
    next()
};



const routes = [
    {
        path:AppPaths.Main,
        beforeEnter: beforeLogin,
        component:StatisticPage,
        meta:{
            layout: AppLayouts.empty
        }

    },
    {
        path:AppPaths.Register,
        name:AppPaths.Register.substring(1),
        component:RegisterPage,
        meta:{
            layout:AppLayouts.empty
        }
    },

    {
        path:AppPaths.RegisterService,
        name:AppPaths.RegisterService.substring(1),
        component:ServiceLayout,
        children:[]
    },
    {
        path:AppPaths.Login,
        name:AppPaths.Login.substring(1),
        component:LoginPage,
        meta:{
            layout:AppLayouts.empty
        }
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFoundPage,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
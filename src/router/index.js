import {
    createRouter, createWebHistory,
} from 'vue-router'

import TodoMVC from "../components/TodoMVC.vue";
import Weather from "../components/weatherForecast.vue";
import SearchUser from "../components/SearchUser.vue";
import Welcome from "../components/welcome.vue";


const routes = [
// 路由的默认路径
    {
        path:'',
        redirect:"/welcome"
    },
    {
        path:'/welcome',
        component:Welcome
    },
    {
        path: '/todomvc',
        component: TodoMVC
    },
    {
        path: '/searchUser',
        component: SearchUser
    },
    {
        path: '/weather',
        component: Weather
    },
]

// 创建路由对象
const router = createRouter({
    history: createWebHistory (),		//hash路由模式
    routes
})

export default router
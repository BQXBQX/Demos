<template>
    <div id="container">
        <a v-on:click="toMain()">toMain</a>
        <a v-on:click="toTodoMVC()">toTodoMVC</a>
        <a v-on:click="toSearchUser()">toSearchUser</a>
        <a v-on:click="toWeather()">toWeather</a>
    </div>
</template>

<script>
import router from "../router/index.js";
export default {
    name: "Navigation",
    methods: {
        toMain() {
            router.push('/')
            console.log("main")
        },
        toTodoMVC() {
            router.push('todomvc')
            console.log("todomvc")
        },
        toSearchUser() {
            router.push('searchUser')
        },
        toWeather() {
            router.push('weather')
        },
    }
}
</script>
<style>
#container {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

a {
    cursor: pointer; /* 鼠标悬浮时变成手 */
    color: #466;
    text-decoration: none;
    font-weight: bold;
    margin: 0 4px;
}

a:hover {
    color: #5352ed;
}
</style>

<template>
    <div id="container">
        <div class="item">
            <a v-on:click="toMain()">Main</a>
        </div>
        <div class="item">
            <a v-on:click="toTodoMVC()">TodoMVC</a>
        </div>
        <div class="item">
            <a v-on:click="toSearchUser()">SearchUser</a>
        </div>
        <div class="item">
            <a v-on:click="toWeather()">Weather</a>
        </div>
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

.item{
    margin: 0 4px;
    border: 2px solid #446666;
    border-radius: 15px;
    height: 40px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
}

.item:hover{
    transform: scale(1.05);
    box-shadow: 0 0 10px purple;
    transition: 0.3s;
}

.item:focus{
}
</style>

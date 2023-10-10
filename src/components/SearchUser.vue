<template>
    <div class="container">
        <h1>Welcome to retrieve GitHub users</h1>
        <div class="search-container">
            <div class="search-wrapper">
                <input type="text" v-model="inputValue" placeholder="Enter username" class="search-input">
                <input type="text" v-model="inputNumber" placeholder="page" class="search-input-number">
                <button v-on:click="fetchData" class="search-button">Search</button>
            </div>
        </div>
        <div class="user-list" @scroll="handleScroll">
            <div v-for="user in usersData" :key="user.id" class="user-card">
                <img :src="user.avatar_url" :alt="user.login" class="avatar">
                <div class="user-info">
                    <h3>{{ user.login }}</h3>
                    <a :href="user.html_url" target="_blank">View Profile</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import api from "../services/axios-users.js";
import { ref } from "vue";

let usersData = ref([]);
let inputValue = ref("");
let inputNumber = ref("");
async function fetchData() {
    try {
        const response = await api.get("/search/users", { q: inputValue.value , page:inputNumber.value });
        usersData.value = response.items;
    } catch (error) {
        console.log(error);
    }
}
function handleScroll(event){
    const element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        console.log("bottom");
    }
}
</script>

<style>
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

.search-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.search-wrapper {
    display: flex;
    align-items: center;
}

.search-input {
    padding: 8px;
    font-size: 16px;
    width: 200px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.search-input-number{
    padding: 8px;
    font-size: 16px;
    width: 50px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.search-button {
    padding: 8px 16px;
    font-size: 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.user-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.user-card {
    width: calc(40% - 10px);
    min-width: 80px;
    max-width: 150px;
    /* border: 20px; */
    display: flex;
    align-items: center;
    padding: 10px;
    border: 5px solid #404040;
    border-radius: 15px;
    margin: 20px;
    background-color: rgb(10,10,10,0.3);
    flex-direction: column;
    box-shadow: 2px 2px 2px  #213547;
}

.user-card:hover{
    transform: scale(1.05);
    transition: 0.3s;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
}

.user-info {
    text-align: center;
}

h3 {
    font-size: 18px;
    margin-bottom: 5px;
}

a {
    color: #4caf50;
    text-decoration: none;
}
</style>
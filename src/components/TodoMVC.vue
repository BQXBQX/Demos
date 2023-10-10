<template>
    <div class="container">
        <h1 class="title">todos</h1>
        <div class="input-container">
            <input class="content" type="text" v-model="inputValue" placeholder="Enter a todo">
            <button v-on:click="add" class="add-button">Add Todo</button>
        </div>
        <ul class="todo-list">
            <li v-for="item in contentStore.content" :key="item.id" class="todo-item">
                <div class="todo-box">
                    <div class="todo-content">
                        <span class="todo-text">{{ item }}</span>
                        <div class="divider"></div>
                        <button v-on:click="remove(item)" class="remove-button">X</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { TodoMVCStore } from "../store/TodoMVCStore.js";

let inputValue = ref("");
const contentStore = TodoMVCStore();

function remove(item) {
    console.log(item);
    contentStore.remove(item);
}

function add() {
    contentStore.add(inputValue.value);
    inputValue.value = "";
}
</script>

<style>
.container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
}

.title {
    color: brown;
    font-size: 40px;
    margin-bottom: 20px;
}

.input-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.content {
    padding: 10px;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 5px;
    flex: 1;
    margin-right: 10px;
}

.add-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.add-button:hover {
    background-color: #45a049;
}

.todo-list {
    list-style-type: none;
    padding: 0;
}

.todo-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.todo-box {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    flex: 1;
}

.todo-content {
    display: flex;
    align-items: center;
    flex: 1;
}

.todo-text {
    flex: 1;
    font-size: 18px;
}

.divider {
    width: 1px;
    height: 20px;
    background-color: #ccc;
    margin: 0 10px;
}

.remove-button {
    padding: 5px 10px;
    font-size: 16px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
}

.remove-button:hover {
    background-color: #d32f2f;
}
</style>
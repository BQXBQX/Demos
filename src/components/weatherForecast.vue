<template>
  <h1>this is the weather!</h1>
    <input type="text" v-model="cityContent">
    <input type="text" v-model="startDay">
    <input type="text" v-model="endDay">
  <button v-on:click="fetchDate()"></button>
</template>
<script setup>
import {ref} from "vue";
import api from "../services/axios-weather.js";
let cityContent = ref();
let startDay = ref();
let endDay = ref();

async function 
</script>
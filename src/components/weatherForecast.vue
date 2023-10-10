<template>
    <div class="weather-forecast">
        <h1>This is the Air Quality Rankings!</h1>
        <div class="grid-container">
            <div v-for="item in weatherForecast" :key="item.id" class="forecast-item">
        <span>
          {{ item.location.name }} {{ item.location.timezone_offset }}
        </span>
                <br>
                <span class="importantMessage">
          空气 aqi: {{item.aqi}}
        </span>
                <br>
                <span class="message">
          {{item.location.path}}
        </span>
            </div>
        </div>
    </div>
    <h1>
        Do you want to know more about weather?
    </h1>
    <div class="grid-container">
        <div class="weatherLocation location">
            <h3>weather conditions</h3>
            <input type="text" v-model="LocationCityName" placeholder="Enter city" class="inputCity">
            <br>
            <button v-on:click="forecastLocationFetch">search</button>
        </div>
        <div class="airLocation location">
        <h3>
            air conditions
        </h3>
        <input type="text" v-model="LocationCityAirName" placeholder="Enter city">
        <br>
        <button v-on:click="forecastLocationAirFetch">search</button>
    </div>
        <div class="weatherLocation location" >
            <h3>life suggestions</h3>
            <input type="text" placeholder="Enter city" v-model="LocationCityLifeName">
            <br>
            <button v-on:click="forecastLocationLifeFetch">search</button>
        </div>
    </div>
    <WeatherLocation v-if="LocationCityContent.length !== 0" :LocationCityContentArray="LocationCityContent" ></WeatherLocation>
    <AirLocation v-if="LocationCityAirContent.length !== 0" :LocationCityContentArray="LocationCityAirContent" ></AirLocation>
    <LifeLocation v-if="LocationCityLifeContent.length !== 0" :LocationCityContentArray="LocationCityLifeContent"></LifeLocation>
</template>

<script setup>
import { onMounted, provide, ref } from 'vue';
import api from '../services/axios-weather.js';
import WeatherLocation from "./weatherLocation.vue";
import AirLocation from "./airLocation.vue";
import LifeLocation from "./lifeLocation.vue";

let weatherForecast = ref();
let LocationCityName = ref("");
let LocationCityContent = ref([]);
let LocationCityAirName = ref();
let LocationCityAirContent = ref([]);
let LocationCityLifeName = ref();
let LocationCityLifeContent = ref([]);


onMounted(() => {
    forecastFetch();
});

function test(){
    console.log(LocationCityContent.value);
}
// provide("LocationCityContent", LocationCityContent);

async function forecastFetch() {
    try {
        const response = await api.get('/air/ranking.json', { key: 'SfiSlpW8pKP4akgDr', language: 'zh-Hans' });
        weatherForecast.value = response.results.slice(0, 9);
    } catch (error) {
        console.log(error);
    }
}

async function forecastLocationFetch() {
    try {
        const response = await api.get('/weather/daily.json', { key: 'SfiSlpW8pKP4akgDr', location: LocationCityName.value, days: 15 });
        LocationCityContent.value = response.results;
    } catch (error) {
        console.log(error);
    }
}

async function forecastLocationAirFetch() {
    try {
        const response = await api.get('/air/hourly.json', { key: 'SfiSlpW8pKP4akgDr', location: LocationCityAirName.value, days: 1 });
        LocationCityAirContent.value = response.results;
        console.log(LocationCityAirContent);
    } catch (error) {
        console.log(error);
    }
}

async function forecastLocationLifeFetch() {
    try {
        const response = await api.get('/life/suggestion.json', { key: 'SfiSlpW8pKP4akgDr', location: LocationCityLifeName.value, days: 1 });
        LocationCityLifeContent.value = response.results;
        console.log(LocationCityLifeContent.value)
    } catch (error) {
        console.log(error);
    }
}
</script>

<style scoped>
.weather-forecast {
    background-color: #222;
    color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px gray;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
}

h1 {
    text-align: center;
    font-size: 36px;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.forecast-item {
    background-color: #4453;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #446;
}

.forecast-item:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px purple;
    transition: 0.3s;
}

.importantMessage {
    color: brown;
    font-weight: bold;
    font-size: 20px;
}

.message {
    color: #494131;
    font-size: 6px;
}

.location {
    height: 200px;
    width: 400px;
    border: 2px solid gray;
    border-radius: 5px;
    background-color: #222222;
}

.location:hover{
    box-shadow: 0 0 10px purple;
    transform: scale(1.02);
    transition: 0.3s;
}

.inputCity{
    margin-top: 5px;
    margin-bottom: -3px;
}

.location{
    width: 350px;
    display: flex;
    flex-direction: column;
    border: 2px solid gray;
    border-radius: 15px;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
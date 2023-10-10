<template>
    <div class="weather-app" v-if="LocationCityContent.length !== 0">
        <h1> The air quality in {{ LocationCityContent[0].location.name }} for the next 24 hours</h1>
        <div class="weather-info">
            <p>{{ LocationCityContent[0].location.name }},</p>
            <p>{{ LocationCityContent[0].location.path }}</p>
            <p>{{ LocationCityContent[0].location.timezone_offset }}</p>
        </div>
            <div class="weather-list">
                <div v-for="item in LocationCityContent[0].hourly" :key="item.id" class="weather-item">
                    <div class="totalMessage">
                        <span class="weatherMessage" style="color: brown; font-size: 20px ;font-weight: bold">TIME: {{ item.time }}</span>
                        <span class="weatherMessage" style="color: #45a049">AQI: {{ item.aqi }}   ||   quality: {{ item.quality }}</span>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup>

import {inject, onMounted, onUpdated, ref, toRef, watch} from "vue";

onUpdated(()=>{
    console.log(LocationCityContent)
})

const props = defineProps({
    LocationCityContentArray:Array
})
let LocationCityContent = ref([]);

watch(() => props.LocationCityContentArray, (newValue, oldValue) => {
    console.log("LocationCityDateArray 变为", newValue);
    LocationCityContent.value = props.LocationCityContentArray;
    // 在这里可以执行相应的操作
});

function test() {
    console.log("loading...");
    console.log(props.LocationCityContentArray[0]);
    // console.log(LocationCityContent.value.location.name);
}
</script>

<style scoped>
.weather-app {
    background-color: transparent;
    border-radius: 10px;
    box-shadow: 0 0 10px gray;
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    display: flex;
    align-content: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
}

h1 {
    text-align: center;
    font-size: 36px;
}

.weather-info {
    display: flex;
    justify-content: center;
}


.weather-list {
    height: 300px;
    display: flex;
    align-items: center;
    gap: 10px;
    overflow-x: auto;
    white-space: nowrap;
    flex-direction: column;
}

.weather-item:hover{
    transform: scale(1.05);
    box-shadow: 0 0 10px purple;
    transition: 0.3s;
}
.weather-item {
    border: 2px solid #446;
    width: 90%;
    background-color: #4453;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.totalMessage {
    text-align: center;
    display: flex;
    align-content: center;
    flex-direction: column;
}

.weatherMessage {
    margin: 2px;
    color: #333;
    font-weight: bold;
    text-align: center;
}
</style>
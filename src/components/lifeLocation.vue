<template>
    <div class="weather-app" v-if="LocationCityContent.length !== 0">
        <h1> The life suggestions in {{ LocationCityContent[0].location.name }} for today</h1>
        <div class="weather-info">
            <p>{{ LocationCityContent[0].location.name }},</p>
            <p>{{ LocationCityContent[0].location.path }}</p>
            <p>{{ LocationCityContent[0].location.timezone_offset }}</p>
            <br>
            <p> Date: {{LocationCityContent[0].suggestion[0].date}}</p>
        </div>
        <div class="scroll-container">
            <div class="weather-list">
                <div class="weather-item">
                    <H4 STYLE="margin: 10px 0;color: brown">AIR POLLUTION</H4>
                    <span>BRIEFS: {{LocationCityContent[0].suggestion[0].air_pollution.brief}}</span>
                    <span>DETAILS: {{LocationCityContent[0].suggestion[0].air_pollution.details}}</span>
                </div>
                <div class="weather-item">
                    <H4 STYLE="margin: 10px 0;color: brown">ALLERGY</H4>
                    <span>BRIEFS: {{LocationCityContent[0].suggestion[0].allergy.brief}}</span>
                    <span>DETAILS: {{LocationCityContent[0].suggestion[0].allergy.details}}</span>
                </div>
                <div class="weather-item">
                    <H4 STYLE="margin: 10px 0;color: brown">CAR WASHING</H4>
                    <span>BRIEFS: {{LocationCityContent[0].suggestion[0].car_washing.brief}}</span>
                    <span>DETAILS: {{LocationCityContent[0].suggestion[0].car_washing.details}}</span>
                </div>
                <div class="weather-item">
                    <H4 STYLE="margin: 10px 0;color: brown">FLU</H4>
                    <span>BRIEFS: {{LocationCityContent[0].suggestion[0].flu.brief}}</span>
                    <span>DETAILS: {{LocationCityContent[0].suggestion[0].flu.details}}</span>
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

<style>
.weather-app {
    height: auto;
    overflow: hidden;
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
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    transition: background-color 0.3s;
}

.weather-item:hover {
    border: 2px dashed gray;
    background-color: #213547;
    color: darkolivegreen;
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
<template>
  <h1>hello world!</h1>
  <span>
      {{LocationCityDate}}
  </span>
</template>
<script setup>
import {inject} from "vue";

const LocationCityDate = inject('LocationCityContent');
</script>
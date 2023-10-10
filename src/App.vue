<script>
import Navigation from "./components/navigation.vue";
import {defineComponent} from "vue";
export default defineComponent({
    components: {Navigation},
})
</script>

<template>
    <Navigation></Navigation>
    <router-view></router-view>
<!--  <TodoMVC></TodoMVC>-->
<!--  <SearchUser></SearchUser>-->
<!--  <Weather></Weather>-->
<!--<Main></Main>-->
</template>

<style scoped>
</style>

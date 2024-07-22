<script setup>
import Header from "./components/Header.vue";
import { useRoute } from "vue-router";
const route=useRoute();
</script>

<template>
  <Header :currentPath="route.path"/>
  <main>
    <router-view> </router-view>
  </main>
</template>

<style scoped></style>

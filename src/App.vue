<script setup>
import Header from "./components/Header.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import Menu from "./components/Menu.vue";
const route = useRoute();
const isOpen = ref(false);
const setIsOpen = () => {
  isOpen.value === false ? (isOpen.value = true) : (isOpen.value = false);
};
</script>

<template>
  <Menu :setIsOpen="setIsOpen" :isOpen="isOpen" />
  <Header :currentPath="route.path" :setIsOpen="setIsOpen" />
  <main>
    <router-view> </router-view>
  </main>
</template>

<style scoped></style>

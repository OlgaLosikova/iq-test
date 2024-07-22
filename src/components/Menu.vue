<script setup>
import { ref } from "vue";
defineProps({
  isOpen: Boolean,
  setIsOpen: Function,
});
</script>

<template>
  <div v-if="isOpen" class="menu">
    <nav class="menu-container">
      <ul>
        <router-link to="/"><li @click="setIsOpen">главная</li></router-link>
        <li>информация о тесте</li>
        <router-link to="/test"
          ><li @click="setIsOpen">пройти тест</li></router-link
        >
      </ul>
      <img
        @click="setIsOpen"
        class="close"
        src="../assets/svg/close.svg"
        alt="close"
      />
    </nav>
  </div>
</template>

<style scoped>
.menu {
  z-index: 1000;
  position: absolute;
  margin: auto;
  width: 320px;
  height: 100vh;
  display: flex;
  background-color: #181818;
  flex-direction: column;
  align-items: flex-start;
}
.menu-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
}
li {
  list-style-type: none;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  line-height: 22px;
  margin-bottom: 27px;
  text-transform: uppercase;
}
ul {
  text-decoration: none;
  text-align: start;
  margin-top: 110px;
}
.close {
  position: absolute;
  top: 18px;
  right: 13px;
  cursor: pointer;
}
.active {
  color: #f4ce0c;
}
</style>

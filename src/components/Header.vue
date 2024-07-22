<script setup>
defineProps({
  currentPath:String,
  setIsOpen:Function,
})
</script>

<template>
  <header class="header">
    <img @click="setIsOpen"
      src="../assets/svg/menu.svg"
      alt="burger-menu"
      class="header-menu"
    /><img src="../assets/rain_bk3.png" alt="brain" class="header-logo" />
    <p v-if="currentPath === '/test'" class="header-title">
      тест на определение IQ
    </p>
    <p v-else-if="currentPath === '/result'" class="header-title result">
      готово!
    </p>
  </header>
</template>

<style scoped>
.header {
  box-shadow: 0px 4px 4px 0px #00000040;
  height: 46px;
  display: flex;
  font-size: 12px;
  background-color: #1b1b1b;
}
.header-logo {
  width: 48px;
  height: 47px;
  left: 48px;
}
.header-menu {
  margin: 17px 9px 14px 15px;
  cursor: pointer;
}
.header-title {
  font-family: "Yeseva One", serif;
  margin: 0 0 0 9px;
  color: #ffc700;
  padding-top: 18px;
}
.result{
  font-size: 20px;
  padding-top: 14px;
  text-transform: uppercase;
}
</style>

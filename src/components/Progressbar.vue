<script setup></script>

<template>
  <div class="container">
    <div class="progress-container">
      <div class="progress-value"></div>
    </div>
  </div>
</template>

<style scoped>
.container{
  padding-top: 17px;
}
.progress-container {
  background-color: #f2f3f3;
  width: 260px;
  height: 11px;
  top: 63px;
  left: 30px;
  border-radius: 6px;
  opacity: 0.59px;
}
.progress-value {
  background-color: #3bde7c;
  width: 36px;
  height: 11px;
  top: 63px;
  left: 30px;
  border-radius: 6px;
}
</style>

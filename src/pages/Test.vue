<script setup>
import data from "../assets/data.json";
import { ref } from "vue";
import Progressbar from "../components/Progressbar.vue";
const isChecked = ref(false);
const step = ref(0);
const setInputChecked = () => {
  isChecked.value = true;
};
const setNextStep = () => {
  step.value <= 8 && step.value++;
  console.log(step.value);
  isChecked.value = false;
};
</script>

<template>
  <section class="section">
    <Progressbar :stepValue="step" />
    <form>
      <div v-if="step < 4 || step === 6 || step === 8" class="form-container">
        <p class="form-title">{{ data[step].title }}</p>
        <div
          class="input-container"
          v-for="answer in data[step].answers"
          :key="answer"
        >
          <label @click="setInputChecked"
            ><input
              class="form-radio"
              type="radio"
              name="answers"
              :checked="isChecked"
            /><span class="custom-radio"></span> {{ answer }}</label
          >
        </div>
      </div>
      <div v-else-if="step === 4 || step === 5">
        <p class="form-title">{{ data[step].title }}</p>
        <div class="square-container">
          <input
            class="form-radio"
            type="radio"
            name="answers"
            :checked="isChecked"
          />
          <span
            @click="setInputChecked"
            class="square"
            v-for="answer in data[step].answers"
            :style="`background-color:${answer}`"
          ></span>
        </div>
      </div>
      <div v-else-if="step === 7">
        <p class="form-title">{{ data[step].title }}</p>
        <div class="img-container">
          <img v-for="answer in data[step].answers" :src="answer" alt="hjfjh" />
        </div>
      </div>
      <button
        type="button"
        :disabled="!isChecked"
        @click="setNextStep"
        class="button"
      >
        далее
      </button>
    </form>
  </section>
</template>

<style scoped>
.section {
  background: url(../assets/rain_bk2.png);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
}
.form-container {
  display: flex;
  flex-direction: column;
}
.form-title {
  font-size: 20px;
  margin-top: 101px;
  margin-bottom: 41px;
}
.form-radio {
  font-size: 18px;
  display: none;
  margin: 0;
}
.input-container {
  background-color: rgb(242, 243, 243, 0.15);
  min-height: 50px;
  width: 320px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
.container-selected {
  background-color: #ffc700;
}
.button {
  margin-top: 152px;
  margin-bottom: 25px;
}
label {
  cursor: pointer;
  display: flex;
}
.custom-radio {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #fff;
  border-radius: 10px;
  margin-left: 35px;
  margin-right: 39px;
  position: relative;
}
.custom-radio::before {
  content: "";
  display: inline-block;
  background: #2950c2;
  border: 1px solid #272727;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: none;
}
.form-radio:checked + .custom-radio::before {
  display: block;
}
.form-radio:checked + .square {
  border: 6px solid #ffc700;
}
.input-container:has(> label > input:checked) {
  background-color: #ffc700;
}
.square {
  display: inline-block;
  width: 75px;
  height: 75px;
}
.square-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  justify-items: center;
}
.img-container {
  display: grid;
justify-items: center;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
}
.img-container img:first-child {
  grid-column-start: 2;
  grid-column-end: 4;
 
}
.img-container img:nth-child(2) {
  grid-row-start: 2;
}
.img-container img:nth-child(3) {
  grid-row-start: 2;
}
.img-container img:nth-child(4) {
  grid-row-start: 2;
}
.img-container img:nth-child(5) {
  grid-row-start: 2;
}
</style>

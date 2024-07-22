<script setup>
import data from "../assets/data.json";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Progressbar from "../components/Progressbar.vue";
const isChecked = ref(false);
const step = ref(0);
const router = useRouter();
const route = useRoute();
const setInputChecked = () => {
  isChecked.value = true;
};

const setNextStep = () => {
  step.value <= 10 && step.value++;
  isChecked.value = false;
  step.value === 11 && setTimeout(goToResult, 2000);
};
const goToResult = () => {
  const redirectPath = route.query.redirect || "/result";
  router.push(redirectPath);
};
</script>

<template>
  <section class="section">
    <Progressbar :stepValue="step" />
    <form>
      <p v-if="step <= 10" class="form-title">{{ data[step].title }}</p>
      <div
        v-if="step < 4 || step === 6 || step === 8 || step === 9"
        class="form-container"
      >
        <img
          v-if="step === 9"
          src="../assets/polygon.png"
          alt="polygon"
          class="polygon"
        />
        <div class="input-container" v-for="answer in data[step].answers">
          <label @click="setInputChecked"
            ><input
              class="form-radio"
              type="radio"
              name="answers"
              :checked="isChecked"
            /><span :key="answer" class="custom-radio"></span>
            {{ answer }}</label
          >
        </div>
      </div>

      <div v-else-if="step === 4 || step === 5" class="square-container">
        <label v-for="answer in data[step].answers" @click="setInputChecked">
          <input
            class="form-radio"
            type="radio"
            name="squares"
            :checked="isChecked" />
          <span
            :key="answer"
            class="square"
            :style="`background-color:${answer}`"
          ></span
        ></label>
      </div>

      <div v-else-if="step === 7 || step === 10">
        <img v-if="step === 7" src="../assets/figures.png" alt="figurs" />
        <div v-else-if="step === 10">
          <img src="../assets/insert-number.png" alt="insert-number" />
          <hr />
        </div>
        <div class="img-container">
          <label @click="setInputChecked" v-for="answer in data[step].answers">
            <input
              class="form-radio"
              type="radio"
              name="answers"
              :checked="isChecked"
            />
            <span class="white-squares" :key="answer">{{ answer }}</span>
          </label>
        </div>
      </div>
      <div v-else>
        <p class="result-title">Обработка результатов</p>
        <img src="../assets/svg/loader.svg" alt="" />
        <p class="result-text">Определение стиля мышления...........</p>
        <p class="result-text">
          ........................................................
        </p>
      </div>
      <button
        v-if="step <= 10"
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
  min-height: 522px;
  position: relative;
}
form {
  height: 57vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.form-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.form-title {
  font-size: 20px;
  margin-block-start: 0.8em;
  margin-block-end: 0.8em;
}
.form-radio {
  font-size: 18px;
  display: none;
  margin: 0;
}
.input-container {
  background-color: rgb(242, 243, 243, 0.15);
  min-height: 50px;
  min-width: 320px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
.container-selected {
  background-color: #ffc700;
}
.button {
  position: absolute;
  right: 0;
  bottom: 23px;
  left: 0;
  margin: 0 auto;
}
label {
  cursor: pointer;
  display: flex;
  padding-right: 5px;
  align-items: center;
  text-align: start;
}
.custom-radio {
  display: inline-block;
  min-width: 20px;
  height: 20px;
  border: 1px solid #fff;
  border-radius: 10px;
  margin-left: 35px;
  margin-right: 15px;
  position: relative;
  flex-grow: 2;
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
.form-radio:checked + .white-squares {
  border: 6px solid #ffc700;
  padding-top: 0;
}
.input-container:has(> label > input:checked) {
  background-color: #ffc700;
  box-sizing: border-box;
}
.square {
  display: inline-block;
  width: 75px;
  height: 75px;
  box-sizing: border-box;
}
.square-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  justify-items: center;
  max-width: 500px;
}
.img-container {
  display: flex;
  justify-items: center;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 23px;
  gap: 6px;
}

.result-title {
  margin-top: 49px;
  margin-bottom: 33px;
  font-size: 23px;
  line-height: 30.47px;
  letter-spacing: 0.05em;
  text-align: center;
}
.result-text {
  font-size: 14px;
  line-height: 18.55px;
  letter-spacing: 0.05em;
  text-align: left;
}
.polygon {
  margin-bottom: 19px;
  width: 173px;
  height: 115px;
  align-self: center;
}
hr {
  width: 320px;
  margin-top: 24px;
  border: 4px solid rgb(242 243 243 / 15%);
}
.white-squares {
  background-color: #fff;
  color: #0d0c11;
  font-size: 20px;
  text-align: center;
  width: 41px;
  height: 41px;
  padding-top: 6px;
  box-sizing: border-box;
}
@media (min-width: 500px) {
  form {
    height: 76vh;
    justify-content: flex-start;
    margin-top: 150px;
  }
  .button {
    bottom: 20%;
  }
}
</style>

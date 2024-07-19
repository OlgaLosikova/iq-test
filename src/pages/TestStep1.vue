<script setup>
import {ref} from "vue"
import Progressbar from "../components/Progressbar.vue";
const isChecked=ref(false);
const setInputChecked=()=>{
  isChecked.value=true;
}
</script>

<template>
  <section class="section">
    <Progressbar />
    <form>
      <p class="form-title">Ваш пол:</p>
      <div class="input-container">
        <label @click="setInputChecked"
          ><input 
            class="form-radio"
            type="radio"
            value="male"
            name="sex"
          /><span class="custom-radio"></span> Мужчина</label
        >
      </div>
      <div class="input-container">
        <label
          ><input
            class="form-radio"
            type="radio"
            value="female"
            name="sex"
          /><span class="custom-radio"></span>Женщина</label
        >
      </div>
      <button :disabled="!isChecked" class="button">далее</button>
    </form>
  </section>
</template>

<style scoped>
.section {
  background: url(../assets/rain_bk2.png);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 524px;
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
  height: 50px;
  width: 320px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
.button {
  margin-top: 152px;
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
</style>

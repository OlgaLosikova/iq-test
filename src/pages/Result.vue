<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
const isGaveResult = ref(false);
const result = reactive({});
const fetchResult = async () => {
  try {
    const { data } = await axios.get(`https://swapi.dev/api/people/1/`);
    result.value = data;
    isGaveResult.value = true;
  } catch (err) {
    console.log(err.message);
  }
};
</script>

<template>
  <article v-if="!isGaveResult" class="article">
    <h3>ваш результат рассчитан:</h3>
    <p class="pargraph-small">
      <span>вы относитесь к 3%</span> респондентов, чей уровень интеллекта более
      чем на 15 пунктов отличается от среднего в большую или меньшую сторону!
    </p>
    <h2>Скорее получите свой результат!</h2>
    <p class="pargraph-small paragraph-bg">
      В целях защиты персональных данных результат теста, их подробная
      интерпретация и рекомендации доступны в виде голосового сообщения по
      звонку с вашего мобильного телефона
    </p>
    <p class="timer-title">Звоните скорее, запись доступна всего</p>
    <p class="timer-text">10:00 <span>минут</span></p>

    <div class="call-button" @click="fetchResult">
      <img class="call-icon" src="../assets/svg/call.svg" alt="call" /><span
        class="call-text"
        >Позвонить и прослушать результат</span
      >
    </div>
    <span class="footer-text"
      >TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN
      FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI</span
    >
  </article>
  <article v-else class="article">
    <h3>результат:</h3>
    <div class="table">
      <div class="table-row">
        <div class="table-cell">Имя</div>
        <div class="table-cell">{{ result.value.name }}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">Дата рождения</div>
        <div class="table-cell">{{ result.value.birth_year }}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">Цвет глаз</div>
        <div class="table-cell">{{ result.value.eye_color }}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">Масса</div>
        <div class="table-cell">{{ result.value.mass }}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">Рост</div>
        <div class="table-cell">{{ result.value.height }}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">Пол</div>
        <div class="table-cell">{{ result.value.gender }}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">Цвет волос</div>
        <div class="table-cell">{{ result.value.hair_color }}</div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.article {
  background: url(../assets/rain_bk2.png);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 522px;
  overflow: hidden;
}
.article:before {
  content: "";
  background: url(../assets/lightning_PNG9_left.png);
  position: absolute;
  background-repeat: no-repeat;
  width: 165px;
  height: 185px;
  left: -25px;
  bottom: 22px;
}
.article:after {
  content: "";
  background: url(../assets/lightning_PNG9.png);
  position: absolute;
  bottom: 0;
  right: -105px;
  width: 165px;
  height: 185px;
  background-repeat: no-repeat;
  transform: rotate(20deg);
}
h3 {
  font-size: 16px;
  text-transform: uppercase;
}
h2 {
  font-size: 18px;
  text-transform: uppercase;
  color: #3bde7c;
}
.pargraph-small > span {
  text-decoration: underline;
}
.pargraph-small {
  max-width: 40%;
  font-size: 14px;
}
.paragraph-bg {
  background-color: #1c2741;
  border-radius: 6px;
  padding: 15px 12px 11px;
  font-family: "Roboto", sans-serif;
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.timer-title {
  color: #3bde7c;
  font-size: 11px;
  margin-block-end: 0.2em;
  margin-block-start: 0.2em;
}
.timer-text {
  margin-block-end: 0.2em;
  margin-block-start: 0.2em;
  font-size: 20px;
  color: #3bde7c;
}
.call-button {
  display: flex;
  background: #eb1b00;
  width: 290px;
  height: 92px;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 158px;
  z-index: 100;
}
.call-icon {
  margin: 33px 18px 30px 15px;
}
.call-text {
  font-weight: 700;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  text-align: start;
}
.footer-text {
  font-family: "Roboto", sans-serif;
  font-size: 7px;
  text-transform: uppercase;
  color: #ffffff80;
  letter-spacing: 3px;
}
.table {
  display: table;
  font-size: 18px;
  text-align: start;
}
.table-row {
  display: table-row;
}
.table-cell {
  padding: 8px 8px;
  display: table-cell;
}
@media (max-width: 590px) {
  .pargraph-small {
    max-width: 90%;
  }
}
</style>

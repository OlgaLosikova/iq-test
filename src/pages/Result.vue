<script setup></script>

<template>
  <article class="article">
    <h3>ваш результат рассчитан:</h3>
    <p class="pargraph-small">
      <span>вы относитесь к 3%</span> респондентов, чей уровень интеллекта более
      чем на 15 пунктов отличается от среднего в большую или меньшую сторону!
    </p>
    <p class="pargraph-small">
      15 пунктов отличается от среднего в большую или меньшую сторону!
    </p>
    <h2>Скорее получите свой результат!</h2>
    <p class="pargraph-small paragraph-bg">
      В целях защиты персональных данных результат теста, их подробная
      интерпретация и рекомендации доступны в виде голосового сообщения по
      звонку с вашего мобильного телефона
    </p>
    <p class="timer-title">Звоните скорее, запись доступна всего</p>
    <p class="timer-text">10:00 <span>минут</span></p>

    <div class="call-button">
      <img class="call-icon" src="../assets/svg/call.svg" alt="call" /><span
        class="call-text"
        >Позвонить и прослушать результат</span
      >
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
  font-size: 11px;
}
.timer-title {
  color: #3bde7c;
  font-size: 11px;
}
.timer-text {
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
@media (max-width: 590px) {
  .pargraph-small {
    max-width: 90%;
  }
}
</style>

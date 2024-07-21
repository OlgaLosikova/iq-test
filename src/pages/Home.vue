<script setup>

</script>

<template>
  <article class="first-page">
    <h2 class="paragraph-big">Пройдите точный и быстрый</h2>
    <h1>тест на определение IQ</h1>
    <router-link to="/test"><button>пройти тест</button></router-link>
    <p class="paragraph-small">
      <span>и получите рекомендации по развитию своего интеллекта</span> и
      улучшению финансового благосостояния и личной жизни
    </p>
    <div class="details-wrapper">
      <img src="../assets/svg/arrow_up.svg" alt="arrow-up" />
      <p class="details-button">Подробнее</p>
    </div>
  </article>
  <article class="second-page">
    <div class="second-page-wrapper">
      <img
        src="../assets/svg/quotes_left.svg"
        alt="quotes_left"
        class="quotes_left"
      />
      <h2 class="paragraph-big">
        <span>
          Профессиональный IQ-тест позволяет не только определить коэффициент
          вашего интеллекта, но и выработать список рекомендаций для повышения
          этого показателя.
        </span>
      </h2>
      <img
        src="../assets/svg/quotes_right.svg"
        alt="quotes_right"
        class="quotes_right"
      />
    </div>
  </article>
  <article class="third-page">
    <div class="third-page-wrapper">
      <h3 class="paragraph-medium">
        Также по результатам теста
        <span class="upper-case">вы получите</span> подробные
        <span class="upper-case">советы </span>по определению наиболее
        перспективной
        <span class="upper-case"
          >для вашего типа <span>интеллекта</span> сферы деятельности,</span
        >
        которая принесет вам скорейший финансовый результат.
      </h3>
      <img src="../assets/325-01.png" alt="brain" class="brain-img" /><button>
        пройти тест
      </button>
    </div>
  </article>
  <article class="fourth-page">
    <p class="paragraph-small">
      Прохождение теста займет у вас не более <span>12 минут</span>, а его
      результаты вы
      <span>сможете использовать всю жизнь.</span>
    </p>
    <h3 class="paragraph-medium paragraph-bg">
      Профессиональная интерпретация и детально проработанные рекомендации
      позволят вам качественно изменить все аспекты своей жизни: от финансового
      до любовного.
    </h3>
    <router-link to="/test"
      ><button class="button">пройти тест</button></router-link
    >
    <div class="copyright">
      <img src="../assets/svg/copyright.svg" alt="copyright" /><span
        class="year"
        >2019</span
      >
    </div>
  </article>
</template>

<style scoped>
.second-page-wrapper {
  padding: 43px 36px 33px;
  position: relative;
  max-width: 40%;
}
.paragraph-big {
  padding-top: 27px;
  margin: 0;
  font-size: 18px;
}
.paragraph-big > span {
  font-family: "Yeseva One", serif;
}
.paragraph-medium {
  color: #272727;
  padding: 38px 11px 0;
  font-size: 16px;
}
.paragraph-bg {
  background: #f3f3f2cc;
  border-radius: 20px;
  padding: 29px 15px 31px 14px;
  max-width: 40%;
}
.paragraph-small {
  margin: 22px 31px 0;
  font-size: 15px;
  max-width: 40%;
}
.paragraph-small > span {
  color: #ffc700;
}

.details-button {
  margin-top: 0;
  font-size: 8px;
  margin-bottom: 0;
}
.details-wrapper {
  padding-top: 9%;
  padding-bottom: 1%;
}
.first-page {
  padding-left: 15px;
  padding-right: 15px;
  background: url(../assets/rain_bk.png);
  height: 572px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.second-page {
  background: url(../assets/image.png),
    radial-gradient(
      84.34% 50.29% at 48.75% 49.71%,
      #2950c2 0%,
      rgba(38, 91, 199, 0.96) 40.62%,
      rgba(39, 98, 187, 0) 85.42%
    );
  display: flex;
  align-items: center;
  justify-content: center;
  height: 339px;
}
.quotes_left {
  top: 43px;
  left: 24px;
  position: absolute;
}
.quotes_right {
  bottom: 33px;
  right: 29px;
  position: absolute;
}
.brain-img {
  margin-top: 38px;
  margin-bottom: -30px;
}
.third-page {
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
}
.third-page-wrapper {
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.fourth-page {
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  background: url(../assets/rain_bk2.png);
  background-repeat: repeat;
  position: relative;
  height: 533px;
  padding: 56px 8px 13px;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}
.fourth-page:before {
  content: "";
  background: url(../assets/lightning_PNG9_left.png);
  position: absolute;
  background-repeat: no-repeat;
  width: 165px;
  height: 185px;
  left: -20px;
  bottom: 72px;
  transform: rotate(-22deg);
}
.fourth-page:after {
  content: "";
  background: url(../assets/lightning_PNG9.png);
  position: absolute;
  top: 46px;
  right: -41px;
  width: 165px;
  height: 185px;
  background-repeat: no-repeat;
}
.copyright {
  display: flex;
}
.year {
  margin-left: 4px;
  color: #ffffff80;
  font-size: 10px;
  font-family: "Roboto", sans-serif;
}
.button {
  width: 200px;
  height: 44px;

  left: 60px;
  background: transparent;
  border-radius: 50px;
  color: #fff;
  border: 1px solid #ffffff;
}
.upper-case {
  text-transform: uppercase;
  font-weight: 700;
}
.upper-case > span {
  text-transform: lowercase;
}
@media (max-width: 590px) {
  .second-page-wrapper {
    max-width: 90%;
  }
  .third-page-wrapper {
    max-width: 90%;
  }
  .paragraph-bg {
    max-width: 90%;
  }
  .paragraph-small {
    max-width: 90%;
  }
}
</style>

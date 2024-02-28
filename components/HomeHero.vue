<template>
  <div class="hero">
    <img src="../assets/MT-hero.jpg" alt="" />
    <div class="hero-text">
      <p class="first-line">MANILLA TIMES</p>
      <p class="second-line">Indie Rock Band</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  gsap.to(".hero-text > p", {
    x: 20,
    opacity: 1,
    duration: 0.6,
    delay: 0.4,
    stagger: 0.2,
  });
});
</script>

<style scoped lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  margin-bottom: 4em;
  img {
    width: 100%;
    object-fit: cover;
  }
  .hero-text {
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 12px;
    transform: translateX(-20px);
    p {
      opacity: 0;
    }
  }
  .first-line {
    font-weight: bold;
  }
}

@media screen and (min-width: 1024px) {
  .hero {
    flex-direction: row;
    min-height: 600px;
    padding: 0px 32px;
    margin-top: 32px;
    img {
      width: 540px;
      transform: rotate(-2deg);
      border-radius: 10px;
    }
    .hero-text {
      font-size: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      margin-left: 36px;
      margin-top: 0px;
      .second-line {
        margin-left: 40px;
      }
    }
  }
}
@media screen and (min-width: 1400px) {
  .hero {
    img {
      width: 650px;
    }
    .hero-text {
      font-size: 3.4rem;
    }
  }
}
</style>

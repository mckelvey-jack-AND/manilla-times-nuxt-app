<template>
  <div class="hero">
    <div class="hero-image">
      <img src="../assets/MT-hero.jpg" alt="hero image" />
    </div>
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
  margin-bottom: 48px;
  min-height: fit-content;
  .hero-image {
    height: 60vh;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media screen and (min-width: 728px) {
      height: 85vh;
    }
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
    margin-bottom: 36px 0px;
    padding: 0px 32px;
    .hero-image {
      width: 540px;
      height: auto;
      transform: rotate(-2deg);
      img {
        border-radius: 10px;
      }
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

<template>
  <section v-editable="blok" class="hero">
    <div class="hero-image">
      <img src="../assets/MT-hero.jpg" alt="hero image" />
    </div>
    <div class="hero-text">
      <h1 class="first-line">{{ textFirstLine }}</h1>
      <h2 class="second-line">{{ textSecondLine }}</h2>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object });
const { heroImage, textFirstLine, textSecondLine } = toRefs(props.blok);

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
  margin-bottom: 60px;
  .hero-image {
    height: 58vh;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media screen and (min-width: 426px) {
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
    font-family: "ManillaTimes";
    text-transform: uppercase;
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

<!-- <template>
  <div
    v-editable="blok"
    class="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center"
  >
    <h3 class="text-2xl text-[#1d243d] font-bold">
      {{ blok.name }}
    </h3>
    <p>{{ blok }}</p>
  </div>
</template>

<script setup>

</script> -->

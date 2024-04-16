<template>
  <section class="list-container" v-editable="blok">
    <article class="gig-container" v-for="gig in gigs" :key="gig._uid">
      <StoryblokComponent :blok="gig" />
    </article>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object });
const { gigs } = toRefs(props.blok);
import { onMounted } from "vue";
import gsap from "gsap";
onMounted(() => {
  gsap.to(".list-container > .gig-container", {
    opacity: 1,
    duration: 0.6,
    delay: 0.2,
    stagger: 0.2,
  });
});
</script>
<style scoped lang="scss">
h1 {
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 12px;
  text-transform: uppercase;
  font-weight: bold;
}

.gig-container {
  opacity: 0;
}

.list-container {
  padding-bottom: 24px;
}
</style>

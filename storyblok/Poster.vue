<template>
  <div class="hero-image">
    <img :src="image.filename" alt="hero image" />
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const { image } = toRefs(props.blok);
</script>
<style scoped lang="scss">
.hero-image {
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    max-width: 800px;
    height: auto;
    object-fit: cover;
  }
}
</style>

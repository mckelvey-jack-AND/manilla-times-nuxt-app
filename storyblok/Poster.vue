<template>
  <div class="hero-image">
    <NuxtImg
      class="image"
      :src="image.filename"
      alt="poster image"
      quality="80"
      preload
    />
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
  .image {
    width: 100%;
    max-width: 800px;
    height: auto;
    object-fit: cover;
  }
}
</style>

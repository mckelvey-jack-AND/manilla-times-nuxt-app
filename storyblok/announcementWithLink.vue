<template>
  <div class="container" v-editable="blok">
    <div class="image-container">
      <img :src="asset.filename" :alt="asset.alt" />
      <button class="cta">
        <a :href="link.cached_url">{{ linkText }}</a>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const { asset, link, linkText } = toRefs(props.blok);
</script>
<style scoped lang="scss">
.container {
  padding: 0px 16px;
  margin-bottom: 60px;

  .image-container {
    position: relative;
    padding: 0px 16px;
    margin-bottom: 60px;
    padding-bottom: 24px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 100%;
      width: 100%;
      margin-bottom: 12px;
    }
  }
  .cta {
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 10px;
    background: black;
    border-top-left-radius: 0px;

    a {
      color: white;
      display: block;
      padding: 8px 16px;
      margin: 0;
    }

    a,
    :visited {
      color: white;
    }
  }
}
</style>

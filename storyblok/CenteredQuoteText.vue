<template v-editable="blok">
  <div class="text-container">
    <div class="text-inner">
      <img class="quote" src="/assets/quote.svg" />
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const { text } = toRefs(props.blok);
</script>
<style scoped lang="scss">
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 30px 60px;
  .text-inner {
    display: flex;
    flex-direction: column;
    .quote {
      width: 24px;
      margin-bottom: 12px;
    }
    p {
      max-width: 800px;
      font-size: 20px;
      text-align: center;
      line-height: 1.25;
    }
    @media screen and (min-width: 1024px) {
      p {
        font-size: 28px;
      }
      .quote {
        width: 30px;
      }
    }
  }
}
</style>

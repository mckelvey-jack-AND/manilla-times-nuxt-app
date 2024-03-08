<template>
  <h1>{{ text }}</h1>
</template>

<script setup>
const props = defineProps({ blok: Object });
const { text } = toRefs(props.blok);
</script>
<style scoped lang="scss">
h1 {
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 12px;
  text-transform: uppercase;
  font-weight: bold;
}
</style>

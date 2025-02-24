<template>
  <h2 v-editable="blok">{{ text }}</h2>
</template>

<script setup>
const props = defineProps({ blok: Object });
const { text } = toRefs(props.blok);
</script>
<style scoped lang="scss">
h2 {
  font-size: 24px;
  margin-bottom: 24px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>

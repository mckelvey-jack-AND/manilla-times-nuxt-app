<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <TestComponent />
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/test");
</script>

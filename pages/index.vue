<template>
  <h1>home page</h1>
</template>

<script setup lang="ts">
  onMounted(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
      });
  });
</script>

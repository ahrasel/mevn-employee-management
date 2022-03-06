<template>
  <h1>home page {{ data }}</h1>
</template>

<script setup lang="ts">
  const { data } = await useAsyncData("count", () => $fetch("/api/v1"));
  console.log(data);

  // onMounted(() => {
  //   fetch("/api/v1")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.message);
  //     });
  // });
</script>

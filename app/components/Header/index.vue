<template>
  <header class="header">
    <h2 class="title">{{ title }}</h2>

    <button class="btn">
      <IconsSquaresFour />
      Ver todos
    </button>
  </header>
</template>

<script setup>
const props = defineProps({
  title: String
});
</script>

<style scoped>
.header {
  display: flex;
  gap: 1rem;
}

.title {
  font-weight: 700;
  font-size: 1.5rem;
}

.btn {
  display: flex;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  background-color: #313234;
  border-radius: 32px;
}
</style>
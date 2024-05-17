<template>
  <button><slot></slot></button>
</template>

<script setup>
defineProps({});
</script>

<style scoped>
button {
  width: 100%;
  border: none;
  outline: none;
  padding: 10px 0;

  font: var(--sm-pre-font);
  border-radius: var(--spacing-2);

  background-color: var(--sub-color);
  color: var(--gray100-color);
}

button:disabled {
  background-color: var(--gray200-color);
  color: var(--gray600-color);
}
</style>

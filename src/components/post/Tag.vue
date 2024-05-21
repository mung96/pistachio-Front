<template>
  <div :style="{ color: color, 'border-color': color }">{{ text }}</div>
</template>

<script setup>
const props = defineProps({
  color: String,
  text: String,
});
</script>

<style scoped>
div {
  width: fit-content;
  border-radius: 12px;
  padding: 10px 20px;
  border: 2px solid;
  font-weight: 700;
}
</style>

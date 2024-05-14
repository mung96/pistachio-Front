<template>
  <Flex class="images">
    <img v-for="image in props.images" :src="image" :key="image" />
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";

const props = defineProps({
  images: Array,
});
</script>

<style scoped>
div {
  width: 360px;
  height: 360px;
}
</style>

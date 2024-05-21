<template>
  <FeedItem v-if="type === 'feed'" :post="post" />
  <ProjectItem v-if="type === 'project'" :post="post" />
</template>

<script setup>
import FeedItem from "../mypost/FeedItem.vue";
import ProjectItem from "../mydonation/ProjectItem.vue";
const props = defineProps({
  type: String,
  post: Object,
});
</script>

<style scoped></style>

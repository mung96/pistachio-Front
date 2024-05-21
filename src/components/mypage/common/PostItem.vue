<template>
  <FeedItem v-if="type === 'feed'" :feed="post" />
  <ProjectItem v-if="type === 'project'" :project="post" />
</template>

<script setup>
import FeedItem from "../mypost/FeedItem.vue";
import ProjectItem from "../myproject/ProjectItem.vue";
const props = defineProps({
  type: String,
  post: Object,
});
</script>

<style scoped></style>

<template>
  <section>
    <FeedProfile :profile="props.feed.profile" />
    <FeedImages :images="props.feed.content.images" />
    <FeedContent :content="props.feed.content" />
  </section>
</template>

<script setup>
import FeedProfile from "./FeedProfile.vue";
import FeedContent from "./FeedContent.vue";
import FeedImages from "./FeedImages.vue";

const props = defineProps({
  feed: Object,
});
</script>

<style></style>

<template>
  <section>
    <Flex gap="8px" direction="column">
      <FeedProfile :profile="props.feed.profile" />
      <FeedImages :images="props.feed.content.images" />
      <FeedContent :content="props.feed.content" />
    </Flex>
  </section>
</template>

<script setup>
import FeedProfile from "./FeedProfile.vue";
import FeedContent from "./FeedContent.vue";
import FeedImages from "./FeedImages.vue";
import Flex from "@/design/Flex.vue";
const props = defineProps({
  feed: Object,
});
console.log(props.feed);
</script>

<style scoped></style>

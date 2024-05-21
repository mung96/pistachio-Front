<template>
  <section>
    <Flex gap="8px" direction="column">
      <FeedProfile :user="props.feed.userResponse" />
      <FeedPictures :pictures="props.feed.feedPictures" />
      <FeedContent :feed="props.feed" :type="type" />
    </Flex>
  </section>
</template>

<script setup>
import FeedProfile from "./FeedProfile.vue";
import FeedContent from "./FeedContent.vue";
import FeedPictures from "./FeedPictures.vue";
import Flex from "@/design/Flex.vue";
import { onMounted, ref } from "vue";
const user = ref({});
const props = defineProps({
  feed: Object,
  type: String,
});
</script>

<style scoped></style>

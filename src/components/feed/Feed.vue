<template>
  <section>
    <Flex gap="8px" direction="column">
      <!-- <FeedProfile :profile="props.user" /> -->
      <FeedPictures :pictures="props.feed.feedPictures" />
      <!-- <FeedContent :feed="props.feed" /> -->
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
});

onMounted(async () => {});
// console.log(props.feed);
</script>

<style scoped></style>

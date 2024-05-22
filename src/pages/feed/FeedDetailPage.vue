<template>
  <main>
    <Flex direction="column" gap="20px">
      <Feed :feed="feed" type="detail" />
      <Flex direction="column" gap="8px">
        <FeedComment
          v-for="comment in comments"
          :comment="comment"
          :key="comment"
      /></Flex>
      <CommentInput />
    </Flex>
  </main>
</template>

<script setup>
import Feed from "@/components/feed/Feed.vue";
import FeedComment from "@/components/feed/FeedComment.vue";
import { useFeedStore } from "@/stores/feed";
import Flex from "@/design/Flex.vue";
import CommentInput from "@/components/feed/CommentInput.vue";
import { ref, watch, watchEffect } from "vue";

const store = useFeedStore();
const feed = store.getFeed();
const comments = ref(feed.commentResponses);

watch(
  () => store.getFeed(),
  () => {
    comments.value = store.getFeed().commentResponses;
    console.log(comments.value);
  }
);
</script>

<style></style>

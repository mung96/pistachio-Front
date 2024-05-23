<template>
  <Flex
    @click="handleItemClick"
    class="item-container"
    align="center"
    justify="space-between"
  >
    <Flex gap="12px" align="center" justify="start">
      <img :src="imageURLParser(feed.feedPictures[0].url)" alt="게시글 사진" />
      <Flex direction="column">
        <!-- <span>{{ post.name }}</span> -->
        <span>{{ feed.feed.content.slice(0, 20) }}</span>
      </Flex>
    </Flex>
    <span>상세보기</span>
  </Flex>
</template>

<script setup>
import { PATH } from "@/constants/router";
import Flex from "@/design/Flex.vue";
import { useRoute, useRouter } from "vue-router";
import { useFeedStore } from "@/stores/feed";
import { imageURLParser } from "@/utils/imageURLParser";

const router = useRouter();
const route = useRoute();
const store = useFeedStore();
const props = defineProps({
  feed: Object,
});

const handleItemClick = () => {
  console.log(props.feed.feed.id);
  store.setFeed(props.feed);
  router.push(PATH.FEED_DETAIL(props.feed.feed.id));
};
</script>

<style scoped>
span {
  font: var(--sm-pre-font);
  white-space: nowrap;
}
img {
  width: 64px;
  height: 64px;
  border: 1px solid black;
}
.item-container {
  border-bottom: 1px solid var(--gray200-color);
  padding: 16px 0;
}
</style>

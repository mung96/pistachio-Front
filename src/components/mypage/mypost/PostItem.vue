<template>
  <Flex
    @click="handlePostClick"
    class="item-container"
    align="center"
    justify="space-between"
  >
    <Flex gap="12px" align="center">
      <img :src="imageURLParser(post.feedPictures[0].url)" alt="게시글 사진" />
      <Flex direction="column">
        <!-- <span>{{ post.name }}</span> -->
        <span>{{ post.feed.content.slice(0, 20) }}</span>
      </Flex>
    </Flex>
    <span>상세보기</span>
  </Flex>
</template>

<script setup>
import { PATH } from "@/constants/router";
import Flex from "@/design/Flex.vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useMypageStore } from "@/stores/mypage";
import { imageURLParser } from "@/utils/imageURLParser";

const router = useRouter();
const route = useRoute();
const myStore = useMypageStore();
const props = defineProps({
  post: Object,
});

const handlePostClick = () => {
  console.log(props.post);
  myStore.post = props.post;
  if (route.path === PATH.MY_DONATION) {
    router.push(PATH.MY_DONATION_PROJECT(props.post.postId));
  } else if (route.path === PATH.MY_LIKE) {
    router.push(PATH.MY_LIKE_DETAIL(props.post.postId));
  } else if (route.path === PATH.MY_POST) {
    router.push(PATH.MY_POST_DETAIL(props.post.postId));
  }
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

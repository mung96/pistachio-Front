<template>
  <Flex
    @click="handlePostClick"
    class="item-container"
    align="center"
    justify="space-between"
  >
    <Flex gap="12px" align="center">
      <img :src="props.post.images[0]" alt="게시글 사진" />
      <Flex direction="column" align="center">
        <span>{{ post.name }}</span>
        <span>{{ post.desc }}</span>
      </Flex>
    </Flex>
    <span>상세보기</span>
  </Flex>
</template>

<script setup>
import { PATH } from "@/constants/router";
import Flex from "@/design/Flex.vue";
import { RouterLink, useRouter } from "vue-router";
import { useMypageStore } from "@/stores/mypage";
const router = useRouter();
const props = defineProps({
  post: Object,
});
const store = useMypageStore();
const handlepostClick = () => {
  store.setpost(props.post);
  router.push(PATH.MY_DONATION_post(props.post.postId));
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

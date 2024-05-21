<template>
  <Flex direction="column" gap="20px">
    <Input
      @keyup.enter="handlEnter"
      @input="handleInputChange"
      placeholder="댓글을 입력해주세요"
    />
  </Flex>
</template>

<script setup>
import { useFeedStore } from "@/stores/feed";
import Flex from "@/design/Flex.vue";
import Input from "@/components/common/input/Input.vue";
import { postComment } from "@/apis/feed/postComment";
import { ref } from "vue";
const store = useFeedStore();
const feed = store.getFeed();
const comment = ref("");
console.log(feed);

const handleInputChange = (e) => {
  comment.value = e.target.value;
};

const handlEnter = () => {
  postComment(comment);
  comment.value = "";
};
</script>

<style scoped>
button {
  position: absolute;
  display: hidden;
  width: 0;
  height: 0;
}
</style>

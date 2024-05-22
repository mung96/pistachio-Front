<template>
  <Flex direction="column" gap="20px">
    <Input
      @keyup.enter="handleEnter"
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
import { useUserStore } from "@/stores/user";
import { getFeeds } from "@/apis/feed/getFeeds";
const feedStore = useFeedStore();
const userStore = useUserStore();
const feed = ref(feedStore.getFeed());

const comment = ref({
  feedId: feedStore.getFeed().feed.id,
  commentUser: userStore.getUser().userId,
});
console.log(feed);

const handleInputChange = (e) => {
  comment.value.content = e.target.value;
};

const handleEnter = async (e) => {
  if (e.target.value) {
    try {
      const response = await postComment(comment.value.feedId, comment.value);
      e.target.value = "";
      comment.value.content = "";

      //댓글 요청
      try {
        const response = await getFeeds();

        feedStore.setFeed(
          response.data.find((item) => {
            return item.feed.id === feed.value.feed.id;
          })
        );
        feed.value = feedStore.getFeed();
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }
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

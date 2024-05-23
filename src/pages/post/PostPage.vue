<template>
  <div>
    <TopbarPost />
    <form @submit.prevent>
      <Flex direction="column" gap="24px">
        <ImageUpload />
        <PostContent />
        <PostTag />
        <ChatGpt />
      </Flex>
    </form>
  </div>
</template>
<script setup>
import ImageUpload from "@/components/post/ImageUpload.vue";
import PostContent from "@/components/post/PostContent.vue";
import Flex from "@/design/Flex.vue";
import PostTag from "@/components/post/PostTag.vue";
import { usePostStore } from "@/stores/post";
import { useUserStore } from "@/stores/user";
import ChatGpt from "@/components/post/ChatGpt.vue";
import TopbarPost from "@/components/common/topbar/TopbarPost.vue";
const postStore = usePostStore();
const userStore = useUserStore();
</script>

<style scoped></style>

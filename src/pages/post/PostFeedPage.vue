<template>
  <form @submit.prevent>
    <Flex direction="column" gap="24px">
      <ImageUpload />
      <PostContent />
      <PostTag />
    </Flex>
  </form>
</template>
<script setup>
import ImageUpload from "@/components/post/ImageUpload.vue";
import PostContent from "@/components/post/PostContent.vue";
import Flex from "@/design/Flex.vue";
import PostTag from "@/components/post/PostTag.vue";
import { usePostStore } from "@/stores/post";
import { useUserStore } from "@/stores/user";

const postStore = usePostStore();
const userStore = useUserStore();
</script>

<style scoped></style>

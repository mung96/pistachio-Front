<template>
  <form @submit.prevent>
    <Flex direction="column" gap="24px">
      <ImageUpload />
      <PostContent />
    </Flex>
  </form>
</template>
<script setup>
import ImageUpload from "@/components/post/ImageUpload.vue";
import PostContent from "@/components/post/PostContent.vue";
import Flex from "@/design/Flex.vue";
</script>

<style scoped></style>

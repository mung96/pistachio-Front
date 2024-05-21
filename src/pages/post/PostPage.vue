<template>
  <form @submit.prevent>
    <Flex direction="column" gap="24px">
      <ImageUpload />
      <PostContent />
      <Flex direction="column" gap="16px" padding-left="16px">
        <Tag :color="palette.sub" text="인증글" />
        <Tag :color="palette.main" text="프로젝트이름" />
      </Flex>
    </Flex>
  </form>
</template>
<script setup>
import ImageUpload from "@/components/post/ImageUpload.vue";
import PostContent from "@/components/post/PostContent.vue";
import Flex from "@/design/Flex.vue";
import Tag from "@/components/post/Tag.vue";
import { palette } from "@/constants/color";
</script>

<style scoped></style>

<template>
  <main>
    <!-- <Title>{{ post.name }}</Title> -->
    <Flex direction="column" gap="20px">
      <ProjectImageUpload :imageLen="10" /> <PostContent />
    </Flex>

    <DonationBar />
  </main>
</template>
<script setup>
import ProjectImageUpload from "@/components/post/ProjectImageUpload.vue";
import PostContent from "@/components/post/PostContent.vue";
import Flex from "@/design/Flex.vue";
import Title from "@/components/common/title/Title.vue";
import DonationBar from "@/components/mypage/myproject/DonationBar.vue";

import { useProjectStore } from "@/stores/project";

const store = useProjectStore();
const post = store.getProject();
</script>

<style scoped>
.images {
  width: 360px;
  height: 200px;
}
.num {
  color: var(--sub-color);
  font: var(--xl-mm-font);
}
.text {
  font: var(--sm-pre-font);
  font-weight: 700;
}
.desc {
  font: var(--sm-pre-font);
}
</style>

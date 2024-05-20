<template>
  <main>
    <Feed :feed="post" />
    <!-- 댓글 -->
  </main>
</template>

<script setup>
import Title from "@/components/common/title/Title.vue";
import ProjectItem from "@/components/mypage/mydonation/ProjectItem.vue";
import { useMypageStore } from "@/stores/mypage";
import Feed from "@/components/feed/Feed.vue";

const store = usePostStore();
const post = store.getPost();
</script>

<style></style>

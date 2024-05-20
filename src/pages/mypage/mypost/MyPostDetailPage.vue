<template>
  <main>
    <Feed :feed="post" />
  </main>
</template>

<script setup>
import Title from "@/components/common/title/Title.vue";
import ProjectItem from "@/components/mypage/mydonation/ProjectItem.vue";
import { useMypageStore } from "@/stores/mypage";
import Feed from "@/components/feed/Feed.vue";

const store = useMypageStore();
const post = store.getPost();
</script>

<style></style>

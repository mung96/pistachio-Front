<template>
  <main>
    <Title>내가 좋아요 누른 글</Title>
    <PostItem v-for="project in projects" :key="project.id" :post="post" />
  </main>
</template>

<script setup>
import Title from "@/components/common/title/Title.vue";
import ProjectItem from "@/components/mypage/mydonation/ProjectItem.vue";
import { projects } from "@/dummy/mypage";
</script>

<style></style>

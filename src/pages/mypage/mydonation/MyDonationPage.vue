<template>
  <main>
    <Title>내가 한 기부</Title>
    <PostItem v-for="project in projects" :key="project.id" :post="project" />
  </main>
</template>

<script setup>
import Title from "@/components/common/title/Title.vue";
import PostItem from "@/components/mypage/mypost/PostItem.vue";
import { projects } from "@/dummy/mypage";
</script>

<style></style>

<template>
  <main>
    <Title>내가 한 기부</Title>
    <PostItem v-for="post in posts" :key="post" :post="post" type="project" />
  </main>
</template>

<script setup>
import Title from "@/components/common/title/Title.vue";
import PostItem from "@/components/mypage/common/PostItem.vue";
import { projects } from "@/dummy/mypage";
const posts = projects;
console.log(1);
</script>

<style></style>

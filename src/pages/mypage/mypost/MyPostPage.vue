<template>
  <main>
    <Title>좋아요 누른 글</Title>
    <PostItem v-for="post in POSTS" :key="post" :post="post" />
  </main>
</template>

<script setup>
import Title from "@/components/common/title/Title.vue";
import PostItem from "@/components/mypage/mypost/PostItem.vue";
import { POSTS } from "@/dummy/mypage";
import { projects } from "@/dummy/mypage";
</script>

<style></style>

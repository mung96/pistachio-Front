<template>
  <main>
    <Title>내가 작성한 글</Title>
    <PostItem v-for="post in posts" :key="post" :post="post" />
  </main>
</template>

<script setup>
import Title from "@/components/common/title/Title.vue";
import PostItem from "@/components/mypage/mypost/PostItem.vue";
import { POSTS } from "@/dummy/mypage";
import { projects } from "@/dummy/mypage";
import { onMounted, ref } from "vue";
import { getFeeds } from "@/apis/feed/getFeeds";
import { useMypageStore } from "@/stores/mypage";
const posts = ref([]);
onMounted(async () => {
  try {
    const response = await getFeeds();
    posts.value = response.data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style></style>

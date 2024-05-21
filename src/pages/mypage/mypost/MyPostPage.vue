<template>
  <main>
    <Title>내가 작성한 글</Title>
    <PostItem v-for="post in posts" :key="post" :post="post" type="feed" />
  </main>
</template>

<script setup>
import Title from "@/components/common/title/Title.vue";
import PostItem from "@/components/mypage/common/PostItem.vue";
import { onMounted, ref } from "vue";
import { getFeeds } from "@/apis/feed/getFeeds";
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

<template>
  <main>
    <Title v-if="type === 'post'">작성한 글</Title>
    <Title v-if="type === 'like'">좋아요 누른 글</Title>
    <PostItem v-for="post in posts" :key="post" :post="post" type="feed" />
  </main>
</template>

<script setup>
import Title from "@/components/common/title/Title.vue";
import PostItem from "@/components/mypage/common/PostItem.vue";
import { onMounted, ref } from "vue";
import { getFeeds } from "@/apis/feed/getFeeds";
import { useRoute } from "vue-router";
import { PATH } from "@/constants/router";

const route = useRoute();
const posts = ref([]);
const type = ref("");

onMounted(async () => {
  if (route.path === PATH.MY_LIKE) {
    type.value = "like";
  } else if (route.path === PATH.MY_POST) {
    type.value = "post";
  }

  try {
    //TODO: type별로 api요청 다르게
    const response = await getFeeds();
    posts.value = response.data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style></style>

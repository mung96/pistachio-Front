<template>
  <div>
    <TopbarMy />
    <main>
      <Title v-if="userType === USER_TYPE.USER">내가 한 기부</Title>
      <Title v-if="userType === USER_TYPE.PISTACHIO">참여 프로젝트</Title>
      <Title v-if="userType === USER_TYPE.AGENCY">모든 프로젝트</Title>
      <PostItem v-for="post in posts" :key="post" :post="post" type="project" />
    </main>
  </div>
</template>

<script setup>
import Title from "@/components/common/title/Title.vue";
import PostItem from "@/components/mypage/common/PostItem.vue";
import { USER_TYPE } from "@/constants/user";
import { projects } from "@/dummy/mypage";
import { useUserStore } from "@/stores/user";
import { getDonate } from "@/apis/donate/getDonate";
import { ref } from "vue";
import { onMounted } from "vue";
import TopbarMy from "@/components/common/topbar/TopbarMy.vue";
import { getMyFeed } from "@/apis/feed/getMyFeed";
import { getProject } from "@/apis/donate/getProject";
const posts = ref([]);
const userStore = useUserStore();
const { userType } = useUserStore();

onMounted(async () => {
  //usertype별로 api 요청

  try {
    const response = await getDonate();
    console.log(response.data);
    posts.value = response.data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style></style>

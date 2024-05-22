<template>
  <main>
    <Title v-if="userType === USER_TYPE.USER">내가 한 기부</Title>
    <Title v-if="userType === USER_TYPE.PISTACHIO">참여 프로젝트</Title>
    <Title v-if="userType === USER_TYPE.AGENCY">모든 프로젝트</Title>
    <PostItem v-for="post in posts" :key="post" :post="post" type="project" />
  </main>
</template>

<script setup>
import Title from "@/components/common/title/Title.vue";
import PostItem from "@/components/mypage/common/PostItem.vue";
import { USER_TYPE } from "@/constants/user";
import { projects } from "@/dummy/mypage";
import { useUserStore } from "@/stores/user";

const posts = projects;
const { userType } = useUserStore();
</script>

<style></style>

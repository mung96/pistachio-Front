<template>
  <main>
    <Title>내가 한 기부</Title>
    <ProjectItem
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </main>
</template>

<script setup>
import Title from "@/components/common/title/Title.vue";
import ProjectItem from "@/components/mypage/mydonation/ProjectItem.vue";
import { projects } from "@/dummy/mypage";
</script>

<style></style>

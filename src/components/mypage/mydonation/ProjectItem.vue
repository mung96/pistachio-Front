<template>
  <Flex
    @click="handleProjectClick"
    class="item-container"
    align="center"
    justify="space-between"
  >
    <Flex gap="12px" align="center">
      <!-- <img :src="props.project.images[0]" alt="프로젝트사진" /> -->
      <Flex direction="column" align="center">
        <!-- <span>{{ project.name }}</span>
        <span>{{ project.desc }}</span> -->
      </Flex>
    </Flex>
    <span>상세보기</span>
  </Flex>
</template>

<script setup>
import { PATH } from "@/constants/router";
import Flex from "@/design/Flex.vue";
import { RouterLink, useRouter } from "vue-router";
import { useProjectStore } from "@/stores/project";
const router = useRouter();
const props = defineProps({
  project: Object,
});
const store = useProjectStore();
const handleProjectClick = () => {
  store.setProject(props.project);
  router.push(PATH.MY_DONATION_PROJECT(props.project.projectId));
};
</script>

<style scoped>
span {
  font: var(--sm-pre-font);
  white-space: nowrap;
}
img {
  width: 64px;
  height: 64px;
  border: 1px solid black;
}
.item-container {
  border-bottom: 1px solid var(--gray200-color);
  padding: 16px 0;
}
</style>

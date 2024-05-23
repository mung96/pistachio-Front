<template>
  <Flex
    v-if="userStore.getUser().userType === USER_TYPE.USER"
    class="donation-bar"
    height="56px"
    width="100%"
    align="center"
    basis="90px"
    justify="stretch"
    gap="8px"
  >
    <Button :disabled="projectStore.getProject().boast" @click="handleAuthBtn"
      >인증하기</Button
    >
  </Flex>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import Flex from "@/design/Flex.vue";
import Button from "@/components/common/button/Button.vue";
import { useProjectStore } from "@/stores/project";
import { useUserStore } from "@/stores/user";
import { USER_TYPE } from "@/constants/user";
import { PATH } from "@/constants/router";
import { usePostStore } from "@/stores/post";

const router = useRouter();
const userStore = useUserStore();
const store = useProjectStore();
const project = ref(store.getProject());
const isLike = ref(project.value.isLike);
const likeCount = computed(() => project.value.likeCnt);
const projectStore = useProjectStore();
const postStore = usePostStore();
// const handleClickHeart = () => {
//   isLike.value = !isLike.value;
//   project.value.likeCnt = isLike.value
//     ? project.value.likeCnt + 1
//     : project.value.likeCnt - 1;
// };

console.log(project.value);
const handleAuthBtn = () => {
  postStore.setPostType("project");
  postStore.setProjectId(project.value.projectId);
  postStore.setProjectName(project.value.projectName);
  postStore.setPostType("project");
  router.push(PATH.POST);
};
</script>

<style scoped>
.donation-bar {
  padding: 4px 12px;
  position: fixed;
  bottom: 0;
  background-color: white;
  z-index: 9999;
}
.like-cnt {
  font: var(--base-mm-font);
  color: var(--sub-color);
}
</style>

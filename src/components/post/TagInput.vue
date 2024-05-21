<template>
  <input
    @keyup.enter="handleEnter"
    @input="handleInputChange"
    class="project-input"
    placeholder="프로젝트 이름을 입력해주세요"
  />
</template>
<script setup>
import { usePostStore } from "@/stores/post";
import { ref } from "vue";
const store = usePostStore();
const projectName = ref("");
const handleEnter = (e) => {
  store.setProjectName(projectName.value);
  store.setIsInput(false);
};

const handleInputChange = (e) => {
  projectName.value = e.target.value;
};
</script>

<style scoped>
.project-input {
  width: fit-content;
  height: 43px;
  border-radius: 12px;
  padding: 10px 20px;
  border: none;
  outline: none;
  font-weight: 700;
  background-color: var(--gray100-color);
}
</style>

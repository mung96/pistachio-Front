<template>
  <dic>
    <Tag
      class="btn"
      @click="handleAiBtn"
      text="인증글 추천받기"
      :color="palette.sub"
      ><Button @click="handleAiBtn"> </Button
    ></Tag>
    <p class="answer">{{ gptResponse }}</p>
    <Button class="btn-apply" v-if="gptResponse != ''">
      <p @click="handleSubmitBtn">적용하기</p>
    </Button>
  </dic>
</template>

<script setup>
import { getGptResponse } from "@/apis/chatgpt/getGptResponse";
import { usePostStore } from "@/stores/post";
import { ref } from "vue";
import Button from "../common/button/Button.vue";
import Tag from "./Tag.vue";
import { palette } from "@/constants/color";
import Flex from "@/design/Flex.vue";

const postStore = usePostStore();
const gptResponse = ref("");

const handleAiBtn = async () => {
  const response = await getGptResponse({
    projectName: postStore.getProjectName(),
  });
  gptResponse.value = response;
};

const handleSubmitBtn = async () => {
  postStore.setContent(gptResponse.value);
};
</script>

<style scoped>
.answer {
  padding: 16px;
}
.btn {
  margin-left: 16px;
}
.btn-apply {
  width: 50%;
  margin-left: 16px;
}
</style>

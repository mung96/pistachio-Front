<template>
  <div>
    <p @click="handleAiBtn">AI</p>
    <p>{{gptResponse}}</p>
    <rect v-if="gptResponse != ''">
        <p @click="handleSubmitBtn">적용</p>
    </rect>
  </div>
</template>

<script setup>
import { getGptResponse } from "@/apis/chatgpt/getGptResponse";
import { usePostStore } from "@/stores/post";
import { ref } from "vue";

const postStore = usePostStore();
const gptResponse = ref("");

const handleAiBtn = async () => {
    const response = await getGptResponse({projectName: "가나에 물주기"});
    gptResponse.value = response;
}

const handleSubmitBtn = async () => {
    postStore.setContent(gptResponse.value);
}

</script>

<style scoped></style>

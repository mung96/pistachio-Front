<template>
  <div class="container">
    <textarea
      rows="9"
      @keydown="handleKeyDown"
      :maxlength="POST_CONTENT_LENGTH"
      v-model="store.content"
    ></textarea>
    <span>{{ message.length }}/{{ POST_CONTENT_LENGTH }}</span>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { POST_CONTENT_LENGTH } from "@/constants/ui";
import { usePostStore } from "@/stores/post";
const message = ref("");
const store = usePostStore();

const handleKeyDown = (e) => {
  store.setContent(e.target.value);
};
</script>

<style scoped>
.container {
  position: relative;
}
textarea {
  padding: 12px 16px;
  width: 100%;
  border: none;
  border-top: 1px solid var(--gray700-color);
  border-bottom: 1px solid var(--gray700-color);
  font: var(--sm-pre-font);
}
textarea:focus {
  outline: none;
}
span {
  position: absolute;
  font: var(--xs-mm-font);
  bottom: 0;
  right: 0;
  transform: translate(-100%, -100%);
}
</style>

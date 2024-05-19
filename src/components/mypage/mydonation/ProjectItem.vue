<template>
  <Flex class="item-container" align="center" justify="space-between">
    <Flex gap="12px" align="center">
      <img src="" alt="프로젝트사진" />
      <Flex direction="column" align="center">
        <span>프로젝트 이름</span>
        <span>설명설명</span>
      </Flex>
    </Flex>
    <span>상세보기</span>
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
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

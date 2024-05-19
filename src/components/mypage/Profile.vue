<template>
  <Flex class="container" gap="45px" align="center">
    <img src="" alt="프로필사진" />
    <Flex gap="48px">
      <Flex direction="column" align="center"
        ><span>36</span><span>게시물</span></Flex
      >
      <Flex direction="column" align="center"
        ><span>36</span><span>팔로워</span></Flex
      >
      <Flex direction="column" align="center"
        ><span>36</span><span>팔로잉</span></Flex
      >
    </Flex>
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
</script>

<style scoped>
h3 {
  font: var(--xl-pre-font);
  font-weight: 700;
}
span {
  font: var(--sm-pre-font);
  white-space: nowrap;
}
img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.container {
  border: 1px solid black;
  border-radius: 12px;
  padding: 12px;
}
</style>

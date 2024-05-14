<template>
  <Flex
    padding-left="16px"
    padding-right="16px"
    justify="space-between"
    align="center"
  >
    <Flex align="center" gap="8px">
      <div><p>프로필</p></div>
      <Flex direction="column">
        <p class="nickname">닉네임</p>
        <p class="location">지역</p>
      </Flex>
    </Flex>

    <Flex gap="8px" align="center">
      <p class="project">케냐에 학교 짓기</p>
      <p class="organization">UNICEF</p>
      <button class="follow-btn">팔로우</button>
    </Flex>
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
</script>

<style scoped>
.nickname {
  font: var(--xs-pre-font);
  font-weight: 700;
}
.location {
  font: var(--xxs-pre-font);
  color: var(--gray600-color);
}
.project {
  font: var(--base-mm-font);
  color: var(--sub-color);
}
.organization {
  font: var(--sm-mm-font);
  font-weight: 700;
}
.follow-btn {
  border: none;
  outline: none;
  background-color: white;

  font: var(--sm-mm-font);
  color: var(--sub-color);
}
</style>

<template>
  <Flex direction="column" padding-left="16px" padding-right="16px" gap="4px">
    <Flex align="center" gap="8px">
      <HeartIcon />
      <MoneyIcon />
    </Flex>
    <p class="like-cnt">927,643 LIKES</p>
    <Flex align="center" gap="8px">
      <p class="title">여러분 덕분에 학교를 짓고 있어요!</p>
      <p class="more">...더보기</p>
    </Flex>
    <p class="see-comment">댓글 모두 보기</p>
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import MoneyIcon from "@/assets/svg/moneyIcon.svg";
import HeartIcon from "@/assets/svg/heartIcon.svg";
</script>

<style scoped>
.like-cnt {
  font: var(--base-mm-font);
  color: var(--sub-color);
}
.title {
  font: var(--sm-pre-font);
  font-weight: 700;
}

.see-comment,
.more {
  font: var(--xs-pre-font);
  color: var(--gray600-color);
}
</style>

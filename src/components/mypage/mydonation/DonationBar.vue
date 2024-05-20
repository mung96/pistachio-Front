<template>
  <Flex
    class="donation-bar"
    height="56px"
    width="100%"
    align="center"
    basis="90px"
    justify="stretch"
    gap="8px"
  >
    <Flex @click="handleClickHeart" direction="column" align="center">
      <p>{{ project.like }}</p>
      <HeartIcon :fill="isLike ? '#50d6b0' : 'none'" />
      <p class="like-cnt">{{ likeCount }}</p>
    </Flex>

    <Button>후원하기</Button>
  </Flex>
</template>

<script setup>
import { computed, ref } from "vue";
import Flex from "@/design/Flex.vue";
import Button from "@/components/common/button/Button.vue";
import HeartIcon from "@/assets/svg/heartIcon.svg";
import { useMypageStore } from "@/stores/mypage";

const store = useMypageStore();
const project = store.getProject();
const isLike = ref(project.isLike);

const likeCount = computed(() => project.likeCnt);

const handleClickHeart = () => {
  isLike.value = !isLike.value;
  project.likeCnt = isLike.value ? project.likeCnt + 1 : project.likeCnt - 1;
};
</script>

<style scoped>
.donation-bar {
  padding: 4px 12px;
  position: fixed;
  bottom: 0;
  background-color: white;
}
.like-cnt {
  font: var(--base-mm-font);
  color: var(--sub-color);
}
</style>

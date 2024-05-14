<template>
  <header v-if="type !== 'none'" :class="scrollDirection">
    <Flex
      width="100%"
      height="56px"
      align="center"
      justify="space-between"
      padding-top="16px"
      padding-bottom="16px"
      padding-right="16px"
      padding-left="16px"
    >
      <ArrowLeftIcon v-if="type === 'back'" width="24" height="24" />
      <Logo v-if="type === 'main'" />
      <span v-if="type !== 'main'">텍스트</span>
      <BellIcon v-if="type !== 'not-login'" width="24" height="24" />
    </Flex>
  </header>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import Logo from "@/assets/svg/logo.svg";
import BellIcon from "@/assets/svg/bellIcon.svg";
import ArrowLeftIcon from "@/assets/svg/arrowLeftIcon.svg";

import { ref, computed } from "vue";
import { PATH, TOP_BAR_TYPE } from "@/constants/router";
import { useRoute } from "vue-router";

const route = useRoute();

// route에 따라 렌더링 로직 다시짜야할듯
const type = computed(() => {
  const key = Object.keys(PATH).findIndex((key) => PATH[key] === route.path);
  return TOP_BAR_TYPE[Object.keys(PATH)[key]];
});

const scrollDirection = ref("");

let lastScrollPosition = window.scrollY;

window.addEventListener("scroll", function () {
  const curScrollPosition = window.scrollY;
  curScrollPosition - lastScrollPosition > 0
    ? (scrollDirection.value = "scroll-down")
    : (scrollDirection.value = "scroll-up");
  lastScrollPosition = curScrollPosition;
});
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  transition: 0.4s;
}

.scroll-up {
  /* 혹시 다른 내용이 들어갈수도 있어서 남겨둠 */
  transform: translateY(0);
}

.scroll-down {
  transform: translateY(-100%);
}
</style>

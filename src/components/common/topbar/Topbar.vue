<template>
  <header :class="scrollDirection">
    <Flex width="100%" height="56px" align="center" justify="center">
      <Logo />
    </Flex>
  </header>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import Logo from "@/assets/svg/logo.svg";

import { ref } from "vue";
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

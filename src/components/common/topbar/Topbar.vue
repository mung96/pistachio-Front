<template>
  <header :class="{ scroll: isScroll }">
    <Flex width="360px" height="56px" align="center" justify="center">
      <Logo />
    </Flex>
  </header>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import Logo from "@/assets/svg/logo.svg";

import { ref } from "vue";
const isScroll = ref(false);
window.addEventListener("scroll", function () {
  isScroll.value = true;
});
window.addEventListener("scrollend", function () {
  isScroll.value = false;
});
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  background-color: white;
}

.scroll {
  transform: translateY(-100%);
  transition: 1s;
}
</style>

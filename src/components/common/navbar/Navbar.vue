<template>
  <nav @scroll="handleScroll" v-if="!isScroll">
    <Flex
      width="360px"
      height="56px"
      align="center"
      basis="90px"
      justify="stretch"
    >
      <NavItem :page="page" v-for="page in pages" :key="page.name" />
    </Flex>
  </nav>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import NavItem from "@/components/common/navbar/NavItem.vue";
import { pages } from "@/constants/navbar";

// import { ref } from "vue";

// const isScroll = ref(false);

// window.addEventListener("scroll", function () {
//   isScroll.value = true;
// });
// window.addEventListener("scrollend", function () {
//   isScroll.value = false;
// });
</script>

<style scoped>
nav {
  width: 100vw;
  position: fixed;
  bottom: 0;
  background-color: white;
}
</style>

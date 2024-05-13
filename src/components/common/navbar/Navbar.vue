<template>
  <nav @scroll="handleScroll" v-if="!isScroll">
    <Flex
      width="100%"
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
</script>

<style scoped>
nav {
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: white;
}
</style>

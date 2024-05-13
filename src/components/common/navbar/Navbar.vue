<template>
  <nav>
    <Flex
      width="360px"
      height="56px"
      align="center"
      justify="space-between"
      padding-left="24px"
      padding-right="24px"
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
  width: 360px;
}
</style>

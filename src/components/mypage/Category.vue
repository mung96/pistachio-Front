<template>
  <Flex class="container" gap="12px" align="center" direction="column">
    <CategoryItem
      v-for="category in CATEGORIES"
      :icon="category.icon"
      :key="category"
      >{{ category.name }}</CategoryItem
    >
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import CategoryItem from "@/components/mypage/CategoryItem.vue";
import { CATEGORIES } from "@/constants/mypage";
</script>

<style scoped>
.container {
  border: 1px solid black;
  border-radius: 12px;
  padding: 16px 12px;
}
</style>

<template>
  <Flex class="container" gap="12px" align="center" direction="column">
    <CategoryItem
      v-for="category in categories"
      :category="category"
      :key="category"
    />
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import CategoryItem from "@/components/mypage/CategoryItem.vue";
import { CATEGORIES } from "@/constants/mypage";
import { useUserStore } from "@/stores/user";

const store = useUserStore();
const categories = CATEGORIES[store.getUserType()];
console.log(categories);
</script>

<style scoped>
.container {
  border: 1px solid black;
  border-radius: 12px;
  padding: 16px 12px;
}
</style>

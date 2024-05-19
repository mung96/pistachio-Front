<template>
  <Flex
    @click="handleCategoryClick"
    class="item-container"
    justify="space-between"
  >
    <Flex gap="12px">
      <component :is="category.icon" width="24px" height="24px" />
      <p>{{ category.name }}</p>
    </Flex>
    <ArrowRightIcon width="24px" height="24px" />
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import ArrowRightIcon from "@/assets/svg/arrowRightIcon.svg";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  category: Object,
});

const handleCategoryClick = () => {
  props.category.name === "로그아웃"
    ? console.log("로그아웃")
    : router.push(props.category.path);
};
</script>

<style scoped>
.item-container {
  border-bottom: 1px solid var(--gray200-color);
  width: 100%;
  padding: 8px 12px;
}
p {
  font: var(--sm-pre-font);
}
</style>

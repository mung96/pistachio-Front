<template>
  <Flex class="item-container" justify="space-between">
    <Flex gap="12px">
      <component :is="icon" width="24px" height="24px" />
      <p><slot></slot></p>
    </Flex>
    <ArrowRightIcon width="24px" height="24px" />
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import ArrowRightIcon from "@/assets/svg/arrowRightIcon.svg";
const props = defineProps({
  icon: Object,
});
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

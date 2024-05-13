<template>
  <RouterLink :to="page.path">
    <Flex direction="column" align="center" gap="2px">
      <component :is="page.icon" width="24" />
      <span>{{ page.name }}</span>
    </Flex>
  </RouterLink>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import { RouterLink } from "vue-router";

defineProps({
  page: Object,
});
</script>

<style scoped>
span {
  font: var(--xs-pre-font);
}
div {
  min-width: 90px;
}
a {
  flex-grow: 1;
}
</style>

<template>
  <RouterLink :to="props.page.path">
    <Flex direction="column" align="center" gap="2px">
      <component v-if="!isActive" :is="props.page.icon" width="24" />
      <component v-else :is="props.page.fill" width="24" />
      <span v-if="!isActive">{{ page.name }}</span>
      <span v-else class="active-span">{{ page.name }}</span>
    </Flex>
  </RouterLink>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import { RouterLink, useRoute } from "vue-router";
import { computed } from "vue";

const props = defineProps({
  page: Object,
});

const route = useRoute();

const isActive = computed(() => {
  return route.path === props.page.path;
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

.active-span {
  color: var(--sub-color);
}
</style>

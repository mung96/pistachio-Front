<template>
  <Flex @click="handleNavClick" direction="column" align="center" gap="2px">
    <component v-if="!isActive" :is="props.page.icon" width="24" />
    <component v-else :is="props.page.fill" width="24" />
    <span v-if="!isActive">{{ page.name }}</span>
    <span v-else class="active-span">{{ page.name }}</span>
  </Flex>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { PATH } from "@/constants/router";
import { usePostStore } from "@/stores/post";
import { ref } from "vue";
const postStore = usePostStore();
const props = defineProps({
  page: Object,
});

const route = useRoute();
const router = useRouter();

const isActive = computed(() => {
  return route.path === props.page.path;
});

const handleNavClick = () => {
  props.page.path === PATH.POST && (postStore.postType = "new");
  router.push(props.page.path);
};
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

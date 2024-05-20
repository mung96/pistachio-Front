<template>
  <header v-if="type !== 'none'" :class="scrollDirection">
    <Flex
      width="100%"
      height="56px"
      align="center"
      justify="space-between"
      padding-top="16px"
      padding-bottom="16px"
      padding-right="16px"
      padding-left="16px"
    >
      <component v-if="typeof type.left === 'object'" :is="type.left" />
      <p v-else-if="typeof type.left === 'string'">{{ type.left }}</p>
      <div v-else></div>

      <component v-if="typeof type.center === 'object'" :is="type.center" />
      <p v-else-if="typeof type.center === 'string'">{{ type.center }}</p>
      <div v-else></div>

      <component v-if="typeof type.right === 'object'" :is="type.right" />
      <p
        @click="handleCreatePostBtn"
        v-else-if="typeof type.right === 'string'"
      >
        {{ type.right }}
      </p>
      <div v-else></div>
    </Flex>
  </header>
</template>

<script setup>
import Flex from "@/design/Flex.vue";

import { ref, computed } from "vue";
import { PATH, TOP_BAR_TYPE } from "@/constants/router";
import { useRoute } from "vue-router";
import { usePostStore } from "@/stores/post";
import { postFeed } from "@/apis/feed/postFeed";

const props = defineProps({
  left: Object | String,
  center: Object | String,
  right: Object | String,
});

const postStore = usePostStore();

const handleCreatePostBtn = async () => {
  const response = await postFeed();
  console.log(response);
  postStore.setImages([]);
  postStore.setContent("");
  console.log("등록");
};

const route = useRoute();

// route에 따라 렌더링 로직 다시짜야할듯
const type = computed(() => {
  const key = Object.keys(PATH).findIndex((key) => PATH[key] === route.path);
  console.log(key);
  console.log(PATH[key]);
  console.log(route.path);
  return TOP_BAR_TYPE[Object.keys(PATH)[key]];
});

const scrollDirection = ref("");

let lastScrollPosition = window.scrollY;

window.addEventListener("scroll", function () {
  const curScrollPosition = window.scrollY;
  curScrollPosition - lastScrollPosition > 0
    ? (scrollDirection.value = "scroll-down")
    : (scrollDirection.value = "scroll-up");
  lastScrollPosition = curScrollPosition;
});
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  transition: 0.4s;
}

.scroll-up {
  /* 혹시 다른 내용이 들어갈수도 있어서 남겨둠 */
  transform: translateY(0);
}

.scroll-down {
  transform: translateY(-100%);
}
</style>

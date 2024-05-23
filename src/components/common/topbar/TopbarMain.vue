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
      <Logo />

      <BellIcon />
    </Flex>
  </header>
</template>

<script setup>
import Flex from "@/design/Flex.vue";
import Logo from "@/assets/svg/logo.svg";
import BellIcon from "@/assets/svg/bellIcon.svg";
import { ref, computed } from "vue";
import { NAME, PATH, TOP_BAR_TYPE } from "@/constants/router";
import { useRoute } from "vue-router";
import { usePostStore } from "@/stores/post";
import { postFeed } from "@/apis/feed/postFeed";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { USER_TYPE } from "@/constants/user";
import { postProject } from "@/apis/project/postProject";

const userStore = useUserStore();

const router = useRouter();
const props = defineProps({
  left: Object | String,
  center: Object | String,
  right: Object | String,
});

const postStore = usePostStore();

const handleCreatePostBtn = async () => {
  if (userStore.getUserType() === USER_TYPE.AGENCY) {
    try {
      const response = await postProject();

      postStore.projectId = response.data;
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  try {
    const response = await postFeed();
    postStore.setImages([]);
    postStore.setContent("");
    router.push(PATH.FEED);
  } catch (error) {
    console.log(error);
  }
};

const route = useRoute();

// route에 따라 렌더링 로직 다시짜야할듯
const type = computed(() => {
  const key = Object.keys(PATH).findIndex((key) => NAME[key] === route.name);
  Object.keys(PATH).forEach((key) => console.log(NAME[key]));
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

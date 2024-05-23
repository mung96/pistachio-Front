<template>
  <Flex
    @click="handleProjectClick"
    class="item-container"
    align="center"
    justify="space-between"
  >
    <Flex gap="12px" align="center">
      <img
        v-if="feed && feed.feedPictures && feed.feedPictures.length > 0"
        :src="imageURLParser(feed.feedPictures[0].url)"
        alt="프로젝트사진"
      />
      <Flex direction="column" align="center">
        <span>{{ project.projectName }}</span>
        <span>{{ project.projectDescription }}</span>
      </Flex>
    </Flex>
    <span>상세보기</span>
  </Flex>
</template>

<script setup>
import { PATH } from "@/constants/router";
import Flex from "@/design/Flex.vue";
import { useRouter } from "vue-router";
import { useProjectStore } from "@/stores/project";
import { onMounted, ref } from "vue";
import { getFeeds } from "@/apis/feed/getFeeds";
import { imageURLParser } from "@/utils/imageURLParser";

const router = useRouter();
const props = defineProps({
  project: Object,
});
const feed = ref(null); // Changed from an array to a single object
const store = useProjectStore();

const handleProjectClick = () => {
  store.setProject(props.project);
  router.push(PATH.PROJECT_DETAIL(props.project.projectId));
};

onMounted(async () => {
  try {
    const response = await getFeeds();
    const matchedFeed = response.data.find(
      (item) => item.feed.projectId === props.project.projectId
    );
    if (matchedFeed) {
      feed.value = matchedFeed;
      console.log(feed.value);
      // if (feed.value.feedPictures && feed.value.feedPictures.length > 0) {
      //   console.log(imageURLParser(feed.value.feedPictures[0].url));
      // }
    } else {
      console.log("No matching feed found");
    }
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped>
span {
  font: var(--sm-pre-font);
  white-space: nowrap;
}
img {
  width: 64px;
  height: 64px;
  border: 1px solid black;
}
.item-container {
  border-bottom: 1px solid var(--gray200-color);
  padding: 16px 0;
}
</style>

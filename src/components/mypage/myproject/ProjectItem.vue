<template>
  <Flex
    @click="handleProjectClick"
    class="item-container"
    align="center"
    justify="space-between"
  >
    <Flex gap="12px" align="center" justify="start">
      <img
        v-if="feed && feed.feedPictures && feed.feedPictures.length > 0"
        :src="imageURLParser(feed.feedPictures[0].url)"
        alt="프로젝트사진"
      />
      <Flex direction="column">
        <span class="project-name">{{ project.projectName }}</span>
        <span>{{ project.projectDescription.slice(0, 15) }}</span>
      </Flex>
    </Flex>
    <span class="seemore">상세보기</span>
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
      store.setProject({
        projectId: props.project.projectId,
        projectName: props.project.projectName,
        projectDescription: props.project.projectDescription,
        boast: props.project.boast,
        images: feed.value.feedPictures,
      });
      console.log(feed.value.feedPictures);
      console.log(store.getProject());
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
.project-name {
  color: var(--sub-color);
  font: var(--base-mm-font);
}
img {
  width: 64px;
  height: 64px;
  border: 1px solid black;
}
.seemore {
  color: var(--gray600-color);
}
.item-container {
  border-bottom: 1px solid var(--gray200-color);
  padding: 16px 0;
}
</style>

<template>
  <div>
    <TopbarMain />
    <main>
      <Flex direction="column" gap="32px">
        <Feed
          v-for="feed in feeds"
          :feed="feed"
          :key="feed"
          @click="handleFeedClick"
        />
      </Flex>
    </main>
  </div>
</template>

<script setup>
import Feed from "@/components/feed/Feed.vue";
import Flex from "@/design/Flex.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { postLikeUpdate } from "@/apis/feed/postLikeUpdate";
import { getFeeds } from "@/apis/feed/getFeeds";
import { KEY } from "@/utils/likeLocalStorage";
import TopbarMain from "@/components/common/topbar/TopbarMain.vue";
const feeds = ref([]);

onMounted(async () => {
  try {
    const response = await getFeeds();
    console.log(response.data);
    feeds.value = response.data;
  } catch (error) {
    console.log(error);
  }
});

onUnmounted(async () => {
  try {
    if (localStorage.getItem(KEY)) {
      const response = await postLikeUpdate();
      console.log(response);
    }
  } catch (error) {
    console.log(error.request);
  }
});
</script>

<style></style>

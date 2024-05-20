<template>
  <main>
    <!-- <SignupCompleteModal /> -->
    <Flex direction="column" gap="16px">
      <Feed v-for="feed in feeds" :feed="feed" :key="feed" />
    </Flex>
  </main>
</template>

<script setup>
import Feed from "@/components/feed/Feed.vue";
import Flex from "@/design/Flex.vue";
import { ref, onMounted } from "vue";
import { response } from "@/dummy/feed";
import SignupCompleteModal from "@/modals/SignupCompleteModal.vue";
import { getFeeds } from "@/apis/feed/getFeeds";
const feeds = ref([]);

onMounted(async () => {
  try {
    const response = await getFeeds();
    feeds.value = response.data;
    console.log(feeds.value);
  } catch (error) {
    console.log(error);
  }
});
</script>

<style></style>
